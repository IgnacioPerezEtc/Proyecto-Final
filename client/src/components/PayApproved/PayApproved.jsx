import React, { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Error from "../Error/Error.jsx";
import { getRoomById, sendEmail } from "../../redux/actions";
import style from './PayApproved.module.css';

const PayApproved = () => {
    const htmlForm = useRef();
    const dispatch = useDispatch();
    const roomDetail = useSelector((state) => state.roomDetail);
    const error = useSelector((state) => state.error);
    const [params] = useSearchParams();
    const status = params.get("collection_status");
    const infoUser = JSON.parse(localStorage.getItem("user"));
    const info = JSON.parse(localStorage.getItem(infoUser[0].email));
    const infoDays = JSON.parse(
        localStorage.getItem(`${infoUser[0].email}-days`)
    );
    let data = {}
    if (roomDetail.hasOwnProperty("hotel")) {

        data = {
            roomId: roomDetail.id,
            userEmail: infoUser[0].email,
            userName: infoUser[0].name,
            hotelName: roomDetail.hotel.name,
            people: parseInt(info[0].adults) + parseInt(info[0].children),
            adults: parseInt(info[0].adults),
            children: parseInt(info[0].children),
            days: infoDays,
            typeRoom: roomDetail.numRoom,
            startDate: info[0].check_in,
            endDate: info[0].check_out,
            location: roomDetail.hotel.location,
            total: parseInt(roomDetail.value) * parseInt(infoDays)
        }
    }

    useEffect(() => {
        if (info) {
            dispatch(getRoomById(info[0].id));
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault()
        sendEmail(data, htmlForm.current)
    }

    if (status == "approved") {
        return (
            <div>
                {error ? <Error /> : false}
                {roomDetail.hasOwnProperty("hotel") &&
                    roomDetail.id === parseInt(info[0].id) ? (
                    <div>
                        <form ref={htmlForm} onSubmit={(event) => handleSubmit(event)}>
                            <h1 className={style.title}>Successful Payment</h1>
                            <div >
                                <label htmlFor="userName">Name:</label>
                                <input type="text" name="userName" id="userName" defaultValue={data.userName}  readOnly/>
                            </div>
                            <div >
                                <label htmlFor="hotelName">Hotel:</label>
                                <input type="text" name="hotelName" id="hotelName" defaultValue={data.hotelName}  readOnly/>
                            </div>
                            <div >
                                <label htmlFor="location">Location:</label>
                                <input type="text" name="location" id="location" defaultValue={data.location}  readOnly/>
                            </div>
                            <div >
                                <label htmlFor="people">People:</label>
                                <input type="text" name="people" id="people" defaultValue={data.people}  readOnly/>
                            </div>
                            <div >
                                <label htmlFor="adults">Adults:</label>
                                <input type="text" name="adults" id="adults" defaultValue={data.adults}  readOnly/>
                            </div>
                            <div >
                                <label htmlFor="children">Children:</label>
                                <input type="text" name="children" id="children" defaultValue={data.children}  readOnly/>
                            </div>
                            <div >
                                <label htmlFor="days">Days:</label>
                                <input type="text" name="days" id="days" defaultValue={data.days}  readOnly/>
                            </div>
                            <div >
                                <label htmlFor="startDate">Checking:</label>
                                <input type="text" name="startDate" id="startDate" defaultValue={data.startDate}  readOnly/>
                            </div>
                            <div >
                                <label htmlFor="endDate">Checkout:</label>
                                <input type="text" name="endDate" id="endDate" defaultValue={data.endDate}  readOnly/>
                            </div>
                            <div >
                                <label htmlFor="total">Total:</label>
                                <input type="text" name="total" id="total" defaultValue={data.total}  readOnly/>
                            </div>
                            <div >
                                <label htmlFor="userEmail">Email:</label>
                                <input type="text" name="userEmail" id="userEmail" defaultValue={data.userEmail}  readOnly/>
                            </div>

                            <input className={style.createHotel} type="submit" id="button" defaultValue="Send Email"/>
                        </form>
                    </div>
                ) :
                    <div>
                        <h1 className={style.loading}>Loading...</h1>
                    </div>}
            </div>
        )

    } else {
        return (
            <div>
                <h1>Adios</h1>
            </div>
        )
    }

};

export default PayApproved;