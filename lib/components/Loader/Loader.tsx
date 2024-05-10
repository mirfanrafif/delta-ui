import styles from './Loader.module.css';

export default function Loader() {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      className={styles['loader']}
    >
      <circle
        opacity="0.5"
        cx="48"
        cy="48"
        r="43"
        stroke="#B5B7BD"
        strokeWidth="10"
      />
      <path
        d="M48 5C53.6468 5 59.2384 6.11223 64.4554 8.27318C69.6724 10.4341 74.4127 13.6015 78.4056 17.5944C82.3985 21.5873 85.5659 26.3276 87.7268 31.5446C89.8878 36.7616 91 42.3532 91 48"
        stroke="#052A6E"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}
