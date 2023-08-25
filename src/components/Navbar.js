import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navlinks = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Current Initiatives",
            link: "/Initiatives",
        },
        {
            title: "Give a Talk",
            link: "/Talks",
        },
        {
            title: "Communities",
            link: "/Communities",
        },
        {
            title: "Organize a Workshop",
            link: "/Workshops",
        },
        {
            title: "Important Event Documents",
            link: "/Eventdocs",
        },
        {
            title: "Become a Sponsor",
            link: "/Sponsor",
        },
        {
            title: "Donate",
            link: "/Donate",
        },
    ];

    return (
        <nav className="bg-zinc-100">
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    <div className="hidden md:block">
                        <div className="flex items-baseline ml-10 space-x-4">
                           {navlinks.map((link, index) => (
                              <a
                                 key={index}
                                 className="px-3 py-2 font-medium text-gray-300 rounded hover:bg-gray-600 hover:text-white-md text-md"
                                 href={link.link}
                              >
                                 {link.title}
                              </a>
                           ))}
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img
                            className="w-auto h-20 mb-1"
                            src="images/cleargblogo.png"
                            alt="Logo"
                        />
                        <h1 className="text-2xl font-medium">GoBridge</h1>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

/* <div className='relative'>
<button
   className='text-gray-600 md:hidden hover:text-gray-800 focus:outline-none'
   onClick={toggleMenu}
>
   <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-6 h-6'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
   >
      <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M4 6h16M4 12h16m-7 6h7'
      />
   </svg>
</button>
   <div className={`absolute md:hidden top-10 right-0 ${menuOpen ? 'block' : 'hidden'}`}>
      <div className='px-4 py-2 bg-white shadow-lg'>
         <BrowserRouter>
         <Link className='block mb-2' to='/Home'>
            Home
         </Link>
         <Link className='block mb-2' to='/Initiatives'>
            Current Initiatives
         </Link>
         <Link className='block mb-2' to='/Talks'>
            Give a Talk
         </Link>
         <Link className='block mb-2' to='/Communities'>
            Communities
         </Link>
         <Link className='block mb-2' to='/Workshops'>
            Organize a Workshop
         </Link>
         <Link className='block mb-2' to='/Eventdocs'>
            Important Event Documents
         </Link>
         <Link className='block mb-2' to='/Sponsor'>
            Become a Sponsor
         </Link>
         <Link className='block' to='/Donate'>
            Donate
         </Link>
         </BrowserRouter>
      </div>
   </div>
</div> */
