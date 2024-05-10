import { ComponentPropsWithoutRef } from 'react';

import styles from './RadioButton.module.css';

const RadioButton = (
  props: ComponentPropsWithoutRef<'input'> & {
    label?: string;
  },
) => {
  return (
    <label className={styles.container}>
      {props.label && <span className={styles.label}>{props.label}</span>}
      <input type="radio" {...props} />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default RadioButton;
