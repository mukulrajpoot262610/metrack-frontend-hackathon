import React from "react";
import Link from "next/dist/client/link";
import { useDispatch, useSelector } from "react-redux";
import { FaAngleDown } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import { logout } from "../../services/api";
import { setAuth } from "../../redux/authSlice";
import toast from "react-hot-toast";

const Navbar = () => {
  const { isAuth, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
      dispatch(setAuth({ data: null }));
      toast.success("logged out");
    } catch (e) {
      toast.error("unable to logout");
    }
  };

  return (
    <nav className="fixed top-0 z-50 flex items-center justify-between w-full h-16 bg-white">
      <div className="flex items-center justify-between w-11/12 mx-auto lg:w-10/12 ">
        <div>
          <Link href="/">
            <a className="flex items-center gap-2">
              <img src="/logo.png" className="h-6 w-12 object-contain" />
              <h1 className="uppercase tracking-tight font-bold hidden lg:block cursor-pointer">
                <span className="text-blue-500 text-3xl">ME</span>Track
              </h1>
            </a>
          </Link>
        </div>
        {isAuth ? (
          <div className="flex items-center gap-4">
            <Link href="/profile">
              <a className="text-xs font-bold border border-blue-300 btn btn-ghost hover:bg-blue-50 btn-sm">
                Profile
              </a>
            </Link>
            <div className="dropdown dropdown-hover dropdown-end">
              <div
                tabIndex="0"
                className="flex items-center justify-center gap-2"
              >
                <div className="cursor-pointer avatar">
                  <div className="w-10 rounded-full ring-1 ring-blue-400 ring-offset-base-100 ring-offset-2">
                    <img src="https://api.lorem.space/image/face?hash=47449" />
                  </div>
                </div>
                <FaAngleDown className="cursor-pointer" />
              </div>
              <ul
                tabIndex="0"
                className="p-6 bg-white shadow-lg dropdown-content menu rounded-box w-96 "
              >
                <div className="flex items-center gap-4">
                  <div className="cursor-pointer avatar">
                    <div className="w-20 rounded-full ring-1 ring-blue-400 ring-offset-base-100 ring-offset-2">
                      <img src="https://api.lorem.space/image/face?hash=47449" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">{user?.name}</h2>
                    <h3 className="text-sm font-semibold">{user?.email}</h3>
                  </div>
                </div>
                <hr className="my-4" />
                <li className="text-sm">
                  <Link href="/dashboard">
                    <a className="hover:bg-blue-50 active:bg-blue-300">
                      <MdOutlineDashboard className="text-base font-bold" />
                      Dashboard
                    </a>
                  </Link>
                </li>
                <li className="text-sm">
                  <Link href="/explore">
                    <a className="hover:bg-blue-50 active:bg-blue-300">
                      <FiBook className="text-base font-bold" />
                      Explore Courses
                    </a>
                  </Link>
                </li>
                <li className="text-sm">
                  <Link href="/profile">
                    <a className="hover:bg-blue-50 active:bg-blue-300">
                      <AiOutlineUser className="text-base font-bold" />
                      Profile
                    </a>
                  </Link>
                </li>
                <li className="text-sm">
                  <button
                    onClick={handleLogout}
                    className="hover:bg-blue-50 active:bg-blue-300"
                  >
                    <TbLogout className="text-base font-bold" />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link href="/auth">
              <p className="font-bold btn btn-ghost hover:bg-blue-50">Login</p>
            </Link>
            <Link href="/auth/register">
              <button className="font-bold border border-blue-300 btn btn-ghost hover:bg-blue-50">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
