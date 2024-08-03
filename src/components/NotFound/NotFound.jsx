import React from "react";
import { useEffect, useState } from "react";
import style from "./NotFound.module.css";
export default function NotFound() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <>
        <div className="justify-center flex items-center bg-stone-600 text-lime-500 md:p-32 p-0 text-3xl  md:text-5xl h-screen">
          <span className="font-bold">404 : Not found Page</span>
        </div>
      </>
    </>
  );
}
