import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Main = () => {
  return (
    <div
      className='d-flex flex-column justify-content-between'
      style={{ minHeight: "100vh" }}
    >
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
