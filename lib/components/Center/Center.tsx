export type CenterProps = {
  children: React.ReactNode;
};

const Center: React.FC<CenterProps> = (props) => {
  return (
    <div className="flex justify-center items-center h-screen w-[100%]">
      {props.children}
    </div>
  );
};

export default Center;
