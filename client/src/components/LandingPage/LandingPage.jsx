import React from "react";
import style from "./LandingPage.module.css";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header";
import Services from "../Services/Services.jsx";
import RoomsCards from "../RoomsCards/RoomsCards"
 

const LandingPage = () => {
  return (
    <div>
      <Header /> 
      <RoomsCards />
      <Services />
      <Footer />
    </div>
  );
};
export default LandingPage;
