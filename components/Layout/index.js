import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";
import Loader from './Loader'
import { Toaster } from "react-hot-toast";
import { useLoadingWithRefresh } from '../../hooks/useLoadingWithRefresh'
import Footer from "./Footer";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter()
  const { loading } = useLoadingWithRefresh()

  const path = router.pathname

  return (loading ? <Loader /> : <>
    <Head>
      <title>SkillsTube</title>
    </Head>
    {
      !path.includes("auth") && <Navbar />
    }
    <main className="w-11/12 min-h-screen mx-auto lg:w-10/12">
      {children}
    </main>
    <Toaster />
    {
      !path.includes("auth") && <Footer />
    }

  </>
  );
};

export default Layout;
