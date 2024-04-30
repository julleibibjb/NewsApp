import { faGear, faGears, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import defaultimage from "../../../src/default.jpg";
import { logout, UserAccess } from "../../api/auth/Loginslice";
import toast, { Toaster } from "react-hot-toast";

function Account({ accountref }) {
  const { access, user } = useSelector(UserAccess);
  const dispatch = useDispatch();

  const errorNotify = () => toast.success("succesfully logged out");
  const logoutuser = () => {
    localStorage.clear();
    dispatch(logout());
    errorNotify();
  };

  return (
    <div ref={accountref} className="Account">
      <div className="logoutbutton">
        <h3 style={{ margin: "0" }}>{access ? user.username : null}</h3>
        <p style={{ margin: "0" }}>{access ? user.email : null}</p>
      </div>
      <div className="logoutbutton">
        <button>
          <FontAwesomeIcon icon={faGear} />
          settings
        </button>
      </div>
      <div className="logoutbutton">
        <button onClick={logoutuser}>
          <FontAwesomeIcon icon={faLock} />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Account;
