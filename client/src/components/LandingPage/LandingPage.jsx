import React from "react";
import style from "./LandingPage.module.css";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header";
import Services from "../Services/Services.jsx";
import Galery from "../Galery/Galery";

const LandingPage = () => {
  return (
    <div>
      <Header /> 
      <Services />
      <Galery />
      <Footer />
    </div>
  );
};
export default LandingPage;
