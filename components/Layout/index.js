import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";
import Loader from './Loader'
import { Toaster } from "react-hot-toast";
import { useLoadingWithRefresh } from '../../hooks/useLoadingWithRefresh'

const Layout = ({ children }) => {
  const { loading } = useLoadingWithRefresh()

  return (loading ? <Loader /> : <>
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
