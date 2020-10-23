/* eslint-disable no-use-before-define */
import {
    ref, unref, computed, reactive
} from 'vue';
import {
    getYear, isAfter, isBefore,
    format, addDays, getDay, getDaysInMonth,
    isWeekend, subDays, setDate,
    isSameDay, getDate, differenceInDays,
    addMonths, isSameMonth, subMonths
} from 'date-fns';
import { createSequentialArray } from './_utils';

const $ = unref;
const $f = (arr) => {
    return $(arr)?.[0];
};
const $l = (arr) => {
    return $(arr)[$(arr).length - 1];
};
const sortTwoDays = (firstDate, secondDate) => {
    if (isBefore(firstDate, secondDate)) {
        return [firstDate, secondDate];
    }
    return [secondDate, firstDate];
};

export default function({
    initialVisibleDate = new Date(),
    numberOfVisibleDays = 'currentMonth',
    allowMultiSelect = false,
    rangeMode = false
}) {
    const visibleDate = ref($(initialVisibleDate));
    const visibleYear = computed(() => { return getYear($(visibleDate)); });
    const visibleMonth = computed(() => { return format($(visibleDate), 'LLLL'); });

    const createDay = (date) => {
        return reactive({
            date,
            positionInMonth: getDate(date),
            positionInWeek: getDay(date),
            isSelected: computed(() => {
                return $(selectedDays).some((selectedDay) => {
                    return isSameDay(selectedDay, date);
                });
            }),
            isToday: isSameDay(date, new Date()),
            isWeeked: isWeekend(date),
            isFirstSelectedInRange: computed(() => {
                if (rangeMode && $(selectedDays).length) {
                    return isSameDay(date, $(firstSelectedDate));
                }
            }),
            isInVisibleMonth: computed(() => {
                return isSameMonth(date, $(visibleDate));
            }),
            isLastSelectedInRange: computed(() => {
                if (rangeMode && $(selectedDays).length) {
                    return isSameDay(date, $(lastSelectedDate));
                }
            }),
            isInRangeMode: !!rangeMode
        });
    };

    const visibleDays = computed(() => {
        if (numberOfVisibleDays === 'currnetMonth') {
            return createSequentialArray(getDaysInMonth($(visibleDate))).map((index) => {
                return createDay(setDate($(visibleDate), index));
            });
        }
        if (numberOfVisibleDays === 'currnetMonthAndOverflow') {
            const daysInVisibleMonth = createSequentialArray(getDaysInMonth($(visibleDate))).map((index) => {
                return createDay(setDate($(visibleDate), index));
            });
            const overflowDaysBefore = createSequentialArray($f(daysInVisibleMonth).positionInWeek).reverse().map((index) => {
                return createDay(subDays($f(daysInVisibleMonth).date, index));
            });
            const overflowDaysAfter = createSequentialArray(7 - ($l(daysInVisibleMonth).positionInWeek + 1)).map((index) => {
                return createDay(addDays($l(daysInVisibleMonth).date, index));
            });
            return [
                ...$(overflowDaysBefore),
                ...$(daysInVisibleMonth),
                ...$(overflowDaysAfter)
            ];
        }
    });

    const selectedDays = ref([]);
    const firstSelectedDate = computed(() => {
        return $f(selectedDays)?.date;
    });
    const lastSelectedDate = computed(() => {
        return $l(selectedDays)?.date;
    });

    const dateAlreadySelected = (date) => {
        return $(selectedDays).includes(date);
    };
    function changeDaySelectState(date, newState) {
        if (newState && !dateAlreadySelected(date)) {
            selectedDays.value.push(date);
        } else if (!newState && dateAlreadySelected(date)) {
            selectedDays.value = $(selectedDays).filter((selectedDay) => {
                return !isSameDay(selectDay, date);
            });
        }
    }

    function unselectDay(date) {
        changeDaySelectState(date, false);
    }
    function unselectAllDays() {
        while ($(selectedDays).length) {
            $(selectedDays).pop();
        }
    }

    function selectDatesInRange(firstDate, secondDate) {
        const betweenDaysCount = Math.abs(differenceInDays(firstDate, secondDate)) + 1;
        createSequentialArray(betweenDaysCount).forEach((_, index) => {
            changeDaySelectState(addDays(firstDate, index), true);
            console.log(`Selected ${addDays(firstDate, index)}`);
        });
    }

    function unselectDatesInRange(firstDate, secondDate) {
        const betweenDaysCount = Math.abs(differenceInDays(firstDate, secondDate)) + 1;
        createSequentialArray(betweenDaysCount).forEach((_, index) => {
            changeDaySelectState(addDays(firstDate, index), false);
            console.log(`Unselected ${addDays(firstDate, index)}`);
        });
    }

    function selectDay(date) {
        if (allowMultiSelect) {
            if ($(selectedDays).length < allowMultiSelect.maximum) {
                changeDaySelectState(date, true);
            } else if (allowMultiSelect.ifReached === 'FIFO') {
                unselectDay($(firstSelectedDate));
                changeDaySelectState(date, true);
            } else if (allowMultiSelect.ifReached === 'LIFO') {
                unselectDay($(lastSelectedDate));
                changeDaySelectState(date, true);
            }
        } else if (rangeMode) {
            if ($(selectedDays).length === 0) {
                changeDaySelectState(date, true);
            } else if ($(selectedDays).length === 1) {
                if (isAfter(date, $(firstSelectedDate))) {
                    changeDaySelectState(date, true);
                    selectDatesInRange($(firstSelectedDate), date);
                } else {
                    unselectDay($(firstSelectedDate));
                    changeDaySelectState(date, true);
                }
            }
        } else {
            unselectAllDays();
            changeDaySelectState(date, true);
        }
    }

    const rangeIsFull = computed(() => {
        return !!rangeMode && $(selectedDays).length > 1;
    });

    function toggleSelectDay(date) {
        if ($(rangeIsFull)) {
            return rangeMode.handleNewWhenFullySelected(date, {
                isBeforeFirst: isBefore(date, $(firstSelectedDate)),
                isAfterLast: isAfter(date, $(lastSelectedDate)),
                isBetween: isAfter(date, $(firstSelectedDate)) && isBefore(date, $(lastSelectedDate)),
                isFirst: isSameDay(date, $(firstSelectedDate)),
                isLast: isSameDay(date, $(lastSelectedDate))
            });
        }
        if (!dateAlreadySelected(date)) selectDay(date);
        else unselectDay(date);
    }

    const rangeHelper = {
        changeLast(date) {
            const [firstDate, secondDate] = sortTwoDays($(lastSelectedDate), date);
            unselectDatesInRange(firstDate, secondDate);
            selectDatesInRange($(firstSelectedDate) || date, date);
        },
        changeFirst(date) {
            const [firstDate, secondDate] = sortTwoDays($(firstSelectedDate), date);
            unselectDatesInRange(firstDate, secondDate);
            selectDatesInRange(date, $(lastSelectedDate) || date);
        }
    };

    function changeVisibleMonthToNext() {
        visibleDate.value = addMonths(visibleDate.value, 1);
    }
    function changeVisibleMonthToPrev() {
        visibleDate.value = subMonths(visibleDate.value, 1);
    }

    return {
        visibleDate,
        visibleYear,
        visibleMonth,
        visibleDays,
        selectedDays,

        selectDay,
        unselectDay,
        toggleSelectDay,
        unselectAllDays,

        rangeHelper,

        changeVisibleMonthToNext,
        changeVisibleMonthToPrev
    };
}
