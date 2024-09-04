import React from "react";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Product",
    link: "/product",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
 
];


const Navbar2 = () => {
  return (
    <div>
      <>
        {/* component */}
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                Get free delivery on orders over $100</p>
              
        <nav
          id="header"
          className="w-full z-30 top-10 bg-white shadow-lg border-b"
        >
          <div className="w-full flex items-center justify-between mt-0 px-6 ">
            <label
              htmlFor="menu-toggle"
              className="cursor-pointer md:hidden block"
            >
              <svg
                className="fill-current text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
              >
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" />

            {/* Logo */}
            <div className="logo order-1 md:order-1">
              <img src={logo} className="h-20 w-auto" alt="Logo" />
            </div>

            {/* Centered Navigation Menu */}
            <div
              className="hidden md:flex md:items-center md:w-auto w-full order-2 md:order-2 justify-center"
              id="menu"
            >
              <nav>
             
                <ul className="md:flex items-center justify-center text-base text-blue-600 pt-4 md:pt-0">
                {
                  NavbarLinks.map((item) => (
                  <li>
                  <NavLink to={item.link}  className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2">
                    {item.name}
                  </NavLink>
                   
                  </li>
                ))
              }   
                 
                </ul>
             
              </nav>
            </div>

            {/* Authentication Buttons */}
            <div
              className="order-3 md:order-3 flex items-center justify-end mr-0 md:mr-4"
              id="nav-content"
            >
              <div className="auth flex items-center w-full md:w-auto">
                <button className="bg-transparent text-gray-800 p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">
                <NavLink to="/login"  >
                   Log In
                  </NavLink>
                </button>
                <button className="bg-blue-600 text-gray-200 p-2 rounded hover:bg-blue-500 hover:text-gray-100">
                <NavLink to="/signup" >
                Sign up
                  </NavLink>
                 
                </button>
              </div>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
};

export default Navbar2;
