import React, { useEffect, useState } from "react";
import "../assets/styles/Article.css";
import "../assets/styles/Home.css";
import "../assets/styles/Navbar.css";
import { Fake_news } from "./Fake";
import { useLocation } from "react-router-dom";
import { useGetAllNewsQuery } from "../api/NewSlice";
import { useSelector } from "react-redux";
import currentNews, { currentArticle } from "../api/currentNews";
import { useDispatch } from "react-redux";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Lastcontainer from "./Containers/Lastcontainer";
import { setcurrentNews } from "../api/currentNews";
import Loader from "./Spinner";

function Articles() {
  const { data, isLoading, error } = useGetAllNewsQuery("news");

  const { title, poster, description, content, date, author } =
    useSelector(currentArticle);
  const [Show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const getDate = (string) => {
    const date = new Date(string);
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
  };

  const Allow = () => {
    setShow(!Show);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [useSelector(currentArticle)]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div className="Article">
        <div className="containerArt">
          <div className="artpartone">
            <h1>{title}</h1>
            <div className="detailpost">
              <p>strory by {author}</p>
              <p>{getDate(date)}</p>
            </div>
            <img src={poster} />

            <p className="content">{Show ? Fake_news : content}</p>

            <button onClick={() => Allow()} className="read">
              {Show ? "read less" : "continue reading"}
            </button>
          </div>
          <div className="artparttwo">
            <h3>trending stories</h3>
            <div className="sectionTwo" style={{ width: "100%" }}>
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
        </div>
        <h1>More for you</h1>
        <Lastcontainer data={data} />
      </div>
      <Footer />
    </>
  );
}

export default Articles;
