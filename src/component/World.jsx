import React from "react";
import "../assets/styles/Home.css";
import Loader from "./Spinner";
import { Fake_news } from "./Fake";
import { useGetAllNewsQuery } from "../api/NewSlice";
import { useNavigate } from "react-router-dom";
import { currentArticle, setcurrentNews } from "../api/currentNews";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import ThirdContainer from "./Containers/ThirdContainer";
import Frontpagecontainer from "./Containers/Frontpagecontainer";
import Lastcontainer from "./Containers/Lastcontainer";
import Homecontainer from "./Containers/Homecontainer";
function World() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, isLoading } = useGetAllNewsQuery("world");

  const getDate = (string) => {
    const date = new Date(string);
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
  };

  const setarticle = (title, poster, description, content, date) => {
    dispatch(setcurrentNews(title, poster, description, content, date));
    navigate(title);
  };
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="Home">
        <ThirdContainer data={data} />
        <Lastcontainer data={data} />

        <div style={{ display: "flex", alignItems: "center" }}>
          <h1>featured News</h1>
          <hr style={{ width: "80%", height: "1px", fontWeight: "bolder" }} />
        </div>
        <Homecontainer data={data} />
      </div>
      <Footer />
    </div>
  );
}

export default World;
