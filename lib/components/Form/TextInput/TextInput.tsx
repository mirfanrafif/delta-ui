import { forwardRef } from 'react';

import classNames from 'classnames';

import styles from './TextInput.module.css';

export type TextInputProps = {
  placeholder?: string;
  isError?: boolean;
  type?: 'text' | 'password';
  value: string;
  onBlur?: () => void;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string) => void;
  onClick?: () => void;
  readonly?: boolean;
  className?: string;
};

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const {
    type = 'text',
    placeholder = '',
    isError = false,
    value = '',
    onChange,
    onBlur,
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (typeof onChange === 'function') {
      onChange(newValue);
    }
  };

  const handleBlur = () => {
    if (typeof onBlur === 'function') {
      onBlur();
    }
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classNames(
        styles['text-input'],
        isError && styles['text-input-error'],
        'text-input', //Global class,
        props.className,
      )}
      value={value}
      onClick={props.onClick}
      onChange={handleChange}
      onBlur={handleBlur}
      readOnly={props.readonly}
      ref={ref}
    />
  );
});

export default TextInput;
