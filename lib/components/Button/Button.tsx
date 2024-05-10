import styles from './Button.module.css';

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  className?: string;
  isDisabled?: boolean;
  children: React.ReactNode;
  variant?: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  href?: string;
};

const Button: React.FC<ButtonProps> = (props) => {
  const {
    isDisabled = false,
    children,
    className = '',
    onClick,
    variant = 'primary',
    size = 'medium',
  } = props;
  if (props.href) {
    return (
      <a
        className={`
          ${styles.button} 
          button
          ${`button-${size}`} 
          ${`button-${variant}`} 
          ${className}
        `}
        href={props.href}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`
        ${styles.button} 
        button
        ${`button-${size}`} 
        ${`button-${variant}`} 
        ${className}
      `}
      onClick={
        !isDisabled && typeof onClick === 'function' ? onClick : () => undefined
      }
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
