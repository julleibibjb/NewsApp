import React from "react";
import "../assets/styles/Home.css";
import Loader from "./Spinner";
import Footer from "./Footer";
import ThirdContainer from "./Containers/ThirdContainer";
import Frontpagecontainer from "./Containers/Frontpagecontainer";
import Lastcontainer from "./Containers/Lastcontainer";
import Homecontainer from "./Containers/Homecontainer";
import { useGetAllNewsQuery } from "../api/NewSlice";

function Politics() {
  const { data, isLoading } = useGetAllNewsQuery("news");

  if (isLoading) {
    <Loader />;
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="Home">
            <ThirdContainer data={data} />
            <Frontpagecontainer data={data} />{" "}
            <div style={{ display: "flex", alignItems: "center" }}>
              <h1>featured News</h1>
              <hr
                style={{ width: "80%", height: "1px", fontWeight: "bolder" }}
              />
            </div>
            <Homecontainer data={data} /> <ThirdContainer data={data} />
            <Lastcontainer data={data} />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Politics;
