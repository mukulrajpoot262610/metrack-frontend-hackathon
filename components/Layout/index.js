import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>SkillsTube</title>
            </Head>
            <Navbar />
            <main className='min-h-screen w-11/12 lg:w-10/12 mx-auto'>
                {children}
            </main>
        </>
    )
}

export default Layout