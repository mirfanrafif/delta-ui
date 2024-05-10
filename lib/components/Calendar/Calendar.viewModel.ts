import { useEffect, useMemo, useState } from 'react';

import * as dateFns from 'date-fns';
import { ja } from 'date-fns/locale';

import { DATE, DATE_FORMATS } from '../../constants';
import { CalendarProps, DateRange } from './Calendar';

export enum CalendarType {
  year = 'year',
  month = 'month',
  date = 'date',
}

export const useCalendarViewModel = (props: CalendarProps) => {
  const [currCalendar, setCurrCalendar] = useState<Array<Date>>([]);
  const [currMonth, setCurrMonth] = useState<number>(
    props.value?.startDate?.getMonth() ?? DATE.today.getMonth(),
  );
  const [currYear, setCurrYear] = useState<number>(
    props.value?.startDate?.getFullYear() ?? DATE.today.getFullYear(),
  );
  const [isPicked, setIsPicked] = useState<boolean>(false);

  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: props.value?.startDate || null,
    endDate: props.value?.endDate || null,
  });

  const [calendarType, setCalendarType] = useState<CalendarType>(
    CalendarType.date,
  );

  const onClickPrev = () => {
    switch (calendarType) {
      case CalendarType.date: {
        const newDate = new Date(currYear, currMonth);
        const prevMonth = dateFns.subMonths(newDate, 1);
        setCurrYear(prevMonth.getFullYear());
        setCurrMonth(prevMonth.getMonth());
        break;
      }
      case CalendarType.month:
        setCurrYear((y) => y - 1);
        break;
      case CalendarType.year:
        setCurrYear((y) => y - 15);
        break;
    }
  };

  const onClickNext = () => {
    switch (calendarType) {
      case CalendarType.date: {
        const newDate = new Date(currYear, currMonth);
        const nextMonth = dateFns.addMonths(newDate, 1);
        setCurrYear(nextMonth.getFullYear());
        setCurrMonth(nextMonth.getMonth());
        break;
      }
      case CalendarType.month:
        setCurrYear((y) => y + 1);
        break;
      case CalendarType.year:
        setCurrYear((y) => y + 15);
        break;
    }
  };

  const generateCalendar = ({
    month,
    year,
  }: {
    month: number;
    year: number;
  }) => {
    const startOfMonth = dateFns.startOfMonth(new Date(year, month));
    const startDay = startOfMonth.getDay();
    const weeksInMonth = dateFns.getWeeksInMonth(startOfMonth);

    const calendar: Date[] = Array.from(Array(weeksInMonth * 7).keys()).map(
      (v) => {
        return new Date(year, month, v - startDay + 1);
      },
    );
    return calendar;
  };

  useEffect(() => {
    const _currCalendar = generateCalendar({
      month: new Date(currYear, currMonth).getMonth(),
      year: new Date(currYear, currMonth).getFullYear(),
    });
    setCurrCalendar(_currCalendar);
  }, [currMonth, currYear]);

  useEffect(() => {
    if (!isPicked) return;

    if (!props.isRange && dateRange.startDate) {
      props.onUpdate?.(dateRange);
      setIsPicked(false);
      return;
    }

    if (dateRange.startDate && dateRange.endDate) {
      props.onUpdate?.(dateRange);
      setIsPicked(false);
    }
  }, [dateRange]);

  useEffect(() => {
    if (!dateRange.startDate) return;

    props.onClickStartDate?.(dateRange.startDate);
  }, [dateRange.startDate]);

  //generate days of week
  const days = useMemo(() => {
    const days: string[] = [];
    for (let i = 0; i < 7; i++) {
      days.push(
        dateFns.format(
          dateFns.addDays(dateFns.startOfWeek(DATE.today), i),
          'ccc',
          {
            locale: props.locale,
          },
        ),
      );
    }
    return days;
  }, [props.locale]);

  const onClickTile = (date: Date) => {
    if (props.onClickMultiDate) {
      props.onClickMultiDate(date);
    }

    if (!props.isRange) {
      setDateRange({
        startDate: date,
        endDate: null,
      });
      setIsPicked(true);
      return;
    }

    // If no start date, set start date
    if (!dateRange.startDate) {
      setDateRange(() => ({
        startDate: date,
        endDate: null,
      }));
      return;
    }

    // If start date but end date is before start date, reset start date and set end date null
    if (dateRange.startDate && dateFns.isBefore(date, dateRange.startDate)) {
      setDateRange({
        startDate: date,
        endDate: null,
      });
      return;
    }

    //if there is disabled date between start date and end date, reset start date and set end date null
    if (dateRange.startDate && !dateRange.endDate) {
      const dateBetweenArray = dateFns.eachDayOfInterval({
        start: dateRange.startDate,
        end: date,
      });
      const isDisabled = dateBetweenArray.some((date) =>
        props.dateDisabled?.(date),
      );

      if (isDisabled) {
        setDateRange({
          startDate: date,
          endDate: null,
        });
        return;
      }
      // check if is calendar range and if same day clicked twice, reset end date
      if (props.isRange && dateFns.isSameDay(dateRange.startDate, date)) {
        setDateRange({
          startDate: date,
          endDate: null,
        });
        return;
      }
      setDateRange((d) => ({
        ...d,
        endDate: date,
      }));
      setIsPicked(true);
      return;
    }

    // If start date and end date, reset start date and end date
    if (dateRange.startDate && dateRange.endDate) {
      setDateRange({
        startDate: date,
        endDate: null,
      });
      return;
    }
  };

  const onClickMonthName = () => {
    if (calendarType === CalendarType.date) {
      setCalendarType(CalendarType.month);
    } else if (calendarType === CalendarType.month) {
      setCalendarType(CalendarType.year);
    }
  };

  const onSelectMonth = (month: number) => {
    setCurrMonth(month);
    setCalendarType(CalendarType.date);
  };

  const onSelectYear = (year: number) => {
    setCurrYear(year);
    setCalendarType(CalendarType.month);
  };

  const label: string = useMemo(() => {
    switch (calendarType) {
      case CalendarType.date: {
        const dateFormat =
          props.locale === ja
            ? DATE_FORMATS.japaneseMonthAndYear
            : DATE_FORMATS.monthAndYear;
        return dateFns.format(new Date(currYear, currMonth), dateFormat, {
          locale: props.locale,
        });
      }
      case CalendarType.month:
        return dateFns.format(new Date(currYear, currMonth), DATE_FORMATS.year);
      case CalendarType.year: {
        const startOfCalendar = Math.floor(currYear / 15) * 15;
        const endOfCalendar = startOfCalendar + 15 - 1;

        return `${startOfCalendar} - ${endOfCalendar}`;
      }
    }
  }, [calendarType, currMonth, currYear, props.locale]);

  return {
    days,
    currCalendar,
    currMonth,
    currYear,
    isPicked,
    dateRange,
    onClickTile,
    setCurrMonth,
    setCurrYear,
    setCalendarType,
    calendarType,
    onClickPrev,
    onClickNext,
    onClickMonthName,
    onSelectMonth,
    onSelectYear,
    label,
    multiDates: props.multiDates,
  };
};
