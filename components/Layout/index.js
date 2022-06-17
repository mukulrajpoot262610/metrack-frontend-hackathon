import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>SkillsTube</title>
      </Head>
      <Navbar />
      <main className="w-11/12 min-h-screen mx-auto lg:w-10/12">
        {children}
      </main>
    </>
  );
};

export default Layout;
