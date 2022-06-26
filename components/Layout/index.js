import Head from "next/head";
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { refresh } from "../../services/api";
import { setAuth } from "../../redux/authSlice";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>SkillsTube</title>
      </Head>
      <Navbar />
      <main className="w-11/12 min-h-screen mx-auto lg:w-10/12">
        {children}
      </main>
      <Toaster />
    </>
  );
};

export default Layout;
