import React from 'react'

const Footer = () => {
    return (
        <footer className="body-font">
            <div className="w-10/12 mx-auto px-5 py-8 flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center">
                    <img src="/logo.png" className="h-6 w-12 object-contain" />
                    <h1 className=" ml-2 uppercase tracking-tight font-bold hidden lg:block cursor-pointer">
                        <span className="text-blue-500 text-3xl">ME</span>Track
                    </h1>
                </a>
                <p className="text-sm text-gray-700 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4 text-center">© 2022 Metrack —
                    <a href="https://github.com/mukulrajpoot262610" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@mukulrajpoot262610</a>
                    {" "}X
                    <a href="https://github.com/alsoamit" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@alsoamit</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-2 items-center">
                    <img src='https://www.linode.com/wp-content/uploads/2021/01/Linode-Logo-Black.svg' className='h-5' />
                    {" "} X {" "}
                    <img src='/hashnode.png' className='h-5' />
                </span>
            </div>
        </footer>
    )
}

export default Footer