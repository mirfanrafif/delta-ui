import styles from './Card.module.css';

export type CardProps = React.ComponentPropsWithoutRef<'div'> & {
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = (props) => {
  return (
    <div {...props} className={`${styles.card} ${props.className ?? ''} card`}>
      {props.children}
    </div>
  );
};

export default Card;
