import * as dateFns from 'date-fns';

import { DATE_FORMATS } from '../../constants';
import styles from './Calendar.module.css';

type CalendarYearMonthProps = {
  year: number;
  onClickYear: (month: number) => void;
};

const CalendarDecadeYear = (props: CalendarYearMonthProps) => {
  const startOfCalendar = Math.floor(props.year / 15) * 15;
  const endOfCalendar = startOfCalendar + 15 - 1;

  const yearList = dateFns.eachYearOfInterval({
    start: dateFns.startOfYear(new Date(startOfCalendar, 0)),
    end: dateFns.endOfYear(new Date(endOfCalendar, 0)),
  });

  return (
    <div className={styles.monthGrid}>
      {yearList.map((year, index) => {
        const yearName = dateFns.format(year, DATE_FORMATS.year);
        return (
          <button
            key={index}
            className={styles.monthName}
            onClick={() => {
              props.onClickYear(startOfCalendar + index);
            }}
          >
            {yearName}
          </button>
        );
      })}
    </div>
  );
};

export default CalendarDecadeYear;
