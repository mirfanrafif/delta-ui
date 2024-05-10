import classNames from 'classnames';

import styles from './FormLabel.module.css';

export type FormLabelProps = {
  label?: string;
  isError?: boolean;
  description?: string;
  required?: boolean;
};

const FormLabel: React.FC<FormLabelProps> = (props) => {
  const { label = '', isError = false } = props;
  return (
    <>
      {label && (
        <label
          className={classNames(
            styles['form-label'],
            {
              [styles['label-color-error']]: isError,
              [styles['label-color-default']]: !isError,
            },
            'form-label', // This is a global class
          )}
        >
          {label}
          {props.required && <span className={styles['required']}>*</span>}
        </label>
      )}
      {props.description && (
        <p className={styles['form-description']}>{props.description}</p>
      )}
    </>
  );
};

export default FormLabel;
