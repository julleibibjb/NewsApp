import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setcurrentNews } from "../../api/currentNews";

function ThirdContainer({ data }) {
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

  return (
    <div className="thirdcontainer">
      <div
        className="hero"
        onClick={() =>
          setarticle(
            data[26]?.title,
            data[26]?.urlToImage,
            data[26]?.description,
            data[26]?.content,
            data[26]?.author,
            data[26]?.publishedAt
          )
        }
      >
        <h1>{data[26]?.title}</h1>
        <img src={data[26]?.urlToImage} />
        <p>{data[26]?.description}</p>
      </div>
      <div
        className="hero"
        onClick={() =>
          setarticle(
            data[28]?.title,
            data[28]?.urlToImage,
            data[28]?.description,
            data[28]?.content,
            data[28]?.author,
            data[28]?.publishedAt
          )
        }
      >
        <h1>{data[28]?.title}</h1>
        <img src={data[28]?.urlToImage} />
        <p> {data[28]?.description}</p>
      </div>
    </div>
  );
}

export default ThirdContainer;
