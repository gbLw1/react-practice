interface CleanLayoutProps {
  children: React.ReactNode;
}

const CleanLayout: React.FC<CleanLayoutProps> = ({ children }) => {
  return (
    <div className="px-4 flex flex-col justify-center items-center">
      <h1 className="my-16 text-3xl text-center text-blue-700 font-bold mb-10">
        <strong>React practice</strong>
      </h1>

      <div className="flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default CleanLayout;
