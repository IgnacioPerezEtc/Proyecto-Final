import React, { useState } from 'react';
import room from '../../assets/img/room.png';
import lobby from '../../assets/img/lobby.png';
import reception from '../../assets/img/reception.png';
import dining from '../../assets/img/dining.png';
import pool from '../../assets/img/pool.png';
import spa from '../../assets/img/spa.png';
import './Galery.css';

const Galery = () => {
    const [image, setImage] = useState('All');

    function handleImage(e) {
        setImage(e.target.value)
    };

    return (
        <div className='container'>
            <div className='subcontainer'>
                <div className='titleContainer'>
                    <p className='black'>Our</p>
                    <h1 className='red'>Gallery</h1>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor viverra</p>
                <p>parturient diam sagittis nec cras.</p>
            </div>

            <div className='buttonContainer'>
                <button value='All' onClick={e => handleImage(e)}>All</button>
                <button value={room} onClick={e => handleImage(e)}>Room</button>
                <button value={lobby} onClick={e => handleImage(e)}>Lobby</button>
                <button value={reception} onClick={e => handleImage(e)}>Reception</button>
                <button value={dining} onClick={e => handleImage(e)}>Dining</button>
                <button value={pool} onClick={e => handleImage(e)}>Pool</button>
                <button value={spa} onClick={e => handleImage(e)}>Spa</button>
            </div>

            {image === 'All'? (
                <div className='imgContainer'>
                    <img src={reception} alt=''/>
                    <img src={dining} alt=''/>
                    <img src={spa} alt=''/>
                    <img src={room} alt=''/>
                    <img src={pool} alt=''/>
                    <img src={lobby} alt=''/>
                </div>
            ) : (<div className='imgContainer2'>
                    <img src={image} alt=''/>
                </div>
            )}
        </div>
    )
};

export default Galery;