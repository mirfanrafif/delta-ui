import classNames from 'classnames';

import { FormLabel, PasswordInput, TextArea, TextInput } from '../..';
import { BadgeWarningCircle } from '../../../assets';
import styles from './TextField.module.css';

export type TextFieldProps = {
  className?: string;
  label?: string;
  placeholder?: string;
  isError?: boolean;
  errorMessage?: string;
  type?: 'text' | 'password' | 'textarea';
  required?: boolean;
  value: string;
  description?: string;
  onBlur?: () => void;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
};

const TextField: React.FC<TextFieldProps> = (props) => {
  const {
    className = '',
    label = '',
    placeholder = '',
    isError = false,
    errorMessage = '',
    type = 'text',

    value,
    onChange,
    onBlur,
  } = props;

  const getInput = () => {
    switch (type) {
      case 'text':
        return (
          <TextInput
            value={value}
            onChange={onChange}
            type={type}
            isError={isError}
            placeholder={placeholder}
            onBlur={onBlur}
          />
        );

      case 'password':
        return (
          <PasswordInput
            value={value}
            onChange={onChange}
            isError={isError}
            placeholder={placeholder}
            onBlur={onBlur}
          />
        );

      case 'textarea':
        return (
          <TextArea
            value={value}
            onChange={onChange}
            isError={isError}
            placeholder={placeholder}
            onBlur={onBlur}
          />
        );

      default:
        break;
    }
  };

  return (
    <div className={classNames(styles.container, className)}>
      <FormLabel
        label={label}
        isError={isError}
        description={props.description}
        required={props.required}
      />

      {getInput()}

      {isError && (
        <div className="flex gap-1 items-center">
          <BadgeWarningCircle />
          <FormLabel label={errorMessage} isError={isError} />
        </div>
      )}
    </div>
  );
};

export default TextField;
