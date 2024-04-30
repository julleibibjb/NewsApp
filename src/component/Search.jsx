import React from "react";
import "../assets/styles/Home.css";
import Loader from "./Spinner";
import Footer from "./Footer";
import ThirdContainer from "./Containers/ThirdContainer";
import Frontpagecontainer from "./Containers/Frontpagecontainer";
import Lastcontainer from "./Containers/Lastcontainer";
import Homecontainer from "./Containers/Homecontainer";
import { useGetAllNewsQuery } from "../api/NewSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { setcurrentNews } from "../api/currentNews";
import { useDispatch } from "react-redux";

function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useLocation().state.query;
  console.log(query);
  const { data, isLoading, error } = useGetAllNewsQuery("news");

  console.log(error);

  const setarticle = (
    title,
    poster,
    description,
    content,
    author,
    publishedAt
  ) => {
    dispatch(
      setcurrentNews(title, poster, description, content, author, publishedAt)
    );
    navigate(`/world/${title}`);
  };

  if (isLoading) {
    <Loader />;
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="Home">
          <div className="lastcontainer">
            {data?.articles?.map((data, index) => {
              return (
                <div
                  key={index}
                  className="box"
                  onClick={() =>
                    setarticle(
                      data?.title,
                      data?.urlToImage,
                      data?.description,
                      data?.content,
                      data?.author,
                      data?.publishedAt
                    )
                  }
                >
                  <img src={data?.urlToImage} />
                  <div className="dt">
                    <p className="p">{data?.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Search;
