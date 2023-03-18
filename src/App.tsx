import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./Components/Banner";
import Home from "./Pages/Home";
import { AboutUs } from "./Pages/AboutUs";

const App = () => (
  <>
    <BrowserRouter>
      <Banner />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about-us"} element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
