import { useState } from 'react';

import { TextField } from '../../../components';

type PasswordFieldType = {
  label?: string;
  placeholder?: string;
  defaultPasswordValue?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (password: string) => void;
};

const PasswordField: React.FC<PasswordFieldType> = (props) => {
  const {
    label = 'Password',
    placeholder = 'Enter Your Password',
    onChange,
    defaultPasswordValue = '',
  } = props;

  const [password, setPassword] = useState(defaultPasswordValue);

  const handleChange = (value: string) => {
    setPassword(value);
    typeof onChange === 'function' && onChange(value);
  };

  return (
    <TextField
      type="password"
      label={label}
      placeholder={placeholder}
      value={password}
      onChange={(value) => handleChange(value)}
    />
  );
};

export default PasswordField;
