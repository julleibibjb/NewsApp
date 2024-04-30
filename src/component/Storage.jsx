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

function Home() {
  const { data, isLoading, error } = useGetAllNewsQuery();
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
        <div className="Homecontainer">
          <div className="partOne">
            <div
              className="one"
              onClick={() =>
                setarticle(
                  data?.articles[0].title,
                  data?.articles[0].urlToImage,
                  data?.articles[0].description,
                  data?.articles[0].content,
                  data?.articles[0].author,
                  data?.articles[0].publishedAt
                )
              }
            >
              <img src={data?.articles[0]?.urlToImage} />
              <div className="details">
                <h1>{data?.articles[0]?.title}</h1>
                <div className="article">
                  <p>{Fake_news[0].author}</p>
                  <p>{getDate(data?.articles[0]?.publishedAt)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="partTwo">
            {data?.articles
              ?.filter((a, b) => b > 0 && b < 5)
              .map((data, index) => {
                return (
                  <div
                    key={index}
                    className="secOne"
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
                    <div className="details">
                      <p>{data?.title}</p>
                      <div className="article">
                        <p>{data?.author || "unknown"}</p>
                        <p>{getDate(data?.publishedAt)}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1>featured News</h1>
          <hr style={{ width: "80%", height: "1px", fontWeight: "bolder" }} />
        </div>
        <div className="Homecontainer">
          <div className="sectionOne">
            {data?.articles
              ?.filter((a, b) => b > 5 && b < 15)
              ?.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="items"
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
                    <p>{data?.title}</p>
                    <div className="article">
                      <p>{data?.author || "unknown"}</p>
                      <p>{getDate(data?.publishedAt)}</p>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="sectionTwo">
            {data?.articles
              ?.filter((a, b) => b > 15 && b < 25)
              ?.map((data, index) => {
                return (
                  <div
                    className="secTwoItems"
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
                    <div className="postinfo">
                      <p>{data?.title}</p>
                      <div className="article">
                        <p>{data?.author || "unknown"}</p>
                        <p>{getDate(data?.publishedAt)}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="thirdcontainer">
          <div
            className="hero"
            onClick={() =>
              setarticle(
                data?.articles[26].title,
                data?.articles[26].urlToImage,
                data?.articles[26].description,
                data?.articles[26].content,
                data?.articles[26].author,
                data?.articles[26].publishedAt
              )
            }
          >
            <h1>{data?.articles[26].title}</h1>
            <img src={data?.articles[26].urlToImage} />
            <p>{data?.articles[26].description}</p>
          </div>
          <div
            className="hero"
            onClick={() =>
              setarticle(
                data?.articles[28].title,
                data?.articles[28].urlToImage,
                data?.articles[28].description,
                data?.articles[28].content,
                data?.articles[28].author,
                data?.articles[28].publishedAt
              )
            }
          >
            <h1>{data?.articles[28].title}</h1>
            <img src={data?.articles[28].urlToImage} />
            <p>{data?.articles[28].description}</p>
          </div>
        </div>
        <div className="lastcontainer">
          {data?.articles
            ?.filter((a, b) => b > 30 && b < 40)
            ?.map((data, index) => {
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
      <Footer />
    </>
  );
}

export default Home;
