import React from "react";
import { useSelector } from "react-redux";
const Error = () => {
  const error = useSelector((state) => state.error);
  return (
    <div>
      <p>tamos teniendo un error</p>
      <div>{error}</div>
    </div>
  );
};
export default Error;
