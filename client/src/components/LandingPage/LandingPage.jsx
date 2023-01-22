import React from "react";
import style from "./LandingPage.module.css";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header";
import Services from "../Services/Services.jsx";
import HotelsCards from "../HotelsCards/HotelsCards"
 

const LandingPage = () => {
  return (
    <div>
      <Header /> 
      <HotelsCards />
      <Services />
      <Footer />
    </div>
  );
};
export default LandingPage;
