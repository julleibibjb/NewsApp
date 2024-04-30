import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setcurrentNews } from "../../api/currentNews";

function Lastcontainer({ data }) {
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
    <div className="lastcontainer">
      {data
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
  );
}

export default Lastcontainer;
