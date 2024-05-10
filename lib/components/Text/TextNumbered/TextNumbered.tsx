import styles from './TextNumbered.module.css';

export type TextNumberedProps = {
  className?: string;
  number: string;
  text: string;
  isActive?: boolean;
};

const TextNumbered: React.FC<TextNumberedProps> = (props) => {
  const { text, number, isActive, className = '' } = props;
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div
        className={`${styles.number} ${isActive ? styles['number-active'] : styles['number-inactive']}`}
      >
        {number}
      </div>
      <div
        className={`${styles.text} ${isActive ? 'text-dark-primary' : 'text-dark-secondary'}`}
      >
        {text}
      </div>
    </div>
  );
};

export default TextNumbered;
