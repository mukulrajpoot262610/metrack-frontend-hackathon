import React, { useContext, useEffect } from "react";
import Link from "next/dist/client/link";
import {
  AuthContext,
  notifyContext,
  tokenContext,
  userContext,
} from "../contexts";
import { useRouter } from "next/router";

const Navbar = () => {
  const { setToken } = useContext(tokenContext);
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
  const { user, setUser } = useContext(userContext);
  const { notify } = useContext(notifyContext);
  const router = useRouter();

  // HANDLERS & HELPERS
  const handleSignout = (e) => {
    setLoggedIn(false);
    setToken(null);
    setUser(null);
    localStorage.setItem("token", JSON.stringify(""));
    notify("logged out");
    router.push("/");
  };

  return (
    <nav className="fixed top-0 z-50 flex items-center justify-between w-11/12 h-16 -translate-x-1/2 bg-white lg:w-10/12 left-1/2">
      <div>
        <Link href="/">
          <h1 className="text-xl font-bold cursor-pointer">
            <span className="text-[#ECB3A0]">100</span>Tube
          </h1>
        </Link>
      </div>
      {loggedIn ? (
        <div className="flex items-center gap-4">
          <p className="font-bold btn btn-ghost hover:bg-red-50">
            {user?.username}
          </p>
          <button
            onClick={handleSignout}
            className="font-bold border border-red-300 btn btn-ghost hover:bg-red-50"
          >
            Log out
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Link href="/auth">
            <p className="font-bold btn btn-ghost hover:bg-red-50">Login</p>
          </Link>
          <Link href="/auth/register">
            <button className="font-bold border border-red-300 btn btn-ghost hover:bg-red-50">
              Resigter
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
