import React from "react";
import { useEffect, useState } from "react";
import style from './About.module.css'
export default function About() {
    const [counter, setCounter] = useState(0);
    
    useEffect(() => {
        
        return () => {
            
        }
    }, []);
    

    return (
      <>
        <div className="bg-[#1abc9c] ">
          <div className=" container mx-auto md:mt-12 py-24">
            <div className="row m-16">
              <div className=" flex flex-col items-center mb-10  w-full">
                <h2 className="md:text-5xl text-2xl  font-bold text-white uppercase">
                  about component
                </h2>
                <div className="flex flex-row  justify-center mt-4">
                  <div className=" w-24 h-[4px] bg-white mt-2 mr-2"></div>
                  <i className="fa-solid fa-star text-white"></i>
                  <div className="w-24 h-[4px]  mt-2 ml-2 bg-white"></div>
                </div>
              </div>

              <div className=" w-full md:w-6/12 text-white p-4 ">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className=" w-full md:w-6/12 text-white p-4">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
