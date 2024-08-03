import React, { useContext } from "react";
import { useEffect, useState } from "react";
import style from "./Home.module.css";
import { CounterContext } from "../../Context/UserContext";
import homeImg from "../../assets/avataaars.svg";
export default function Home() {
  let { counter, setCounter } = useContext(CounterContext);
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div className="bg-[#1abc9c] flex flex-col items-center   md:mt-12 p-20">
        <img src={homeImg} width={300} className="" alt="home " />
        <div className="mt-5">
          <h2 className="md:text-6xl text-2xl  font-bold text-white text-center">
            start Framework
          </h2>

          <div className="flex flex-row  justify-center mt-4">
            <div className=" w-24 h-[4px] bg-white mt-2 mr-2"></div>
            <i className="fa-solid fa-star text-white"></i>
            <div className="w-24 h-[4px]  mt-2 ml-2 bg-white"></div>
          </div>
        </div>
        <div className="text-white mt-5 text-center">
          Graphic Artist - Web Designer - Illustrator
        </div>
      </div>
    </>
  );
}
