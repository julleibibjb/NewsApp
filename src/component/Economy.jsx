import React from "react";
import "../assets/styles/Home.css";
import Loader from "./Spinner";
import { Fake_news } from "./Fake";
import { useGetAllNewsQuery } from "../api/NewSlice";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setcurrentNews } from "../api/currentNews";
import Lastcontainer from "./Containers/Lastcontainer";
import ThirdContainer from "./Containers/ThirdContainer";
import Homecontainer from "./Containers/Homecontainer";
import Frontpagecontainer from "./Containers/Frontpagecontainer";

function Bussiness() {
  const { data, isLoading } = useGetAllNewsQuery("economy");
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
      <div>
        <div className="Home">
          <Lastcontainer data={data} />
          <ThirdContainer data={data} />
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1>featured News</h1>
            <hr style={{ width: "80%", height: "1px", fontWeight: "bolder" }} />
          </div>
          <Homecontainer data={data} />

          <Frontpagecontainer data={data} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Bussiness;
