import Link from "next/link";
import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FiBook } from "react-icons/fi";
import toast from "react-hot-toast";
import { setAuth } from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/api";
import { TbLogout } from "react-icons/tb";
import { BiCog } from "react-icons/bi";

export default function Sidebar() {
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
    <section className="col-span-3">
      <ul class="space-y-2 bg-base-100 sticky top-20 text-base-content">
        <li className="">
          <Link href="/dashboard">
            <a className="relative flex items-center w-full p-3 text-sm rounded-lg cursor-pointer gap-x-2 bg-red-50 hover:bg-red-300">
              <MdOutlineDashboard className="text-base font-bold" />
              Dashboard
            </a>
          </Link>
        </li>
        <li className="">
          <Link href="/dashboard/courses">
            <a className="relative flex items-center w-full p-3 text-sm rounded-lg cursor-pointer gap-x-2 hover:bg-red-300">
              <FiBook className="text-base font-bold" />
              Courses
            </a>
          </Link>
        </li>
        <li className="">
          <Link href="/dashboard/settings">
            <a className="relative flex items-center w-full p-3 text-sm rounded-lg cursor-pointer gap-x-2 hover:bg-red-300">
              <BiCog className="text-base font-bold" />
              Settings
            </a>
          </Link>
        </li>
        <li className="">
          <Link href="/profile">
            <a className="relative flex items-center w-full p-3 text-sm rounded-lg cursor-pointer gap-x-2 hover:bg-red-300">
              <AiOutlineUser className="text-base font-bold" />
              Profile
            </a>
          </Link>
        </li>
        <li className="">
          <button
            onClick={handleLogout}
            className="relative flex items-center w-full p-3 text-sm rounded-lg cursor-pointer gap-x-2 hover:bg-red-300"
          >
            <TbLogout className="text-base font-bold" />
            Logout
          </button>
        </li>
      </ul>
    </section>
  );
}
