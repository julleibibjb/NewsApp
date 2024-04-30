import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import image from "../../src/default.jpg";

const initialState = {
  title: localStorage.getItem("currentNews")
    ? JSON.parse(localStorage.getItem("currentNews")).title
    : "",
  poster: localStorage.getItem("currentNews")
    ? JSON.parse(localStorage.getItem("currentNews")).poster
    : "",
  description: localStorage.getItem("currentNews")
    ? JSON.parse(localStorage.getItem("currentNews")).description
    : "",
  content: localStorage.getItem("currentNews")
    ? JSON.parse(localStorage.getItem("currentNews")).content
    : "",
  author: localStorage.getItem("currentNews")
    ? JSON.parse(localStorage.getItem("currentNews")).author
    : "",
  date: localStorage.getItem("currentNews")
    ? JSON.parse(localStorage.getItem("currentNews")).date
    : "",
};

const CurrentNewsSlice = createSlice({
  name: "currentNews",
  initialState,
  reducers: {
    setcurrentNews: {
      reducer(state, action) {
        return action.payload;
      },
      prepare(title, poster, description, content, author, date) {
        localStorage.setItem(
          "currentNews",
          JSON.stringify({ title, poster, description, content, author, date })
        );
        return {
          payload: {
            title,
            poster: poster || image,
            description,
            content,
            author,
            date,
          },
        };
      },
    },
  },
});

export default CurrentNewsSlice.reducer;
export const { setcurrentNews } = CurrentNewsSlice.actions;
export const currentArticle = (state) => state.currentNews;
