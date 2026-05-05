import useGhDatePicker from './common/datepicker';
import {
    format,
    isAfter, isBefore, isWithinInterval,
    getYear, addYears, subYears, isSameYear, isThisYear, differenceInCalendarYears, eachYearOfInterval,
    addDays, getDay, eachDayOfInterval,
    isWeekend, subDays, setDate, getDaysInMonth, differenceInCalendarMonths, differenceInMonths,
    isSameDay, getDate, differenceInDays,
    getMonth, addMonths, startOfMonth, endOfMonth, isSameMonth, subMonths, lastDayOfMonth, eachMonthOfInterval
} from 'date-fns';

export function useGhGregDatePicker(customOptions = {}) {
    return useGhDatePicker(customOptions, {
        format,
        isAfter, isBefore, isWithinInterval,
        getYear, addYears, subYears, isSameYear, isThisYear, differenceInCalendarYears, eachYearOfInterval,
        addDays, getDay, eachDayOfInterval,
        isWeekend, subDays, setDate, getDaysInMonth, differenceInCalendarMonths, differenceInMonths,
        isSameDay, getDate, differenceInDays,
        getMonth, addMonths, startOfMonth, endOfMonth, isSameMonth, subMonths, lastDayOfMonth, eachMonthOfInterval
    });
}