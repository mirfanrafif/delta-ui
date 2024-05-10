import * as dateFns from 'date-fns';

import { CalendarProps, DateRange } from './Calendar';
import styles from './Calendar.module.css';
import CalendarDateItem from './CalendarDateItem';

const MonthDayCalendar = ({
  dateRange,
  onClickTile,
  currYear,
  currMonth,
  setCurrMonth,
  setCurrYear,
  days,
  currCalendar,
  props,
  multiDates,
}: {
  dateRange: DateRange;
  onClickTile: (date: Date) => void;
  currYear: number;
  currMonth: number;
  setCurrMonth: (month: number) => void;
  setCurrYear: (year: number) => void;
  days: string[];
  currCalendar: Date[];
  props: CalendarProps;
  multiDates?: Date[];
}) => {
  return (
    <>
      <div className={styles.dayGrid}>
        {days.map((v, i) => (
          <div key={i} className={styles.dateItem}>
            {v.slice(0, 1)}
          </div>
        ))}
      </div>
      <div className={styles.dateGrid}>
        {currCalendar.map((v, i) =>
          v ? (
            <CalendarDateItem
              key={i}
              dateRange={dateRange}
              multiDates={multiDates}
              currYear={currYear}
              currMonth={currMonth}
              currentDate={v}
              dateDisabled={props.dateDisabled}
              onClickTile={onClickTile}
              minDate={props.minimumDate}
              maxDate={props.maximumDate}
              onClickNextMonth={() => {
                const d = dateFns.add(new Date(currYear, currMonth), {
                  months: 1,
                });
                setCurrMonth(d.getMonth());
                setCurrYear(d.getFullYear());
              }}
              onClickPrevMonth={() => {
                const d = dateFns.sub(new Date(currYear, currMonth), {
                  months: 1,
                });
                setCurrMonth(d.getMonth());
                setCurrYear(d.getFullYear());
              }}
            />
          ) : (
            <span key={i}></span>
          ),
        )}
      </div>
    </>
  );
};

export default MonthDayCalendar;
