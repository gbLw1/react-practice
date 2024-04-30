import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="my-8 flex justify-between items-center">
      <Link to="/" className="text-slate-300 font-semibold text-lg">
        React practice
      </Link>

      <div className="flex justify-center items-center">
        <Link
          to="/form"
          className="text-slate-300 border border-slate-300 rounded-lg px-2 py-1"
        >
          Form
        </Link>
      </div>
    </div>
  );
};
