import React from "react";
import style from "./Users.module.css";
import enable from "../../../assets/icons/enable.png";
import disable from "../../../assets/icons/disable.png";
import statusDisabled from "../../../assets/icons/statusDisabled.png";
import statusEnable from "../../../assets/icons/statusEnabled.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../redux/actions";
import { useEffect } from "react";

const Users = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div id="users" className={style.containerPpalUsers}>
      <h1 className={style.h1}>Users</h1>

      <div className={style.containerUsers}>
        <table className={style.table}>
          <thead>
            <tr className={style.trHead}>
              <th>Name</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Status</th>
              <th>Enable</th>
              <th>Disable</th>
            </tr>
          </thead>
          {users.hasOwnProperty("name") ? (
            <tbody>
              {users?.map((user) => {
                return (
                  <tr className={style.trBody} key={user.email}>
                    <th>{user.name}</th>
                    <th>{user.email}</th>
                    <th>{user.admin === true ? "Admin" : "User"}</th>
                    <th>
                      {user.blocked === true ? (
                        <img
                          src={statusDisabled}
                          alt=""
                          className={style.imgEnaDis}
                        />
                      ) : (
                        <img
                          src={statusEnable}
                          alt=""
                          className={style.imgEnaDis}
                        />
                      )}
                    </th>
                    <th>
                      <button className={style.buttonEnab}>
                        <img src={enable} alt="" className={style.imgEnaDis} />
                      </button>
                    </th>
                    <th>
                      {" "}
                      <button className={style.buttonEnab}>
                        <img src={disable} alt="" className={style.imgEnaDis} />
                      </button>{" "}
                    </th>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <div>
              <h1>NO tiene usuarios</h1>
            </div>
          )}
        </table>
      </div>
    </div>
  );
};

export default Users;
