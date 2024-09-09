// import React from 'react'

import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Cart from "../components/Cart";
import ScrollToTop from "../components/ScrollTop";

function RootLayout() {
  return (
    <>
      <Header />
      <section className="font-custom">
      <Cart />
      </section>
      <Outlet />
      <ScrollToTop />
    </>
  );
}

export default RootLayout;
