export type TextTitleProps = {
  children: React.ReactNode;
  className?: string;
};

const TextTitle: React.FC<TextTitleProps> = (props) => {
  const { children, className = '' } = props;
  return <div className={`text-2xl font-bold ${className}`}>{children}</div>;
};

export default TextTitle;
