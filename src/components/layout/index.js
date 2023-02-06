import React from "react";
import NavBar from "./nav";

const Layout = (props) => {
  return (
    <>
      <NavBar />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
