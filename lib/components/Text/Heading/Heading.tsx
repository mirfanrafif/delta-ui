export type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

const Heading: React.FC<HeadingProps> = (props) => {
  const { children, className = '' } = props;
  return <div className={`text-base font-bold ${className}`}>{children}</div>;
};

export default Heading;
