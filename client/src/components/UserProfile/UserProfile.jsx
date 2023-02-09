import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserById } from "../../redux/actions";
import noUser from "../../assets/img/noUser.jpg";
import style from "./UserProfile.module.css";
import NavBarDetails from "../NavBarDetails/NavBarDetails";
import Footer from "../Footer/Footer";

const UserProfile = () => {
    const dispatch = useDispatch();
    const userDetail = useSelector((state) => state.userDetail);
    const infoUser = (JSON.parse(localStorage.getItem("user")))[0].email;

    useEffect(() => {
        if(infoUser) {
            dispatch(getUserById(infoUser))
        }
    }, [])

    return (
        <div>
            <NavBarDetails/>
            <div className={style.titleContainer}>
                <h2 className={style.blue}>User</h2>
                <h2 className={style.red}>Profile</h2>
            </div>

            <div className={style.mainContainer}>
                <div className={style.container}>
                    <img id={style.img} src={userDetail.img || noUser} alt=''/>

                    <div className={style.subContainer}>
                        <h6>User Name:</h6>
                        <p>{userDetail.name}</p>
                        <h6>Email:</h6>
                        <p>{userDetail.email}</p>
                        <h6>Address:</h6>
                        <p>{userDetail.address || 'No data'}</p>
                        <h6>Phone Number:</h6>
                        <p>{userDetail.phone || 'No data'}</p> 
                        <Link to={'/userEdit'}>
                            <button className={style.createHotel}>Edit Information</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Link to={'/reservationHistory'} id={style.link}>Reservation History</Link>

            <Footer/>
        </div>
    )
};

export default UserProfile;