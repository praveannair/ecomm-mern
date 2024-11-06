import axios from "axios";
import React, { useEffect, useState } from "react";
import { Lia500Px } from "react-icons/lia";

export default function Temp() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/users/allUsers").then((res) => {
      setusers(res.data);
    });
  }, []);
  console.log(users);
  return <div>{users && users.map((user) => <li>{user.name} - {user.email} - {user.role}</li>)}</div>;
}
