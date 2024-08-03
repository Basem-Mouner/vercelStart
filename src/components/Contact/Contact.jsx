import React from "react";
import { useEffect, useState } from "react";
import style from "./Contact.module.css";
export default function Contact() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div className="container mx-auto md:mt-12 py-24">
        <div className=" flex flex-col items-center mb-10  w-full">
          <h2 className="md:text-5xl text-2xl  font-bold text-[#2c3e50] uppercase">
            conatct section
          </h2>
          <div className="flex flex-row  justify-center mt-4">
            <div className=" w-24 h-[4px] bg-[#2c3e50]  mt-2 mr-2"></div>
            <i className="fa-solid fa-star text-[#2c3e50] "></i>
            <div className="w-24 h-[4px]  mt-2 ml-2 bg-[#2c3e50] "></div>
          </div>
        </div>
        <div className="max-w-xl py-6 mx-auto px-8">
          <form>
            <div className="relative z-0 w-full my-10 group">
              <input
                id="name"
                type="text"
                name="name"
                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=""
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                User Name :
              </label>
            </div>

            <div className="relative z-0 w-full my-10 group">
              <input
                id="age"
                type="number"
                name="age"
                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=""
              />
              <label
                htmlFor="age"
                className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                User Age :
              </label>
            </div>
            <div className="relative z-0 w-full my-10 group">
              <input
                id="email"
                type="email"
                name="email"
                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=""
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                User Email :
              </label>
            </div>
            <div className="relative z-0 w-full my-10 group">
              <input
                id="password"
                type="text"
                name="password"
                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=""
              />
              <label
                htmlFor="password"
                className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                User Password :
              </label>
            </div>

            <button
              type="submit"
              className="text-white my-5 bg-[#1abc9c] hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 min-w-24"
            >
              send message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
