import React, { useEffect, useState } from "react";
import "../assets/styles/Home.css";
import Loader from "./Spinner";
import { Fake_news } from "./Fake";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftRotate } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import { useGetAllNewsQuery } from "../api/NewSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setcurrentNews } from "../api/currentNews";
import Frontpagecontainer from "./Containers/Frontpagecontainer";
import Homecontainer from "./Containers/Homecontainer";
import ThirdContainer from "./Containers/ThirdContainer";
import Lastcontainer from "./Containers/Lastcontainer";
import toast, { Toaster } from "react-hot-toast";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

function Home() {
  const [Done, setDone] = useState(false);
  const [Value, setValue] = useState([]);
  const { data, isLoading, error } = useGetAllNewsQuery("politics");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setarticle = (title, poster, description, content, date) => {
    dispatch(setcurrentNews(title, poster, description, content, date));
    navigate(`/world/${title}`);
  };

  const getDate = (string) => {
    const date = new Date(string);
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="Home">
        <Frontpagecontainer data={data} />
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1>featured News</h1>
          <hr style={{ width: "80%", height: "1px", fontWeight: "bolder" }} />
        </div>
        <Homecontainer data={data} />
        <ThirdContainer data={data} />
        <Lastcontainer data={data} />
      </div>
      <Footer />
    </>
  );
}

export default Home;
