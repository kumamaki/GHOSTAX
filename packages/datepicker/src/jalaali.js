import useGhDatepicker from './common/datepicker';
import {
    getYear, isAfter, isBefore, addDays, getDay, getDaysInMonth,
    isWeekend, subDays, setDate,
    isSameDay, getDate, differenceInDays,
    addMonths, isSameMonth, subMonths
} from 'date-fns-jalali';

export function useGhJalDatepicker({
    initialVisibleDate,
    numberOfVisibleDays,
    allowMultiSelect,
    rangeMode
} = {}) {
    return useGhDatepicker({
        initialVisibleDate,
        numberOfVisibleDays,
        allowMultiSelect,
        rangeMode,
        d: {
            getYear, isAfter, isBefore, addDays, getDay, getDaysInMonth,
            isWeekend, subDays, setDate,
            isSameDay, getDate, differenceInDays,
            addMonths, isSameMonth, subMonths
        }
    });
}