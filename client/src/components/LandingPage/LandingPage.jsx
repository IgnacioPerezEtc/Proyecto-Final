import React from "react";
import style from "./LandingPage.module.css";
import Footer from "../Footer/Footer.jsx"

import HotelsCards from "../HotelsCards/HotelsCards"



const LandingPage = () => {
    return (
        <div>
            <HotelsCards />
            <Footer />
        </div>
    );
};
export default LandingPage;
