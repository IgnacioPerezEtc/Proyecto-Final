import React from "react";
import { useSelector } from "react-redux";
const Error = () => {
  const error = useSelector((state) => state.error);
  return <div>{error}</div>;
};
export default Error;