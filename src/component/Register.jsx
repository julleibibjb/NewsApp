import React from "react";
import "../assets/styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Register() {
  const navigate = useNavigate();
  const sucessNotify = () => toast.success("Account Succesfully created");

  const createUser = async (e) => {
    e.preventDefault();
    let url = "http://127.0.0.1:8000/register/";
    let response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();
    if (response.ok) {
      navigate("/account/login");
      sucessNotify();
    }
  };

  return (
    <div className="Login">
      <div className="loginContainer">
        <div className="card">
          <div className="answer">
            <h3>
              <span style={{ color: "blue" }}>Info</span>Stream
            </h3>
          </div>
          <form onSubmit={(e) => createUser(e)}>
            <div className="in">
              <input
                className="loginput"
                placeholder="username"
                name="username"
                required={true}
              />
            </div>
            <div className="in">
              <input
                className="loginput"
                placeholder="email address"
                name="email"
                required={true}
              />
            </div>
            <div className="out">
              <input
                className="loginput"
                placeholder="password"
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
                sighup
              </button>
            </div>
            <div className="sighn">
              <p>
                already have an account <Link to="/account/login">login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
