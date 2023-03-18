import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./Components/Banner";
import Home from "./Pages/Home";
import { Download } from "./Pages/Download";
import { Pricing } from "./Pages/Pricing";
import { AboutUs } from "./Pages/AboutUs";

const App = () => (
  <>
    <BrowserRouter>
      <Banner />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/download"} element={<Download />} />
        <Route path={"/princing"} element={<Pricing />} />
        <Route path={"/about-us"} element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
