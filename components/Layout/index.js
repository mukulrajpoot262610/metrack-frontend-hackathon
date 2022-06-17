import Head from "next/head";
import React, { useContext, useEffect } from "react";
import {
  AuthContext,
  MenuToggleContext,
  notifyContext,
  tokenContext,
  userContext,
} from "../contexts";
import { API } from "../services";
import { verifyToken } from "../services/authService";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const { error, notify } = useContext(notifyContext);
  const { showNav } = useContext(MenuToggleContext);
  const { token, setToken } = useContext(tokenContext);
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
  const { user, setUser } = useContext(userContext);

  // HANDLERS
  const checkLoggedIn = async () => {
    console.log(")");
    if (user) return;
    let ls_token = JSON.parse(localStorage.getItem("token"));
    // return if token is null
    if (ls_token === null || ls_token === "") {
      localStorage.setItem("token", JSON.stringify(""));
      setToken("");
      return;
    }
    // validate token if it isn't null
    try {
      const tokenRes = await fetch(API + "/api/auth/verify-token", {
        headers: { token: ls_token },
      });
      // fetch user if token is valid
      if (tokenRes.status) {
        setToken(ls_token);
        verifyToken(ls_token).then((res) => {
          // set user data
          if (!res.status) {
            notify("Session expired. Login again!");
            return;
          }
          setLoggedIn(true);
          setUser(res.data);
        });
      }
    } catch (error) {}
  };

  // login on componenet mount
  useEffect(() => {
    checkLoggedIn();
  }, [loggedIn]);

  // login on componenet mount
  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <>
      <Head>
        <title>SkillsTube</title>
      </Head>
      {error ? (
        <>
          <div className="fixed z-50 flex items-center h-10 px-4 font-semibold rounded-md shadow-lg bg-info text-info-content bottom-8 right-8">
            {error}
          </div>
        </>
      ) : null}
      {showNav ? <Navbar /> : null}
      <main className="w-11/12 min-h-screen mx-auto lg:w-10/12">
        {children}
      </main>
    </>
  );
};

export default Layout;
