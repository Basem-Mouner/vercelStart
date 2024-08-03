import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { CounterContext } from "../../Context/UserContext";
export default function Navbar() {
  // let { counter } = useContext(CounterContext);

  useEffect(() => {
    let navhight = document.querySelector(".navBar");

    window.addEventListener("scroll", (e) => {
      if (window.scrollY < 80) {
        navhight.classList.add("p-7");
      } else {
        navhight.classList.remove("p-7");
      }
    });
  }, [Navbar]);

  return (
    <>
      <nav className="bg-[#2c3e50] navBar    border-gray-200 dark:bg-gray-900  fixed top-0 left-0 right-0 z-50 transition-all duration-1000">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-3xl md:text-5xl font-bold whitespace-nowrap text-white">
              Start Framework
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-950 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-950 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            {/* <span className="sr-only">Open main menu</span> */}
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className=" font-medium flex flex-col p-4 md:p-0 my-4     md:flex-row md:space-x-8 rtl:space-x-reverse md:my-0  ">
              <li className="my-5">
                <NavLink to="about" className="text-white ">
                  ABOUT
                </NavLink>
              </li>
              <li className="my-5">
                <NavLink to="portfolio" className="text-white ">
                  PORTFOLIO{" "}
                </NavLink>
              </li>
              <li className="my-5">
                <NavLink to="contact" className="text-white">
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
