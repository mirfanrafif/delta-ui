import { ComponentPropsWithoutRef } from 'react';

import styles from './Checkbox.module.css';

const Checkbox = (
  props: ComponentPropsWithoutRef<'input'> & {
    label?: string;
  },
) => {
  return (
    <label className={styles.container}>
      {props.label && <span className={styles.label}>{props.label}</span>}
      <input {...props} type="checkbox" />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default Checkbox;
