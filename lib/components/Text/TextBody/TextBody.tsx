export type TextBodyProps = {
  children: React.ReactNode;
  className?: string;
};

const TextBody: React.FC<TextBodyProps> = (props) => {
  const { children, className = '' } = props;
  return <div className={`text-sm font-normal ${className}`}>{children}</div>;
};

export default TextBody;
