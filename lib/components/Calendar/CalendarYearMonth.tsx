import * as dateFns from 'date-fns';

import { DATE_FORMATS } from '../../constants';
import styles from './Calendar.module.css';

type CalendarYearMonthProps = {
  year: number;
  onClickMonthName: (month: number) => void;
  locale: dateFns.Locale;
};

const CalendarYearMonth = (props: CalendarYearMonthProps) => {
  const monthList = dateFns.eachMonthOfInterval({
    start: dateFns.startOfYear(new Date(props.year, 0)),
    end: dateFns.endOfYear(new Date(props.year, 0)),
  });

  return (
    <div className={styles.monthGrid}>
      {monthList.map((month, index) => {
        const monthName = dateFns.format(month, DATE_FORMATS.month, {
          locale: props.locale,
        });
        return (
          <button
            key={index}
            className={styles.monthName}
            onClick={() => {
              props.onClickMonthName(index);
            }}
          >
            {monthName}
          </button>
        );
      })}
    </div>
  );
};

export default CalendarYearMonth;
