import React from "react";
import "../assets/styles/Home.css";
import Loader from "./Spinner";
import Footer from "./Footer";
import ThirdContainer from "./Containers/ThirdContainer";
import Frontpagecontainer from "./Containers/Frontpagecontainer";
import Lastcontainer from "./Containers/Lastcontainer";
import Homecontainer from "./Containers/Homecontainer";
import { useGetAllNewsQuery } from "../api/NewSlice";

function Entertainment() {
  const { data, isLoading } = useGetAllNewsQuery("entertainment");

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
            <Homecontainer data={data} /> <ThirdContainer data={data} />
            <ThirdContainer data={data} />
            <Lastcontainer data={data} />
            <Frontpagecontainer data={data} />{" "}
            <div style={{ display: "flex", alignItems: "center" }}>
              <h1>featured News</h1>
              <hr
                style={{ width: "80%", height: "1px", fontWeight: "bolder" }}
              />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Entertainment;
