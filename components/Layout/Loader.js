import React from 'react'
import Head from 'next/head'

const Loader = () => {
    return (
        <>
            <Head>
                <title>MeTrack - Track your YouTube Learning</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#00aba9" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <main className='h-screen w-full bg-white flex justify-center items-center flex-col'>
                <h1 className='animate-pulse text-4xl font-bold text-primary-blue'>Loading...</h1>
            </main>
        </>
    )
}

export default Loader