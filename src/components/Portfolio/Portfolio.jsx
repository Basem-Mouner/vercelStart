import React from "react";
import { useEffect, useState } from "react";
import style from "./Portfolio.module.css";
import port1 from "../../assets/port1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";

export default function Portfolio() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const imgsrc = Array.from(document.querySelectorAll(".myIMG"));
    const imginner = document.querySelectorAll(".inner_card");;
    const imgfly = document.getElementById("imgFly");
    const layoutPage = document.getElementById("layImg");
    console.log(imgsrc);

    for (let index = 0; index < imginner.length; index++) {
      imginner[index].addEventListener("click", (e) => {

        layoutPage.classList.replace("hidden", "flex");
        console.log(imgsrc[index].getAttribute('src'));
        imgfly.setAttribute("src", imgsrc[index].getAttribute("src"));
      });
    }

    layoutPage.addEventListener('click', (e) => {
      layoutPage.classList.replace("flex", "hidden");
    })
    imgfly.addEventListener('click', (event_handler) => {
      event_handler.stopPropagation();
    })


  }, [Portfolio]);




  return (
    <>
      <div className="container mx-auto md:mt-12 py-24">
        <div className=" flex flex-col items-center mb-10  w-full">
          <h2 className="md:text-5xl text-2xl  font-bold text-[#2c3e50] uppercase">
            portfolio component
          </h2>
          <div className="flex flex-row  justify-center mt-4">
            <div className=" w-24 h-[4px] bg-[#2c3e50]  mt-2 mr-2"></div>
            <i className="fa-solid fa-star text-[#2c3e50] "></i>
            <div className="w-24 h-[4px]  mt-2 ml-2 bg-[#2c3e50] "></div>
          </div>
        </div>
        <div className="row">
          <div className="outer_card  rounded-lg w-full md:w-6/12 lg:w-4/12 ">
            <div className="inner_card relative z-20">
              <img
                src={port1}
                alt="port1"
                className="myIMG w-full rounded-lg"
              />
              <div className="layout cursor-pointer absolute top-0 bottom-0 left-0 right-0 bg-[#1abc9c]/0 hover:bg-[#1abc9c]/80 duration-[.8s] flex justify-center items-center text-white/0 hover:text-white">
                <i className="fa-solid fa-plus text-9xl font-bold  "></i>
              </div>
            </div>
          </div>
          <div className="outer_card  rounded-lg w-full md:w-6/12 lg:w-4/12 ">
            <div className="inner_card relative z-20">
              <img
                src={port2}
                alt="port1"
                className=" myIMG w-full rounded-lg"
              />
              <div className="layout cursor-pointer absolute top-0 bottom-0 left-0 right-0 bg-[#1abc9c]/0 hover:bg-[#1abc9c]/80 duration-[.8s] flex justify-center items-center text-white/0 hover:text-white">
                <i class="fa-solid fa-plus text-9xl font-bold  "></i>
              </div>
            </div>
          </div>
          <div className="outer_card  rounded-lg w-full md:w-6/12 lg:w-4/12 ">
            <div className="inner_card relative z-20">
              <img
                src={port3}
                alt="port1"
                className=" myIMG w-full rounded-lg"
              />
              <div className="layout cursor-pointer absolute top-0 bottom-0 left-0 right-0 bg-[#1abc9c]/0 hover:bg-[#1abc9c]/80 duration-[.8s] flex justify-center items-center text-white/0 hover:text-white">
                <i className="fa-solid fa-plus text-9xl font-bold  "></i>
              </div>
            </div>
          </div>
          <div className="outer_card  rounded-lg w-full md:w-6/12 lg:w-4/12 ">
            <div className="inner_card relative z-20">
              <img
                src={port1}
                alt="port1"
                className=" myIMG w-full rounded-lg"
              />
              <div className="layout cursor-pointer absolute top-0 bottom-0 left-0 right-0 bg-[#1abc9c]/0 hover:bg-[#1abc9c]/80 duration-[.8s] flex justify-center items-center text-white/0 hover:text-white">
                <i className="fa-solid fa-plus text-9xl font-bold  "></i>
              </div>
            </div>
          </div>
          <div className="outer_card  rounded-lg w-full md:w-6/12 lg:w-4/12 ">
            <div className="inner_card relative z-20">
              <img
                src={port2}
                alt="port1"
                className=" myIMG w-full rounded-lg"
              />
              <div className="layout cursor-pointer absolute top-0 bottom-0 left-0 right-0 bg-[#1abc9c]/0 hover:bg-[#1abc9c]/80 duration-[.8s] flex justify-center items-center text-white/0 hover:text-white">
                <i className="fa-solid fa-plus text-9xl font-bold  "></i>
              </div>
            </div>
          </div>
          <div className="outer_card  rounded-lg w-full md:w-6/12 lg:w-4/12 ">
            <div className="inner_card relative z-20">
              <img
                src={port3}
                alt="port1"
                className=" myIMG w-full rounded-lg"
              />
              <div className="layout cursor-pointer absolute top-0 bottom-0 left-0 right-0 bg-[#1abc9c]/0 hover:bg-[#1abc9c]/80 duration-[.8s] flex justify-center items-center text-white/0 hover:text-white">
                <i className="fa-solid fa-plus text-9xl font-bold  "></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="layImg"
        className="hidden fixed top-0 left-0 right-0 bottom-0 bg-sky-400/25 z-50  justify-center items-center"
      >
        <img src={port2} className="w-6/12" id="imgFly"/>
      </div>
    </>
  );
}
