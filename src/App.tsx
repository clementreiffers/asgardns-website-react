import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./Components/Banner";
import Home from "./Pages/Home";
import { AboutUs } from "./Pages/AboutUs";
import { ROUTES } from "./Constants";
import Footer from "./Components/Footer";

const App = () => (
  <>
    <BrowserRouter>
      <Banner />
      <Routes>
        <Route path={ROUTES.homepage} element={<Home />} />
        <Route path={ROUTES.aboutus} element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);
export default App;
