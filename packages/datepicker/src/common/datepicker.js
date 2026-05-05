/* eslint-disable no-use-before-define */
import {
    ref, unref as $, computed, reactive, watch, toRef, isReactive
} from 'vue';
import { array, object, number, date, boolean, defaulted, create, validate, union, enums, optional } from 'superstruct';
import { createSequentialArray as csa } from './_utils';

export default function useGhDatePicker(customOptions, d) {
    const optionsStruct = object({
        preselectedDay: optional(date()),
        preselectedDays: defaulted(array(date()), []),
        calendar: defaulted(
            object({
                initialDate: defaulted(
                    union([
                        date(),
                        object({
                            from: date(),
                            to: date()
                        })
                    ]),
                    new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0, 0)
                ),
                overflow: defaulted(boolean(), false)
            }),
            {
                initialDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0, 0),
                overflow: false
            }
        ),
        selection: defaulted(
            object({
                multi: union([
                    enums([false]),
                    object({
                        maximum: number(),
                        onOverflow: defaulted(enums(['FIFO', 'LIFO']), 'FIFO')
                    })
                ]),
                range: union([
                    enums([false]),
                    object({
                        onFull: enums(['fresh', 'modify'])
                    })
                ]),
                allowEmpty: boolean()
            }),
            {
                multi: false,
                range: false,
                allowEmpty: true
            }
        )
    });

    const $f = (arr) => { return $(arr)?.[0]; };
    const $l = (arr) => { return $(arr)?.[$(arr).length - 1]; };

    const options = ref(create($(customOptions), optionsStruct));
    validate(options.value, optionsStruct);
    if (isReactive(customOptions)) {
        watch(customOptions, () => {
            options.value = create($(customOptions), optionsStruct);
            validate(options.value, optionsStruct);
        }, { deep: true });
    }

    // Helpers and Utils
    const sortTwoDays = (firstDate, secondDate) => {
        if (d.isBefore(firstDate, secondDate)) {
            return [firstDate, secondDate];
        }
        return [secondDate, firstDate];
    };

    const withSelectMode = ({
        single: singleCallback,
        multi: multiCallback,
        range: rangeCallback,
        multiOrRange: multiOrRangeCallback
    }) => {
        if ((options.value.selection.multi || options.value.selection.range) && multiOrRangeCallback) { return multiOrRangeCallback(); }
        if (options.value.selection.multi) { return multiCallback(); }
        if (options.value.selection.range) { return rangeCallback(); }
        return singleCallback();
    };

    const getDayInWeek = (date) => {
        return +d.format(date, 'e') - 1;
    }


    // Calendar //
    const now = {
        year: new Date(new Date().getFullYear(), 1, 1),
        month: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        day: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
        date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0, 0)
    };

    watch(() => { return toRef(options.value.calendar, 'initialDate') }, () => {
        options.value.calendar.activeDate = {
            from: options.value.calendar.initialDate?.from || d.startOfMonth(
                options.value.calendar.initialDate?.to ||
                options.value.calendar.initialDate ||
                new Date()
            ),
            to: options.value.calendar.initialDate?.to || d.endOfMonth(
                options.value.calendar.initialDate?.from ||
                options.value.calendar.initialDate ||
                new Date()
            )
        }
    }, { deep: true, immediate: true });

    const monthMode = computed(() => {
        if (
            d.differenceInCalendarMonths(options.value.calendar.activeDate.to, options.value.calendar.activeDate.from) >= 1
        ) { return 'multi'; }
        return 'single';
    });
    watch(() => { return toRef(options.value.calendar, 'initialDate'); }, () => {
        options.value.calendar.activeMonths = computed(() => {
            const months = d.eachMonthOfInterval({
                start: options.value.calendar.activeDate.from,
                end: options.value.calendar.activeDate.to
            });
            months.from = options.value.calendar.activeDate.from;
            months.to = options.value.calendar.activeDate.to;
            return months;
        });
    }, { deep: true, immediate: true });

    watch(() => { return toRef(options.value.calendar, 'initialDate'); }, () => {
        options.value.calendar.activeYears = computed(() => {
            const years = d.eachYearOfInterval({
                start: options.value.calendar.activeDate.from,
                end: options.value.calendar.activeDate.to
            });
            years.from = options.value.calendar.activeDate.from;
            years.to = options.value.calendar.activeDate.to;
            return years;
        });
    }, { deep: true, immediate: true });
    
    const produceRichDay = (date) => {
        return reactive({
            date,
            positionInMonth: d.getDate(date),
            positionInWeek: getDayInWeek(date),
            isSelected: computed(() => {
                return withSelectMode({
                    single() {
                        return d.isSameDay($(modelValue), date);
                    },
                    multiOrRange() {
                        return $(modelValue).some((modelValueItem) => {
                            return d.isSameDay(modelValueItem, date);
                        });
                    }
                });
            }),
            isToday: d.isSameDay(date, now.day),
            isBeforeToday: d.isBefore(date, now.day),
            isAfterToday: d.isAfter(date, now.day),
            isFirstSelectedInRange: computed(() => {
                if (options.value.selection.range && $(modelValueHasData)) {
                    return d.isSameDay(date, $(firstModelValue));
                }
            }),
            isLastSelectedInRange: computed(() => {
                if (options.value.selection.range && $(modelValueHasData)) {
                    return d.isSameDay(date, $(lastModelValue));
                }
            }),
            isInInitialMonth: computed(() => {
                if ($(monthMode) === 'multi') {
                    return (
                        d.isAfter(date, d.endOfMonth(
                            d.subMonths(options.value.calendar.initialDate.from, 1)
                        )) &&
                        d.isBefore(date, d.startOfMonth(
                            d.addMonths(options.value.calendar.initialDate.to, 1)
                        ))
                    )
                }
                return (
                    d.isAfter(date, d.endOfMonth(
                        d.subMonths(options.value.calendar.initialDate, 1)
                    )) &&
                    d.isBefore(date, d.startOfMonth(
                        d.addMonths(options.value.calendar.initialDate, 1)
                    ))
                )
            }),
            isInActiveMonth: computed(() => {
                return d.isWithinInterval(date, {
                    start: options.value.calendar.activeDate.from,
                    end: options.value.calendar.activeDate.to
                });
            }),
            isInCurrentMonth: d.isAfter(date, d.startOfMonth(options.value.calendar.initialDate)) &&
                d.isBefore(date, d.endOfMonth(options.value.calendar.initialDate))
        });
    };
    const produceRichMonth = (month) => {
        return {
            name: month.toLocaleString('default', { month: 'long' }),
            date: d.startOfMonth(month),
            positionInYear: d.getMonth(month),
            yearPosition: d.getYear(month),
            isSameAsInitial: computed(() => {
                if ($(monthMode) === 'multi') return;
                return d.isSameMonth(month, options.value.calendar.initialDate);
            }),
            isBeforeInitial: computed(() => {
                if ($(monthMode) === 'multi') return;
                return d.isBefore(month, options.value.calendar.initialDate); 
            }),
            isAfterInitial: computed(() => {
                if ($(monthMode) === 'multi') return;
                return d.isAfter(month, options.value.calendar.initialDate);
            }),
            isSameAsNow: d.isSameMonth(month, now.month),
            isBeforeNow: d.isBefore(month, now.month),
            isAfterNow: d.isAfter(month, now.month),
            days: (() => {
                const days = d.eachDayOfInterval({
                    start: options.value.calendar.activeDate.from,
                    end: options.value.calendar.activeDate.to
                })
                    .filter((day) => {
                        return d.isSameMonth(day, month);
                    })
                    .map((day) => {
                        return produceRichDay(day);
                    });
                if (options.value.calendar.overflow) {
                    const overflowDaysBefore = csa(getDayInWeek(options.value.calendar.activeDate.from)).map((dayIndex) => {
                        return produceRichDay(d.subDays(options.value.calendar.activeDate.from, dayIndex));
                    });
                    const overflowDaysAfter = csa(7 - (getDayInWeek(options.value.calendar.activeDate.to) + 1)).map((dayIndex) => {
                        return produceRichDay(d.addDays(options.value.calendar.activeDate.to, dayIndex));
                    });
                    overflowDaysBefore?.forEach((day) => { days.unshift(day); });
                    overflowDaysAfter?.forEach((day) => { days.push(day); });
                }
                return days;
            })()
        };
    }
    const produceRichYear = (year) => {
        return {
            position: d.getYear(year),
            isSameAsInitial: d.isSameYear(year, options.value.calendar.initialDate),
            isBeforeInitial: d.isBefore(year, options.value.calendar.initialDate),
            isAfterInitial: d.isAfter(year, options.value.calendar.initialDate),
            isSameAsNow: d.isThisYear(year),
            isBeforeNow: d.isBefore(year, now.year),
            isAfterNow: d.isAfter(year, now.year),
            months: options.value.calendar.activeMonths
                .filter((month) => {
                    return d.isSameYear(month, year);
                })
                .map((month) => {
                    return produceRichMonth(month);
                })
        }
    }
    const calendar = computed(() => {
        const years = options.value.calendar.activeYears.map((year) => {
            return produceRichYear(year);
        });
        const months = years.flatMap((year) => {
            return year.months;
        })
        const days = months.flatMap((month) => {
            return month.days;
        })
        return {
            years,
            months,
            days,
            from: options.value.calendar.activeYears.from,
            to: options.value.calendar.activeYears.to
        };
    });
    
    // Selected date(s) //
    const modelValue = withSelectMode({
        single() { return ref(options.value.preselectedDay) },
        multiOrRange() { return ref(options.value.preselectedDays) }
    });
    const modelValueHasData = computed(() => { return $(modelValue)?.length || !!$(modelValue); });
    const firstModelValue = computed(() => { return $f(modelValue); });
    const lastModelValue = computed(() => { return $l(modelValue); });
    const dateAlreadySelected = (date) => {
        return withSelectMode({
            single() { return $(modelValue)?.getTime() === date.getTime(); },
            multiOrRange() {
                return $(modelValue)?.map((modelValueItem) => { return modelValueItem.getTime(); })
                    .includes(date.getTime());
            }
        })
    };
    function getNormalizedModelValue() {
        return withSelectMode({
            single() { return modelValue.value },
            multiOrRange() {
                const modelValueCopy = [...$(modelValue)];
                return modelValueCopy
                    .sort((firstDate, secondDate) => {
                        if (d.isBefore(firstDate, secondDate)) { return -1; }
                        if (d.isAfter(firstDate, secondDate)) { return 1; }
                        return 0;
                    })
                    .filter((modelValueItem, index) => {
                        return modelValueCopy
                            .map((modelValueCopyItem) => { return modelValueCopyItem.getTime(); })
                            .indexOf(modelValueItem.getTime()) === index;
                    });
            }
        })
    }

    function changeDaySelectState(date, newState) {
        if (newState) {
            withSelectMode({
                single() { modelValue.value = date; },
                multiOrRange() {
                    modelValue.value.push(date);
                }
            });
            console.log('Selected date :: ', date);
        } else if (!newState) {
            withSelectMode({
                single() {
                    if (options.value.selection.allowEmpty) modelValue.value = null;
                },
                multiOrRange() {
                    modelValue.value = $(modelValue).filter((modelValueItem) => {
                        return !d.isSameDay(modelValueItem, date);
                    });
                }
            });
            console.log('Unselected date :: ', date);
        }
        modelValue.value = getNormalizedModelValue();
    }
    function unselectDay(date) {
        changeDaySelectState(date, false);
        withSelectMode({
            single() {
                changeDaySelectState(date, false);
            },
            multi() {
                changeDaySelectState(date, false);
            },
            range() {
                if ($(rangeIsFull)) {
                    if (options.value.selection.range?.onFull === 'fresh') {
                        unselectAllDays();
                        return changeDaySelectState(date, true);
                    }
                    if (options.value.selection.range?.onFull === 'modify') {
                        if (d.isAfter(date, $(firstModelValue))) {
                            unselectDatesInRange(date, $(lastModelValue));
                            changeDaySelectState($(lastModelValue), false);
                            selectDatesInRange($(firstModelValue), date);
                            changeDaySelectState(date, true);
                        } else {
                            unselectAllDays();
                            changeDaySelectState(date, true);
                        }
                    }
                    if (typeof options.value.selection.range?.onFull === 'function') {
                        return options.value.selection.range?.onFull(date, {
                            isBeforeFirst: d.isBefore(date, $(firstModelValue)),
                            isAfterLast: d.isAfter(date, $(lastModelValue)),
                            isBetween: d.isAfter(date, $(firstModelValue)) && d.isBefore(date, $(lastModelValue)),
                            isFirst: d.isSameDay(date, $(firstModelValue)),
                            isLast: d.isSameDay(date, $(lastModelValue))
                        });
                    }
                }
                if ($(modelValue).length === 0) {
                    return changeDaySelectState(date, true);
                }
                if ($(modelValue).length === 1) {
                    if (d.isAfter(date, $(firstModelValue))) {
                        changeDaySelectState(date, true);
                        selectDatesInRange($(firstModelValue), date);
                    } else {
                        unselectDay($(firstModelValue));
                        changeDaySelectState(date, true);
                    }
                }
            }
        })
    }
    function unselectAllDays() {
        withSelectMode({
            single() {
                return modelValue.value = null;
            },
            multiOrRange() {
                return $(modelValue).forEach((modelValueItem) => {
                    changeDaySelectState(modelValueItem, false);
                });
            }
        })
    }

    function selectDay(date) {
        withSelectMode({
            single() {
                unselectAllDays();
                changeDaySelectState(date, true);
            },
            multi() {
                if ($(modelValue).length < options.value.selection.multi.maximum) {
                    changeDaySelectState(date, true);
                } else {
                    if (options.value.selection.multi.onOverflow === 'FIFO') {
                        changeDaySelectState($(firstModelValue), false);
                        changeDaySelectState(date, true);
                    } else if (options.value.selection.multi.onOverflow === 'LIFO') {
                        changeDaySelectState($(lastModelValue), false);
                        changeDaySelectState(date, true);
                    }
                }
            },
            range() {
                if ($(rangeIsFull)) {
                    if (options.value.selection.range?.onFull === 'fresh') {
                        unselectAllDays();
                        return changeDaySelectState(date, true);
                    }
                    if (options.value.selection.range?.onFull === 'modify') {
                        if (d.isAfter(date, $(firstModelValue))) {
                            unselectDatesInRange(date, $(lastModelValue));
                            changeDaySelectState($(lastModelValue), false);
                            selectDatesInRange($(firstModelValue), date);
                            changeDaySelectState(date, true);
                        } else {
                            unselectAllDays();
                            changeDaySelectState(date, true);
                        }
                    }
                    if (typeof options.value.selection.range?.onFull === 'function') {
                        return options.value.selection.range?.onFull(date, {
                            isBeforeFirst: d.isBefore(date, $(firstModelValue)),
                            isAfterLast: d.isAfter(date, $(lastModelValue)),
                            isBetween: d.isAfter(date, $(firstModelValue)) && d.isBefore(date, $(lastModelValue)),
                            isFirst: d.isSameDay(date, $(firstModelValue)),
                            isLast: d.isSameDay(date, $(lastModelValue))
                        });
                    }
                }
                if ($(modelValue).length === 0) {
                    return changeDaySelectState(date, true);
                }
                if ($(modelValue).length === 1) {
                    if (d.isAfter(date, $(firstModelValue))) {
                        changeDaySelectState(date, true);
                        selectDatesInRange($(firstModelValue), date);
                    } else {
                        changeDaySelectState($(firstModelValue), false);
                        changeDaySelectState(date, true);
                    }
                }
            }
        })
        
    }
    function toggleSelectDay(date) {
        if (!dateAlreadySelected(date)) selectDay(date);
        else unselectDay(date);
    }

    // Range handling //
    const rangeIsFull = computed(() => {
        return !!options.value.selection.range && $(modelValue)?.length >= 2;
    });
    function selectDatesInRange(firstDate, secondDate) {
        const betweenDaysCount = Math.abs(d.differenceInDays(firstDate, secondDate)) - 1;
        csa(betweenDaysCount).forEach((index) => {
            changeDaySelectState(d.addDays(firstDate, index), true);
        });
    }
    function unselectDatesInRange(firstDate, secondDate) {
        const betweenDaysCount = Math.abs(d.differenceInDays(firstDate, secondDate)) - 1;
        csa(betweenDaysCount).forEach((index) => {
            changeDaySelectState(d.addDays(firstDate, index), false);
        });
    }

    const rangeHelper = {
        changeLast(date) {
            const [firstDate, secondDate] = sortTwoDays($(lastModelValue), date);
            unselectDatesInRange(firstDate, secondDate);
            selectDatesInRange($(firstModelValue) || date, date);
        },
        changeFirst(date) {
            const [firstDate, secondDate] = sortTwoDays($(firstModelValue), date);
            unselectDatesInRange(firstDate, secondDate);
            selectDatesInRange(date, $(lastModelValue) || date);
        }
    };

    // Navigation
    function changeCalendarMonthToNext(amount = 1) {
        options.value.calendar.activeDate.from = d.addMonths(options.value.calendar.activeDate.from, amount);
        options.value.calendar.activeDate.to = d.addMonths(options.value.calendar.activeDate.to, amount);
    }
    function changeCalendarMonthToPrev(amount = 1) {
        options.value.calendar.activeDate.from = d.subMonths(options.value.calendar.activeDate.from, amount);
        options.value.calendar.activeDate.to = d.subMonths(options.value.calendar.activeDate.to, amount);
    }
    
    function changeCalendarYearToNext(amount = 1) {
        options.value.calendar.activeDate = d.addYears(options.value.calendar.activeDate, amount);
    }
    function changeCalendarYearToPrev(amount = 1) {
        options.value.calendar.activeDate = d.subYears(options.value.calendar.activeDate, amount);
    }

    return {
        calendar,
        [withSelectMode({
            single() { return 'selectedDate' },
            multiOrRange() { return 'selectedDates' }
        })]: modelValue,
        modelValue,

        selectDay,
        unselectDay,
        toggleSelectDay,
        unselectAllDays,

        rangeHelper,

        changeCalendarMonthToNext,
        changeCalendarMonthToPrev,
        changeCalendarYearToNext,
        changeCalendarYearToPrev
    };
}
