export type FooterBarProps = {
  children: React.ReactNode;
  className?: string;
};

const FooterBar: React.FC<FooterBarProps> = (props) => {
  return (
    <div
      className={`flex p-8 gap-2.5 justify-between border border-solid border-gray-common items-center ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default FooterBar;
