import React from "react";
import { useEffect, useState } from "react";
import style from "./Layout.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
export default function Layout() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-12">
        <Outlet />
      </div>
      <Footer/></>
  )
}
