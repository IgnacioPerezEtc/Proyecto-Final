import React from "react";
import style from "./LandingPage.module.css";
import Footer from "../Footer/Footer.jsx"

import HotelsCards from "../HotelsCards/HotelsCards"



const LandingPage = () => {

    const hotels = [
        {
            img: 'https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg',
            title: 'Family Room',
            price: 400,
            guest: 8,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis est quos consequuntur! Nulla cum amet, quaerat blanditiis quo maiores sit soluta, facere, recusandae doloremque in veniam repellat. Quasi, libero?',
        },
        {
            img: 'https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg',
            title: 'Family Room',
            price: 400,
            guest: 9,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis est quos consequuntur! Nulla cum amet, quaerat blanditiis quo maiores sit soluta, facere, recusandae doloremque in veniam repellat. Quasi, libero?',
        },
        {
            img: 'https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg',
            title: 'Family Room',
            price: 400,
            guest: 10,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis est quos consequuntur! Nulla cum amet, quaerat blanditiis quo maiores sit soluta, facere, recusandae doloremque in veniam repellat. Quasi, libero?',
        },
        {
            img: 'https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg',
            title: 'Family Room',
            price: 400,
            guest: 11,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis est quos consequuntur! Nulla cum amet, quaerat blanditiis quo maiores sit soluta, facere, recusandae doloremque in veniam repellat. Quasi, libero?',
        },
        {
            img: 'https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg',
            title: 'Family Room',
            price: 400,
            guest: 12,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis est quos consequuntur! Nulla cum amet, quaerat blanditiis quo maiores sit soluta, facere, recusandae doloremque in veniam repellat. Quasi, libero?',
        },
        {
            img: 'https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg',
            title: 'Family Room',
            price: 400,
            guest: 13,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis est quos consequuntur! Nulla cum amet, quaerat blanditiis quo maiores sit soluta, facere, recusandae doloremque in veniam repellat. Quasi, libero?',
        },
        {
            img: 'https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg',
            title: 'Family Room',
            price: 400,
            guest: 14,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis est quos consequuntur! Nulla cum amet, quaerat blanditiis quo maiores sit soluta, facere, recusandae doloremque in veniam repellat. Quasi, libero?',
        },
        {
            img: 'https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg',
            title: 'Family Room',
            price: 400,
            guest: 15,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis est quos consequuntur! Nulla cum amet, quaerat blanditiis quo maiores sit soluta, facere, recusandae doloremque in veniam repellat. Quasi, libero?',
        }
    ];

    return (
        <div>
            <HotelsCards hotels={hotels} />
            <Footer />
        </div>
    );
};
export default LandingPage;
