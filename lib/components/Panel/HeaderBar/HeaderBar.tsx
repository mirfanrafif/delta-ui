export type HeaderBarProps = {
  children: React.ReactNode;
  className?: string;
};

const HeaderBar: React.FC<HeaderBarProps> = (props) => {
  return (
    <div className={`flex justify-between p-8 ${props.className}`}>
      {props.children}
    </div>
  );
};

export default HeaderBar;
