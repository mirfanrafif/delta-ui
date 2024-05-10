import { useEffect, useState } from 'react';

import { PasswordField } from '../..';
import {
  checkPasswordLength,
  passwordContainsAlphabet,
  passwordContainsNumeric,
} from '../../../utils';
import { MIN_PASSWORD } from './constants';

export type PasswordConfirmFieldProps = {
  // eslint-disable-next-line no-unused-vars
  onChange?: (password: string, status: PasswordStatusProps) => void;
};

export interface PasswordStatusProps {
  validLength: boolean;
  useAlphabet: boolean;
  useNumeric: boolean;
  equalPassword: boolean;
}

const PasswordConfirmField: React.FC<PasswordConfirmFieldProps> = ({
  onChange,
}) => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  useEffect(() => {
    const status: PasswordStatusProps = {
      validLength: checkPasswordLength(MIN_PASSWORD, password),
      useAlphabet: passwordContainsAlphabet(password),
      useNumeric: passwordContainsNumeric(password),
      equalPassword: password === confirmPassword,
    };
    typeof onChange === 'function' && onChange(password, status);
  }, [password, confirmPassword]);

  return (
    <div className="flex flex-col gap-6">
      <PasswordField onChange={(text) => setPassword(text)} />
      <PasswordField
        label="Confirm Password"
        placeholder="Confirm your new password"
        onChange={(text) => setConfirmPassword(text)}
      />
    </div>
  );
};

export default PasswordConfirmField;
