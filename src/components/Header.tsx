import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="my-8 flex justify-between items-center">
      <Link to="/" className="text-blue-700 font-bold text-lg">
        <strong>gbLw1</strong> Github repos
      </Link>

      <div className="flex justify-center items-center">
        <Link to="/form" className="text-blue-700 ml-5">
          Form
        </Link>
      </div>
    </div>
  );
};
