import { useEffect, useState } from 'react';

import { TextBody } from '../..';
import { BadgeSuccess } from '../../../assets';
import styles from './SnackBar.module.css';

export type SnackBarProps = React.ComponentPropsWithoutRef<'div'> & {
  message: string;
};

const SnackBar: React.FC<SnackBarProps> = (props) => {
  const { message } = props;

  const [showSnackbar, setShowSnackbar] = useState(true);

  useEffect(() => {
    setShowSnackbar(true);
    const timeout = setTimeout(() => {
      setShowSnackbar(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    showSnackbar && (
      <div className={`${styles['snackbar']}`}>
        <BadgeSuccess />
        <TextBody className="text-dark-primary">{message}</TextBody>
      </div>
    )
  );
};

export default SnackBar;
