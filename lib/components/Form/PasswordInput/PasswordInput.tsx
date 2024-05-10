import { useState } from 'react';

import { TextInput } from '../..';
import { Eye } from '../../../assets/icons';
import styles from './PasswordInput.module.css';

export type TextInputProps = {
  placeholder?: string;
  isError?: boolean;

  value: string;
  onBlur?: () => void;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
};

type InputType = 'text' | 'password';

const PasswordInput: React.FC<TextInputProps> = (props) => {
  const { placeholder = '', isError = false, value, onChange, onBlur } = props;
  const [inputType, setInputType] = useState<InputType>('password');

  const handleToggle = () => {
    setInputType(inputType === 'text' ? 'password' : 'text');
  };

  return (
    <div className="relative">
      <div className={styles['eye-icon']} onClick={() => handleToggle()}>
        <span>
          <Eye />
        </span>
      </div>
      <TextInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={inputType}
        isError={isError}
        onBlur={onBlur}
      />
    </div>
  );
};

export default PasswordInput;
