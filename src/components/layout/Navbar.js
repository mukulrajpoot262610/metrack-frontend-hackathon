import Link from "next/dist/client/link";
import { useDispatch, useSelector } from "react-redux";
import { FaAngleDown } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
import { BiCog } from "react-icons/bi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import { logout } from "services/api";
import { setAuth } from "redux/authSlice";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import { forwardRef, Fragment } from "react";

export default function Navbar() {
  const { isAuth, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

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
    <nav className="fixed top-0 z-50 flex items-center justify-between w-full h-16 bg-white">
      <div className="flex items-center justify-between w-11/12 mx-auto lg:w-10/12 ">
        <div>
          <Link href="/">
            <a className="flex items-center gap-2">
              <img
                alt="metrack-logo"
                src="/logo.png"
                className="object-contain w-12 h-6"
              />
              <h1 className="hidden font-bold tracking-tight uppercase cursor-pointer lg:block">
                <span className="text-3xl text-blue-500">ME</span>Track
              </h1>
            </a>
          </Link>
        </div>
        {isAuth ? (
          <div className="flex items-center gap-4">
            <Link href={`/${user?.username}`}>
              <a className="text-xs font-bold border border-blue-300 btn btn-ghost hover:bg-blue-50 btn-sm">
                Profile
              </a>
            </Link>
            <Dropdown user={user} handleLogout={handleLogout} />
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
}

function Dropdown({ user, handleLogout }) {
  /* eslint-disable react/display-name */
  const CustomLink = forwardRef((props, ref) => {
    let { href, children, ...rest } = props;
    return (
      <Link href={href}>
        <a ref={ref} {...rest}>
          {children}
        </a>
      </Link>
    );
  });

  return (
    <div className="flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex items-center justify-center gap-2">
            <div className="cursor-pointer avatar">
              <div className="w-10 rounded-full ring-1 ring-blue-400 ring-offset-base-100 ring-offset-2">
                <img
                  alt="avatar"
                  src={user?.avatar ? user?.avatar : "/profile.png"}
                  className="object-top"
                />
              </div>
            </div>
            <FaAngleDown className="cursor-pointer" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 p-4 mt-2 space-y-4 origin-top-right bg-white divide-y divide-gray-100 shadow-lg md:p-6 md:w-96 rounded-xl ring-opacity-5 focus:outline-none">
            <div className="flex items-center gap-4">
              <div className="cursor-pointer avatar">
                <div className="w-20 rounded-full ring-1 ring-blue-400 ring-offset-base-100 ring-offset-2">
                  <img
                    alt="avatar"
                    src={user?.avatar ? user?.avatar : "/profile.png"}
                    className="object-top"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-lg font-bold">{user?.name}</h2>
                <h2 className="text-sm font-semibold">@{user?.username}</h2>
                <h3 className="text-sm font-semibold">{user?.email}</h3>
              </div>
            </div>
            <div className="px-1 py-1 ">
              <Menu.Item>
                <CustomLink href="/dashboard">
                  <a className="flex items-center p-4 py-3 gap-x-4 hover:bg-blue-50 active:bg-blue-300 rounded-xl">
                    <MdOutlineDashboard className="text-base font-bold" />
                    Dashboard
                  </a>
                </CustomLink>
              </Menu.Item>
              <Menu.Item>
                <CustomLink href="/explore">
                  <a className="flex items-center p-4 py-3 gap-x-4 hover:bg-blue-50 active:bg-blue-300 rounded-xl">
                    <FiBook className="text-base font-bold" />
                    Explore Courses
                  </a>
                </CustomLink>
              </Menu.Item>
              <Menu.Item>
                <CustomLink href={`/${user?.username}`}>
                  <a className="flex items-center p-4 py-3 gap-x-4 hover:bg-blue-50 active:bg-blue-300 rounded-xl">
                    <AiOutlineUser className="text-base font-bold" />
                    Profile
                  </a>
                </CustomLink>
              </Menu.Item>
            </div>
            <div className="px-1 py-1 ">
              <Menu.Item>
                <CustomLink href="/dashboard/settings">
                  <a className="flex items-center p-4 py-3 gap-x-4 hover:bg-blue-50 active:bg-blue-300 rounded-xl">
                    <BiCog className="text-base font-bold" />
                    Settings
                  </a>
                </CustomLink>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full p-4 py-3 gap-x-4 hover:bg-blue-50 active:bg-blue-300 rounded-xl"
                >
                  <TbLogout className="text-base font-bold" />
                  Logout
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
