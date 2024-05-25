import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="bg-blue-950 shadow-md ">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
        <Link to={"/"}>
          <h1 className="font-bold hover:cursor-pointer">
            <span className="text-red-500 text-ms sm:text-xl">Dubagari</span>
            <span className="text-slate-200 text-ms sm:text-xl">Estate</span>
          </h1>
        </Link>

        <form className="bg-blue-100 rounded-lg p-2 flex items-center">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-500 hover:cursor-pointer" />
        </form>
        <ul className="flex gap-4 items-center">
          <Link to={"/"}>
            <li className="hidden sm:inline text-slate-200 hover:underline cursor-pointer">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="hidden sm:inline text-slate-200 hover:underline cursor-pointer">
              about
              <img src="" alt="" />
            </li>
          </Link>
          <Link to={"/profile"}>
            {currentUser ? (
              <img
                className="rounded-full border-r-amber-800 w-9 h-9 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className=" text-slate-200 hover:underline cursor-pointer">
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
