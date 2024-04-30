import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setcurrentNews } from "../../api/currentNews";

function Frontpagecontainer({ data }) {
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
      <div className="partOne">
        <div
          className="one"
          onClick={() =>
            setarticle(
              data[15]?.title,
              data[15]?.urlToImage,
              data[15]?.description,
              data[15]?.content,
              data[15]?.author,
              data[15]?.publishedAt
            )
          }
        >
          <div className="newdetails">
            <h1>{data[15]?.title}</h1>
          </div>
          <img src={data[15]?.urlToImage} />
        </div>
      </div>
      <div className="partTwo">
        {data
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
  );
}

export default Frontpagecontainer;
