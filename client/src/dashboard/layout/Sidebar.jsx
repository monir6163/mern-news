import { useContext } from "react";
import { AiFillDashboard, AiOutlinePlus } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { ImProfile } from "react-icons/im";
import { Link, useLocation } from "react-router-dom";
import StoreContext from "../../context/storeContext";

const Sidebar = () => {
  const { pathname } = useLocation();
  const { state } = useContext(StoreContext);
  return (
    <div className="w-[250px] h-screen fixed left-0 top-0 bg-white">
      <div className="h-[70px] px-3 flex justify-start items-center">
        <Link to={"/"}>
          <img src="/news-logo.png" alt="logo" />
        </Link>
      </div>
      <ul className="px-3 flex flex-col gap-y-1 font-medium">
        {state.userInfo?.role === "admin" ? (
          <>
            <li>
              <Link
                to={"/dashboard/admin"}
                className={`px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full flex rounded-sm gap-x-2 items-center justify-start hover:text-white hover:bg-indigo-500 transition-all duration-200 ease-in-out cursor-pointer ${
                  pathname === "/dashboard/admin"
                    ? "bg-indigo-500 text-white"
                    : "text-[#404040f6] bg-white"
                }`}
              >
                <span className="text-xl">
                  <AiFillDashboard />
                </span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/dashboard/addwriter"}
                className={`px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full flex rounded-sm gap-x-2 items-center justify-start hover:text-white hover:bg-indigo-500 transition-all duration-200 ease-in-out cursor-pointer ${
                  pathname === "/dashboard/addwriter"
                    ? "bg-indigo-500 text-white"
                    : "text-[#404040f6] bg-white"
                }`}
              >
                <span className="text-xl">
                  <AiOutlinePlus />
                </span>
                <span>Add Writer</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/dashboard/writers"}
                className={`px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full flex rounded-sm gap-x-2 items-center justify-start hover:text-white hover:bg-indigo-500 transition-all duration-200 ease-in-out cursor-pointer ${
                  pathname === "/dashboard/writers"
                    ? "bg-indigo-500 text-white"
                    : "text-[#404040f6] bg-white"
                }`}
              >
                <span className="text-xl">
                  <FiUsers />
                </span>
                <span>Writers</span>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to={"/dashboard/writer"}
                className={`px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full flex rounded-sm gap-x-2 items-center justify-start hover:text-white hover:bg-indigo-500 transition-all duration-200 ease-in-out cursor-pointer ${
                  pathname === "/dashboard/writer"
                    ? "bg-indigo-500 text-white"
                    : "text-[#404040f6] bg-white"
                }`}
              >
                <span className="text-xl">
                  <AiFillDashboard />
                </span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/dashboard/create/news"}
                className={`px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full flex rounded-sm gap-x-2 items-center justify-start hover:text-white hover:bg-indigo-500 transition-all duration-200 ease-in-out cursor-pointer ${
                  pathname === "/dashboard/create/news"
                    ? "bg-indigo-500 text-white"
                    : "text-[#404040f6] bg-white"
                }`}
              >
                <span className="text-xl">
                  <FaPlus />
                </span>
                <span>Add News</span>
              </Link>
            </li>
          </>
        )}
        <li>
          <Link
            to={"/dashboard/news"}
            className={`px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full flex rounded-sm gap-x-2 items-center justify-start hover:text-white hover:bg-indigo-500 transition-all duration-200 ease-in-out cursor-pointer ${
              pathname === "/dashboard/news"
                ? "bg-indigo-500 text-white"
                : "text-[#404040f6] bg-white"
            }`}
          >
            <span className="text-xl">
              <BiNews />
            </span>
            <span>News</span>
          </Link>
        </li>
        <li>
          <Link
            to={"/dashboard/profile"}
            className={`px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full flex rounded-sm gap-x-2 items-center justify-start hover:text-white hover:bg-indigo-500 transition-all duration-200 ease-in-out cursor-pointer ${
              pathname === "/dashboard/profile"
                ? "bg-indigo-500 text-white"
                : "text-[#404040f6] bg-white"
            }`}
          >
            <span className="text-xl">
              <ImProfile />
            </span>
            <span>Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
