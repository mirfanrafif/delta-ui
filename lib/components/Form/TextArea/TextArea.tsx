import classNames from 'classnames';

import styles from './TextArea.module.css';

export type TextInputProps = {
  placeholder?: string;
  isError?: boolean;
  value: string;
  onBlur?: () => void;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
};

const TextInput: React.FC<TextInputProps> = (props) => {
  const {
    placeholder = '',
    isError = false,
    value = '',
    onChange,
    onBlur,
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
    <textarea
      placeholder={placeholder}
      className={classNames(
        styles['text-input'],
        isError && styles['text-input-error'],
        'text-input', //Global class
      )}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default TextInput;
