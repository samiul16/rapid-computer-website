"use client";

import React from "react";
import Hero from "./Hero";
// import TopBarTwo from "./TopBarTwo";
// import Navbar from "./Navbar";
import NavBarWithSearchBar from "./NavBarWithSearchBar";

const Header = () => {
  return (
    <>
      {/* <TopBarTwo /> */}

      {/* <Navbar /> */}
      <NavBarWithSearchBar />

      <Hero />
    </>
  );
};

export default Header;
