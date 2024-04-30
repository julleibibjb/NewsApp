import {
  faBars,
  faBasketball,
  faBell,
  faCheck,
  faCloud,
  faEarth,
  faHome,
  faMoneyBill,
  faMusic,
  faSearch,
  faUser,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState, useEffect } from "react";
import "../assets/styles/Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserAccess } from "../api/auth/Loginslice";
import Account from "./Containers/Account";
import Notification from "./Containers/Notification";
function Navbar() {
  const navigate = useNavigate();
  const { user, access } = useSelector(UserAccess);
  const [width, setWidth] = useState(null);
  const navref = useRef();
  const inputref = useRef();
  const seconfnavref = useRef();
  const formref = useRef();
  const accountref = useRef();
  const Noificationtref = useRef();
  const expand = () => {
    if (seconfnavref.current.style.height == "") {
      seconfnavref.current.style.height = "100vh";
    } else {
      seconfnavref.current.style.height = "";
    }
  };

  const responseExpand = () => {
    if (width < 1000 && seconfnavref.current.style.height == "100vh") {
      expand();
    }
  };

  useEffect(() => {
    if (width > 1000) {
      seconfnavref.current.style.height = "";
    }
  }, [width]);

  const expandAccount = () => {
    if (accountref.current.style.display == "") {
      accountref.current.style.display = "block";
    } else {
      accountref.current.style.display = "";
    }
  };

  const expandNotifcation = () => {
    if (Noificationtref.current.style.display == "") {
      Noificationtref.current.style.display = "block";
    } else {
      Noificationtref.current.style.display = "";
    }
  };

  function updateWindowSize() {
    if (document.body && document.body.offsetWidth) {
      setWidth(document.body.offsetWidth);
    }
    if (
      document.compatMode == "CSS1Compat" &&
      document.documentElement &&
      document.documentElement.offsetWidth
    ) {
      setWidth(document.documentElement.offsetWidth);
    }
    if (window.innerWidth) {
      setWidth(window.innerWidth);
    }
  }

  window.onresize = function (event) {
    updateWindowSize();
  };

  const expandSearch = () => {
    if (formref.current.style.height == "") {
      formref.current.style.height = "45px";
      inputref.current.placeholder = "search";
    } else {
      formref.current.style.height = "";
      inputref.current.placeholder = "";
    }
  };

  return (
    <div className="NAVcontainer">
      <div className="navbar">
        <nav className="nav">
          <div
            className="logo"
            onClick={() => {
              responseExpand();
              navigate("/");
            }}
          >
            <h1>
              Info<span style={{ color: "black" }}>Stream</span>
            </h1>
          </div>
          {access ? (
            <div className="accounts">
              <FontAwesomeIcon
                className="search"
                icon={faSearch}
                onClick={expandSearch}
              />
              <div className="notificationsbell">
                <FontAwesomeIcon
                  className="search"
                  icon={faBell}
                  onClick={expandNotifcation}
                />
                <Notification
                  Noificationtref={Noificationtref}
                  expandNotifcation={expandNotifcation}
                />
              </div>
              <div className="useraccount">
                <FontAwesomeIcon
                  onClick={expandAccount}
                  className="search"
                  icon={faUser}
                />
                <Account accountref={accountref} />
              </div>

              <FontAwesomeIcon
                className="bars"
                icon={faBars}
                onClick={expand}
              />
            </div>
          ) : (
            <div className="accounts">
              <FontAwesomeIcon
                className="search"
                icon={faSearch}
                onClick={expandSearch}
              />
              <button
                onClick={() => navigate("/account/register")}
                className="join"
                style={{ background: "black" }}
              >
                sign up
              </button>
              <button
                onClick={() => navigate("/account/login")}
                className="join"
              >
                {" "}
                sign in{" "}
              </button>
              <FontAwesomeIcon
                className="bars"
                icon={faBars}
                onClick={expand}
              />
            </div>
          )}
        </nav>

        <SearchBar
          inputref={inputref}
          formref={formref}
          expandSearch={expandSearch}
        />
      </div>
      <div className="secondNav" ref={seconfnavref}>
        <div className="spacing">
          <div className="routes">
            <ul>
              <li>
                <FontAwesomeIcon className="search show" icon={faHome} />
                <NavLink
                  onClick={responseExpand}
                  to="/"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "red",
                        }
                      : { color: "white" }
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <FontAwesomeIcon className="search show" icon={faEarth} />
                <NavLink
                  onClick={responseExpand}
                  to="/world"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "red",
                        }
                      : { color: "white" }
                  }
                >
                  world
                </NavLink>
              </li>
              <li>
                <FontAwesomeIcon className="search show" icon={faMoneyBill} />
                <NavLink
                  onClick={responseExpand}
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "red",
                        }
                      : { color: "white" }
                  }
                  to="/economy"
                >
                  economy
                </NavLink>
              </li>
              <li>
                <FontAwesomeIcon className="search show" icon={faCheck} />
                <NavLink
                  onClick={responseExpand}
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "red",
                        }
                      : { color: "white" }
                  }
                  to="/bussiness"
                >
                  Bussiness
                </NavLink>
              </li>
              <li>
                <FontAwesomeIcon className="search show" icon={faBasketball} />
                <NavLink
                  onClick={responseExpand}
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "red",
                        }
                      : { color: "white" }
                  }
                  to="sports"
                >
                  Sports
                </NavLink>
              </li>
              <li>
                <FontAwesomeIcon className="search show" icon={faCloud} />
                <NavLink
                  onClick={responseExpand}
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "red",
                        }
                      : { color: "white" }
                  }
                  to="/weather"
                >
                  Weather
                </NavLink>
              </li>
              <li>
                <FontAwesomeIcon className="search show" icon={faMusic} />
                <NavLink
                  onClick={responseExpand}
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "red",
                        }
                      : { color: "white" }
                  }
                  to="/entertainment"
                >
                  Entertainment
                </NavLink>
              </li>
              <li>
                <FontAwesomeIcon
                  className="search show"
                  icon={faUserAstronaut}
                />
                <NavLink
                  onClick={responseExpand}
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "red",
                        }
                      : { color: "white" }
                  }
                  to="/politics"
                >
                  Politics
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="socials ">
            <img src="https://www.nicepng.com/png/detail/825-8255248_follow-us-on-facebook-light-blue-facebook-icon.png" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWjjTbwo8IDKQ_ORyURSgJbrCNtpNiRHEcARsufTEDN5nIScQRIlVqZyde5qPfnIRqeyY&usqp=CAU" />
            <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" />
            <img src="https://img.freepik.com/premium-vector/modern-logo-instagram-icon-white-background_578229-126.jpg?w=2000" />
            <div className="options">
              <div className="">
                <button
                  className="buttonB"
                  onClick={() => {
                    responseExpand();
                    navigate("/account/register");
                  }}
                >
                  sign up
                </button>
                <button
                  onClick={() => {
                    responseExpand();
                    navigate("/account/login");
                  }}
                  className="buttonA"
                >
                  {" "}
                  sign in{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

const SearchBar = ({ inputref, formref, expandSearch }) => {
  const [search, setsearch] = useState("");
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    navigate("/search", { state: { query: search } });
    expandSearch();
  };

  return (
    <div className="searchbar">
      <form className="searchform" ref={formref} onSubmit={handlesubmit}>
        <input
          name="search"
          type={"text"}
          ref={inputref}
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
      </form>
    </div>
  );
};
