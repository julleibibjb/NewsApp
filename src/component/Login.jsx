import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../assets/styles/Login.css";
import {
  FetchAccesToken,
  RefreshAccessToken,
  UserAccess,
} from "../api/auth/Loginslice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const { access, AuthToken, credentials } = useSelector(UserAccess);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlesubmission = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    dispatch(FetchAccesToken({ username, password }));
  };
  useEffect(() => {
    if (access) {
      sucessNotify();
      navigate("/");
    } else if (credentials) {
      errorNotify();
    }
  }, [access, credentials]);
  const sucessNotify = () => toast.success("Succesfully logged in!");
  const errorNotify = () => toast.error("email or password incorrect");

  return (
    <>
      <div className="Login">
        <div className="loginContainer">
          <div className="card">
            <div className="answer">
              {credentials ? (
                <p>email or password incorrect</p>
              ) : (
                <h3>
                  <span style={{ color: "blue" }}>Info</span>Stream
                </h3>
              )}
            </div>
            <form onSubmit={handlesubmission}>
              <div className="in">
                <input
                  className="loginput"
                  placeholder="username"
                  type="text"
                  name="username"
                  required={true}
                />
              </div>
              <div className="out">
                <input
                  className="loginput"
                  placeholder="password"
                  type="text"
                  name="password"
                  required={true}
                />
              </div>
              <div className="forgot">
                <input type="checkbox" className="tick" />

                <p>forgot password</p>
              </div>
              <div>
                <button type="submit" className="loginbutton">
                  Login
                </button>
              </div>
              <div className="sighn">
                <p>
                  dont have an account{" "}
                  <Link to="/account/register">sighup</Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
