import React, { useContext } from "react";
import { AppContext } from "../../context";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const PATH = process.env.REACT_APP_PATH;
  const Navigate = useNavigate();
  const { setLogged, setUser } = useContext(AppContext);
  setLogged(false);
  setUser((prev) => ({ ...prev, name: "", email: "" }));
  Navigate(`${PATH}/login`);
  return <div></div>;
};

export default Logout;
