interface CleanLayoutProps {
  children: React.ReactNode;
}

const CleanLayout: React.FC<CleanLayoutProps> = ({ children }) => {
  return (
    <div className="px-4 flex flex-col justify-center items-center">
      <h1 className="my-12 text-3xl text-center text-slate-300 font-semibold">
        React practice
      </h1>

      <div className="flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default CleanLayout;
