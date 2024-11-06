import React from "react";
// import axios from "axios";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context";
import { GrGoogle } from "react-icons/gr";
import Container from "../../Container";
import "./auth.css";

const Login = () => {
  const PATH = process.env.REACT_APP_PATH;
  const Navigate = useNavigate();
  const { user, users, setLogged, setUser } = useContext(AppContext);
  const HandleLogin = () => {
    if (
      users.find((u) => u.email === user.email && u.password === user.password)
    ) {
      setLogged(true);
      const current_user = users.find((u) => u.email === user.email);
      setUser((prev) => ({ ...prev, name: current_user.name }));
      Navigate(`${PATH}/`);
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <Container className="card border-0 rounded-0 py-4 login">
      <h1 className="card-title text-center fw-bolder m-0">Sign In</h1>
      <div className="card-body d-flex justify-content-center align-items-center flex-column">
        <p className="my-3">
          <label htmlFor="email" className="label form-label d-block">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </p>
        <p className="mt-3">
          <label htmlFor="password" className="label form-label d-block">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </p>
        <p className="m-0">
          <button
            type="button"
            className="btn btn-outline w-100 fw-bold"
            onClick={HandleLogin}
          >
            Login
          </button>
        </p>
        <hr className="w-25 m-0" />
        or
        <p>
          <button
            type="button"
            className="btn btn-outline w-100 fw-bold"
            onClick={() => Navigate(`${PATH}/gauth`)}
          >
            Sign in with <GrGoogle className="fs-5 ms-1" />
            oogle
          </button>
        </p>
        <h6 className="fw-bold m-0">
          Create an account ??{" "}
          <Link
            className="link link-danger link-offset-1-hover px-2 fw-bold link-underline-opacity-0-hover"
            to={`${PATH}/register`}
          >
            Sign up
          </Link>
        </h6>
      </div>
    </Container>
  );
};

export default Login;
