import React from "react";
import { useEffect, useState } from "react";
import style from './Footer.module.css'
export default function Footer() {
    const [counter, setCounter] = useState(0);
    
    useEffect(() => {
        
        return () => {
            
        }
    }, []);
    
  

    return (
      <>
        <div className="bg-[#2c3e50]  text-white   text-center">
          <div className="container mx-auto p-8 md:py-20">
            <div className="row">
              <div className="w-full md:w-4/12 text-center m-3 md:m-0">
                <h3 className="my-3 text-4xl font-semibold">LOCATION</h3>
                <p className="my-3">2215 John Daniel Drive</p>
                <p className="my-3">Clark, MO 65243</p>
              </div>
              <div className="w-full md:w-4/12 text-center m-3 md:m-0">
                <h3 className="my-3 text-4xl font-semibold">AROUND THE WEB</h3>
                <div className="flex gap-3 justify-center my-3">
                  <span className=" flex size-10 p-3 border-2 rounded-full  justify-center">
                    <i className="fa-brands fa-facebook"></i>
                  </span>
                  <span className=" flex size-10 p-3 border-2 rounded-full  justify-center">
                    <i className="fa-brands fa-twitter"></i>
                  </span>
                  <span className=" flex size-10 p-3 border-2 rounded-full  justify-center">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </span>
                  <span className=" flex size-10 p-3 border-2 rounded-full  justify-center">
                    <i className="fa-solid fa-globe"></i>
                  </span>
                </div>
              </div>
              <div className=" w-full md:w-4/12 m-3 md:m-0">
                <h3 className="my-3 text-4xl font-semibold">
                  ABOUT FREELANCER
                </h3>
                <p className="my-3">
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#1a252f] p-8 text-white  w-full text-center">
          Copyright © Your Website 2021
        </div>
      </>
    );
}
