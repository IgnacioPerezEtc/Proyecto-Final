import React from "react";
import style from './UserEdit.module.css';

const UserEdit = () => {
    return(
        <div className={style.mainContainer}>
            <form id={style.formContainer}>
                <h1>Edit your information</h1> 
               <label className={style.form}>
                    <h4>User Name:</h4>            
                </label> 
                <input className={style.form}/>

                <label className={style.form}>
                    <h4>Address:</h4>            
                </label> 
                <input className={style.form}/>

                <label className={style.form}>
                    <h4>Phone Number:</h4>            
                </label> 
                <input className={style.form}/>

                <button id={style.button} type="submit">Save Changes</button>
            </form>
        </div>
    )
};

export default UserEdit;