import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setcurrentNews } from "../../api/currentNews";

function Homecontainer({ data }) {
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
    <div className="Homecontainer">
      <div className="sectionOne">
        {data
          ?.filter((a, b) => b > 5 && b < 15)
          ?.map((data, index) => {
            return (
              <div
                key={index}
                className="items"
                onClick={() =>
                  setarticle(
                    data[3]?.title,
                    data[3]?.urlToImage,
                    data[3]?.description,
                    data[3]?.content,
                    data[3]?.author,
                    data[3]?.publishedAt
                  )
                }
              >
                <img src={data?.urlToImage} />
                <p>{data[3]?.title}</p>
                <div className="article">
                  <p>{data[3]?.author || "unknown"}</p>
                  <p>{getDate(data[3]?.publishedAt)}</p>
                </div>
              </div>
            );
          })}
      </div>

      <div className="sectionTwo">
        {data
          ?.filter((a, b) => b > 15 && b < 25)
          ?.map((data, index) => {
            return (
              <div
                key={index}
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
  );
}

export default Homecontainer;
