import { useMemo } from 'react';

import classNames from 'classnames';
import * as dateFns from 'date-fns';

import { DateRange } from './Calendar';
import styles from './Calendar.module.css';

const CalendarDateItem = ({
  dateRange,
  currMonth,
  currentDate,
  dateDisabled,
  onClickTile,
  onClickNextMonth,
  onClickPrevMonth,
  minDate,
  maxDate,
  multiDates,
}: {
  dateRange: DateRange;
  currYear: number;
  currMonth: number;
  currentDate: Date;
  dateDisabled?: (date: Date) => boolean;
  onClickTile: (date: Date) => void;
  onClickNextMonth: () => void;
  onClickPrevMonth: () => void;
  minDate?: Date;
  maxDate?: Date;
  multiDates?: Date[];
}) => {
  const isBetween = (
    date: Date,
    from: Date,
    to: Date,
    inclusivity: '()' | '[]' | '(]' | '[)' = '()',
  ) => {
    if (!['()', '[]', '(]', '[)'].includes(inclusivity)) {
      throw new Error('Inclusivity parameter must be one of (), [], (], [)');
    }

    from = dateFns.startOfDay(from);
    to = dateFns.startOfDay(to);

    const isBeforeEqual = inclusivity[0] === '[',
      isAfterEqual = inclusivity[1] === ']';

    return (
      (isBeforeEqual
        ? dateFns.isSameDay(from, date) || dateFns.isBefore(from, date)
        : dateFns.isBefore(from, date)) &&
      (isAfterEqual
        ? dateFns.isSameDay(to, date) || dateFns.isAfter(to, date)
        : dateFns.isAfter(to, date))
    );
  };

  const isDateDisabled = useMemo(() => {
    if (dateDisabled && dateDisabled(currentDate)) return true;

    if (
      minDate !== undefined &&
      dateFns.isBefore(currentDate, dateFns.startOfDay(minDate))
    )
      return true;

    if (maxDate && dateFns.isAfter(currentDate, dateFns.endOfDay(maxDate)))
      return true;

    return false;
  }, [currentDate, dateDisabled, maxDate, minDate]);

  const isDifferentMonth = useMemo(() => {
    return dateFns.getMonth(currentDate) !== currMonth;
  }, [currentDate, currMonth]);

  const isDateSelectedInMulti = () => {
    let found = 0;
    multiDates?.map((item) => {
      if (dateFns.isSameDay(currentDate, item)) {
        found++;
      }
    });
    return found > 0;
  };

  return (
    <div
      className={classNames(styles.date, {
        [styles.between]:
          dateRange.startDate &&
          dateRange.endDate &&
          multiDates === undefined &&
          isBetween(currentDate, dateRange.startDate, dateRange.endDate, '()'),
        [styles.startDate]:
          dateRange.startDate &&
          dateRange.endDate &&
          multiDates === undefined &&
          dateFns.isSameDay(currentDate, dateRange.startDate),
        [styles.endDate]:
          dateRange.endDate &&
          dateRange.startDate &&
          multiDates === undefined &&
          dateFns.isSameDay(currentDate, dateRange.endDate),
        [styles.today]:
          (multiDates === undefined &&
            dateFns.isSameDay(currentDate, new Date())) ||
          isDateSelectedInMulti(),
      })}
    >
      <button
        disabled={isDateDisabled}
        onClick={() => {
          //if is next month, set next month
          if (dateFns.getMonth(currentDate) > currMonth) {
            onClickNextMonth();
          }

          //if is prev month, set prev month
          if (dateFns.getMonth(currentDate) < currMonth) {
            onClickPrevMonth();
          }

          onClickTile(currentDate);
        }}
        className={classNames(styles.dateButton, {
          [styles.selected]:
            (dateRange.startDate &&
              multiDates === undefined &&
              dateFns.isSameDay(currentDate, dateRange.startDate)) ||
            (dateRange.endDate &&
              multiDates === undefined &&
              dateFns.isSameDay(currentDate, dateRange.endDate)) ||
            isDateSelectedInMulti(),

          [styles.differentMonth]: isDifferentMonth,
        })}
      >
        {currentDate.getDate()}
      </button>
    </div>
  );
};

export default CalendarDateItem;
