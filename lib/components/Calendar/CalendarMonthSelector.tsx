import styles from './Calendar.module.css';

const MonthSelector = ({
  label,
  onClickPrev,
  onClickNext,
  onClickMonth,
}: {
  label: string;
  onClickPrev?: () => void;
  onClickNext?: () => void;
  onClickMonth?: () => void;
}) => {
  return (
    <div className={styles.monthNameNextPrev}>
      <button type="button" className={styles.prevNext} onClick={onClickPrev}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={styles.prevIcon}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button className={styles.monthYearName} onClick={onClickMonth}>
        {label}
      </button>
      <button type="button" className={styles.prevNext} onClick={onClickNext}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={styles.prevIcon}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default MonthSelector;
