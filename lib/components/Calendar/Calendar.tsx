import { forwardRef } from 'react';

import classNames from 'classnames';
import { Locale } from 'date-fns';

import styles from './Calendar.module.css';
import { CalendarType, useCalendarViewModel } from './Calendar.viewModel';
import CalendarDecadeYear from './CalendarDecadeYear';
import MonthSelector from './CalendarMonthSelector';
import CalendarYearMonth from './CalendarYearMonth';
import MonthDayCalendar from './MonthDayCalendar';

export type DateRange = {
  startDate: Date | null;
  endDate: Date | null;
};

export type CalendarProps = {
  value?: DateRange;
  onUpdate?: (dateRange: DateRange) => void;
  isRange?: boolean;
  dateDisabled?: (date: Date) => boolean;
  minimumDate?: Date;
  maximumDate?: Date;
  className?: string;
  onClickStartDate?: (date: Date) => void;
  multiDates?: Date[];
  onClickMultiDate?: (date: Date) => void;
  locale: Locale;
};

const Calendar = forwardRef<HTMLDivElement, CalendarProps>((props, ref) => {
  const {
    dateRange,
    onClickTile,
    currYear,
    currMonth,
    setCurrMonth,
    setCurrYear,
    days,
    currCalendar,
    calendarType,
    onClickNext,
    onClickPrev,
    onClickMonthName,
    onSelectMonth,
    onSelectYear,
    label,
    multiDates,
  } = useCalendarViewModel(props);

  return (
    <div className={classNames(styles.monthDay, props.className)} ref={ref}>
      <MonthSelector
        label={label}
        onClickNext={onClickNext}
        onClickPrev={onClickPrev}
        onClickMonth={onClickMonthName}
      />
      {calendarType === CalendarType.year && (
        <CalendarDecadeYear year={currYear} onClickYear={onSelectYear} />
      )}
      {calendarType === CalendarType.month && (
        <CalendarYearMonth
          year={currYear}
          onClickMonthName={onSelectMonth}
          locale={props.locale}
        />
      )}
      {calendarType === CalendarType.date && (
        <MonthDayCalendar
          dateRange={dateRange}
          multiDates={multiDates}
          onClickTile={onClickTile}
          currYear={currYear}
          currMonth={currMonth}
          setCurrMonth={setCurrMonth}
          setCurrYear={setCurrYear}
          days={days}
          currCalendar={currCalendar}
          props={props}
        />
      )}
    </div>
  );
});

export default Calendar;
