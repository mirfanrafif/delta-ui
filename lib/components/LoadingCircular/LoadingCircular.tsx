import classNames from 'classnames';
import Lottie from 'lottie-react';

import LoadingLottie from './loading-lottie.json';
import styles from './LoadingCircular.module.css';

export type LoadingCircularProps = {
  className?: string;
  variant: 'primary' | 'white';
};

export const LoadingCircular = (props: LoadingCircularProps) => {
  return (
    <div className={classNames(styles.container, props.className)}>
      <Lottie
        loop={true}
        autoPlay={true}
        animationData={LoadingLottie}
        className={classNames(styles.loadingAnimation)}
      />
    </div>
  );
};
