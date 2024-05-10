import { useState } from 'react';

import { TextField } from '../../../components';
import { checkIsValidEmail } from '../../../utils';

type EmailAddressFieldProps = {
  defaultEmailValue?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string, isError: boolean) => void;
};

const EmailAddressField: React.FC<EmailAddressFieldProps> = (props) => {
  const { onChange, defaultEmailValue = '' } = props;
  const [email, setEmail] = useState<string>(defaultEmailValue);
  const [isError, setIsError] = useState<boolean>(false);

  const handleBlur = () => {
    const isValid = email.length === 0 || checkIsValidEmail(email);

    if (isValid) {
      setIsError(false);
    } else {
      setIsError(true);
    }

    typeof onChange === 'function' && onChange(email, !isValid);
  };

  return (
    <TextField
      label="Email Address"
      placeholder="Enter Your Email Address"
      value={email}
      onChange={(value) => setEmail(value)}
      isError={isError}
      errorMessage="Invalid email address format"
      onBlur={handleBlur}
    />
  );
};

export default EmailAddressField;
