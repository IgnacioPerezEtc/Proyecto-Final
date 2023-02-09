import React from "react";
import style from "./Users.module.css";
import statusDisabled from "../../../assets/icons/statusDisabled.png";
import statusEnable from "../../../assets/icons/statusEnabled.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../redux/actions";
import { useEffect } from "react";

const Users = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  console.log(users)
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div id="users" className={style.containerPpalUsers}>
      <h1 className={style.h1}>Users</h1>

      <div className={style.container}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr className={style.trBody} key={user.email}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.admin === true ? "Admin" : "User"}</td>
                    <td>{user.address}</td>
                    <td>{user.phone}</td>
                  </tr>
                );
              })}
            </tbody>

        </table>
      </div>
    </div>
  );
};

export default Users;
