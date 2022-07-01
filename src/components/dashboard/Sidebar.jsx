import Link from "next/link";
import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser, AiOutlineProject } from "react-icons/ai";
import { FiBook } from "react-icons/fi";
import toast from "react-hot-toast";
import { setAuth } from "redux/authSlice";
import { useDispatch } from "react-redux";
import { logout } from "services/api";
import { TbLogout } from "react-icons/tb";
import { BiCog } from "react-icons/bi";
import { useRouter } from "next/router";

export default function Sidebar() {
  const dispatch = useDispatch();
  const router = useRouter();

  const path = router.pathname;

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
      dispatch(setAuth({ data: null }));
      toast.success("logged out");
      router.replace("/");
    } catch (e) {
      toast.error("unable to logout");
    }
  };

  return (
    <>
      <section className="hidden lg:block lg:col-span-3">
        <ul className="sticky space-y-2 bg-base-100 top-20 text-base-content">
          <li className="">
            <Link href="/dashboard">
              <a
                className={`relative flex items-center w-full p-3 text-sm rounded-lg cursor-pointer gap-x-2  ${
                  path === "/dashboard"
                    ? "bg-blue-50 font-bold"
                    : "hover:bg-blue-50"
                }`}
              >
                <MdOutlineDashboard className="text-xl font-bold" />
                Dashboard
              </a>
            </Link>
          </li>
          <li className="">
            <Link href="/dashboard/projects">
              <a
                className={`relative flex items-center w-full p-3 text-sm rounded-lg cursor-pointer gap-x-2  ${
                  path === "/dashboard/projects"
                    ? "bg-blue-50 font-bold"
                    : "hover:bg-blue-50"
                }`}
              >
                <AiOutlineProject className="text-xl font-bold" />
                Projects
              </a>
            </Link>
          </li>
          <li className="">
            <Link href="/dashboard/courses">
              <a
                className={`relative flex items-center w-full p-3 text-sm rounded-lg cursor-pointer gap-x-2  ${
                  path === "/dashboard/courses"
                    ? "bg-blue-50 font-bold"
                    : "hover:bg-blue-50"
                }`}
              >
                <FiBook className="text-xl font-bold" />
                Courses
              </a>
            </Link>
          </li>
          <li className="">
            <Link href="/dashboard/settings">
              <a
                className={`relative flex items-center w-full p-3 text-sm rounded-lg cursor-pointer gap-x-2  ${
                  path === "/dashboard/settings"
                    ? "bg-blue-50 font-bold"
                    : "hover:bg-blue-50"
                }`}
              >
                <BiCog className="text-xl font-bold" />
                Settings
              </a>
            </Link>
          </li>
          <li className="">
            <Link href="/profile">
              <a
                className={`relative flex items-center w-full p-3 text-sm rounded-lg cursor-pointer gap-x-2  ${
                  path === "/profile"
                    ? "bg-blue-50 font-bold"
                    : "hover:bg-blue-50"
                }`}
              >
                <AiOutlineUser className="text-xl font-bold" />
                Profile
              </a>
            </Link>
          </li>
          <li className="">
            <button
              onClick={handleLogout}
              className={`relative flex items-center w-full p-3 text-sm rounded-lg cursor-pointer gap-x-2  ${
                path === "/logout" ? "bg-blue-50 font-bold" : "hover:bg-blue-50"
              }`}
            >
              <TbLogout className="text-xl font-bold" />
              Logout
            </button>
          </li>
        </ul>
      </section>

      <section className="fixed bottom-0 left-0 z-40 w-full h-16 bg-white border lg:hidden">
        <ul className="flex items-center justify-around">
          <li className="">
            <Link href="/dashboard">
              <a className="relative flex flex-col items-center justify-center w-full p-3 text-sm rounded-lg cursor-pointer gap-x-2">
                <MdOutlineDashboard className="text-2xl font-bold" />
                Home
              </a>
            </Link>
          </li>
          <li className="">
            <Link href="/dashboard/courses">
              <a className="relative flex flex-col items-center justify-center w-full p-3 text-sm rounded-lg cursor-pointer gap-x-2 hover:bg-blue-300">
                <FiBook className="text-2xl font-bold" />
                Courses
              </a>
            </Link>
          </li>
          <li className="">
            <Link href="/dashboard/settings">
              <a className="relative flex flex-col items-center justify-center w-full p-3 text-sm rounded-lg cursor-pointer gap-x-2 hover:bg-blue-300">
                <BiCog className="text-2xl font-bold" />
                Settings
              </a>
            </Link>
          </li>
          <li className="">
            <Link href="/profile">
              <a className="relative flex flex-col items-center justify-center w-full p-3 text-sm rounded-lg cursor-pointer gap-x-2 hover:bg-blue-300">
                <AiOutlineUser className="text-2xl font-bold" />
                Profile
              </a>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
