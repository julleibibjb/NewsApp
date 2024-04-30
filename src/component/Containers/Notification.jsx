import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllNotications, FetchNotifications } from "../../api/NotifcationSlice";
import { setcurrentNews } from "../../api/currentNews";
function Notification({ Noificationtref, expandNotifcation }) {
  const dispatch = useDispatch();
  const data = useSelector(AllNotications);
  useEffect(() => {
    dispatch(FetchNotifications());
  }, []);

  const setarticle = (title, poster, description, content, date) => {
    dispatch(setcurrentNews(title, poster, description, content, date));
    expandNotifcation();
    navigate(`/world/${title}`);
  };

  return (
    <div ref={Noificationtref} className="Notificationcard">
      Notification
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="notCard"
            onClick={() =>
              setarticle(
                item.title,
                item.poster,
                item.description,
                item.content,
                item.date
              )
            }
          >
            <img src={item.poster} />
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Notification;
