import React from "react";
import style from "./LandingPage.module.css";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header";
import Services from "../Services/Services.jsx";
import Galery from "../Galery/Galery";

import Commentary from "../Commentary/Commentary";
import Home from "../Home/Home";
import Hotels from "../Hotels/Hotels";
import RoomsCards from "../RoomsCards/RoomsCards";

const LandingPage = (props) => {
  return (
    <div>
      <Header location={props.location} />
      <RoomsCards />
      <Services />
      <Galery />
      <Commentary />
      <Footer />
    </div>
  );
};
export default LandingPage;
