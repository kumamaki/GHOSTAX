/* eslint-disable no-use-before-define */
import {
    ref, unref as $, computed, reactive, watch
} from 'vue';
import { createSequentialArray } from './_utils';

const $f = (arr) => {
    return $(arr)?.[0];
};
const $l = (arr) => {
    return $(arr)[$(arr).length - 1];
};

export default function useGhDatepicker({
    initialVisibleDate = new Date(),
    numberOfVisibleDays = 'currentMonth',
    allowMultiSelect = false,
    rangeMode = false,
    d = dateFns
}) {
    const sortTwoDays = (firstDate, secondDate) => {
        if (d.isBefore(firstDate, secondDate)) {
            return [firstDate, secondDate];
        }
        return [secondDate, firstDate];
    };


    const visibleDate = ref($(initialVisibleDate));

    const createDay = (date) => {
        return reactive({
            date,
            positionInMonth: d.getDate(date),
            positionInWeek: d.getDay(date),
            isSelected: computed(() => {
                return $(selectedDays).some((selectedDay) => {
                    return d.isSameDay(selectedDay, date);
                });
            }),
            isToday: d.isSameDay(date, new Date()),
            isBeforeToday: !d.isSameDay(date, new Date()) && d.isBefore(date, new Date()),
            isAfterToday: !d.isSameDay(date, new Date()) && d.isAfter(date, new Date()),
            isWeeked: d.isWeekend(date),
            isFirstSelectedInRange: computed(() => {
                if (rangeMode && $(selectedDays).length) {
                    return d.isSameDay(date, $(firstSelectedDate));
                }
            }),
            isInVisibleMonth: computed(() => {
                return d.isSameMonth(date, $(visibleDate));
            }),
            isLastSelectedInRange: computed(() => {
                if (rangeMode && $(selectedDays).length) {
                    return d.isSameDay(date, $(lastSelectedDate));
                }
            }),
            isInRangeMode: !!rangeMode
        });
    };

    const visibleDays = computed(() => {
        if (numberOfVisibleDays === 'currentMonth') {
            return createSequentialArray(d.getDaysInMonth($(visibleDate))).map((index) => {
                return createDay(d.setDate($(visibleDate), index));
            });
        }
        if (numberOfVisibleDays === 'currnetMonthAndOverflow') {
            const daysInVisibleMonth = createSequentialArray(d.getDaysInMonth($(visibleDate))).map((index) => {
                return createDay(d.setDate($(visibleDate), index));
            });
            const overflowDaysBefore = createSequentialArray($f(daysInVisibleMonth).positionInWeek).reverse().map((index) => {
                return createDay(d.subDays($f(daysInVisibleMonth).date, index));
            });
            const overflowDaysAfter = createSequentialArray(7 - ($l(daysInVisibleMonth).positionInWeek + 1)).map((index) => {
                return createDay(d.addDays($l(daysInVisibleMonth).date, index));
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
        if (newState) {
            selectedDays.value.push(date);
        } else if (!newState) {
            selectedDays.value = $(selectedDays).filter((selectedDay) => {
                return !d.isSameDay(selectedDay, date);
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
        const betweenDaysCount = Math.abs(d.differenceInDays(firstDate, secondDate)) + 1;
        createSequentialArray(betweenDaysCount).forEach((_, index) => {
            changeDaySelectState(d.addDays(firstDate, index), true);
            console.log(`Selected ${d.addDays(firstDate, index)}`);
        });
    }

    function unselectDatesInRange(firstDate, secondDate) {
        const betweenDaysCount = Math.abs(d.differenceInDays(firstDate, secondDate)) + 1;
        createSequentialArray(betweenDaysCount).forEach((_, index) => {
            changeDaySelectState(d.addDays(firstDate, index), false);
            console.log(`Unselected ${d.addDays(firstDate, index)}`);
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
                if (d.isAfter(date, $(firstSelectedDate))) {
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
                isBeforeFirst: d.isBefore(date, $(firstSelectedDate)),
                isAfterLast: d.isAfter(date, $(lastSelectedDate)),
                isBetween: d.isAfter(date, $(firstSelectedDate)) && d.isBefore(date, $(lastSelectedDate)),
                isFirst: d.isSameDay(date, $(firstSelectedDate)),
                isLast: d.isSameDay(date, $(lastSelectedDate))
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
        visibleDate.value = d.addMonths(visibleDate.value, 1);
    }
    function changeVisibleMonthToPrev() {
        visibleDate.value = d.subMonths(visibleDate.value, 1);
    }


    watch(() => { return selectedDays.value; }, () => {
        console.log('selectedDays in lib -> ', selectedDays);
    }, { deep: true });
    watch(() => { return visibleDays.value; }, () => {
        console.log('visibleDays in lib -> ', visibleDays);
    }, { deep: true });

    return {
        visibleDate,
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
