export type PanelProps = {
  children: React.ReactNode;
  className?: string;
};

const Panel: React.FC<PanelProps> = (props) => {
  return (
    <div className={`flex flex-col w-[100%] h-screen ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Panel;
