import {
  faBars,
  faBell,
  faHome,
  faMessage,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState, useEffect } from "react";
import "../assets/styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [width, setWidth] = useState(null);
  const navref = useRef();
  const inputref = useRef();
  const expand = () => {
    if (navref.current.style.display == "none") {
      navref.current.style.display = "block";
    } else {
      navref.current.style.display = "none";
    }
  };

  useEffect(() => {
    if (width < 913) {
      navref.current.style.display = "none";
    }
  }, [width]);

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
    if (inputref.current.style.height == "0px") {
      inputref.current.style.height = "40px";
      inputref.current.style.border = "solid black 2px";
      inputref.current.style.borderLeft = "none";
      inputref.current.style.borderRight = "none";
      inputref.current.style.borderTop = "none";
      inputref.current.style.borderTop = "none";
      inputref.current.placeholder = "search";
    } else {
      inputref.current.style.height = "0px";
      inputref.current.style.border = "none";
      inputref.current.placeholder = "";
    }
  };

  return (
    <div className="navbar">
      <nav className="nav">
        <div className="logo">
          <h1>InfoStream</h1>
        </div>
        <div className="routes">
          <ul>
            <li>
              <Link>routes</Link>
            </li>
            <li>
              <Link>routes</Link>
            </li>
            <li>
              <Link>routes</Link>
            </li>
            <li>
              <Link>routes</Link>
            </li>
            <li>
              <Link>routes</Link>
            </li>
            <li>
              <Link>routes</Link>
            </li>
            <li>
              <Link>routes</Link>
            </li>
          </ul>
        </div>
        <div className="accounts">
          <FontAwesomeIcon
            className="search"
            icon={faSearch}
            onClick={expandSearch}
          />
          <button className="join"> sign in </button>
          <FontAwesomeIcon className="bars" icon={faBars} onClick={expand} />
        </div>
      </nav>
      <Responsivenav navref={navref} />
      <SearchBar inputref={inputref} />
    </div>
  );
}

export default Navbar;

const SearchBar = ({ inputref }) => {
  return (
    <div className="searchbar">
      <input type={"text"} ref={inputref} />
    </div>
  );
};

const Responsivenav = ({ navref }) => {
  return (
    <div ref={navref} className="mobilenav">
      <div className="logo mobilelogo">
        <h1>InfoStream</h1>
        <FontAwesomeIcon className="mobilesearch" icon={faSearch} />
      </div>
      <div className="mobileroutes">
        <ul>
          <li>
            <FontAwesomeIcon className="search" icon={faHome} />
            <Link>routes</Link>
          </li>
          <li>
            <FontAwesomeIcon className="search" icon={faHome} />
            <Link>routes</Link>
          </li>
          <li>
            <FontAwesomeIcon className="search" icon={faHome} />
            <Link>routes</Link>
          </li>
          <li>
            <FontAwesomeIcon className="search" icon={faHome} />
            <Link>routes</Link>
          </li>
          <li>
            <FontAwesomeIcon className="search" icon={faHome} />
            <Link>routes</Link>
          </li>
          <li>
            <FontAwesomeIcon className="search" icon={faHome} />
            <Link>routes</Link>
          </li>
          <li>
            <FontAwesomeIcon className="search" icon={faHome} />
            <Link>routes</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
