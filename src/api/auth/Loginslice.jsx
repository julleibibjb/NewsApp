import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import jwt_decode from "jwt-decode";

// const url = "http://julleibibjb.pythonanywhere.com/api/token/";

const url = "http://127.0.0.1:8000/api/token/";

const SaveTolocalStorage = (data) => {
  const access = jwt_decode(data.payload);
  localStorage.setItem("AuthToken", JSON.stringify(access));
};

export const FetchAccesToken = createAsyncThunk(
  "login/FetchAccesToken",
  async ({ username, password }) => {
    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    }
  }
);

export const RefreshAccessToken = createAsyncThunk(
  "login/RefreshAccessToken",
  async (token) => {
    let url = "http://127.0.0.1:8000/api/token/refresh/";
    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        refresh: token.refresh,
      }),
    });
    const data = await response.json();
    return data;
  }
);

const initialState = {
  access: localStorage.getItem("AuthToken") ? true : false,
  AuthToken: localStorage.getItem("AuthToken")
    ? JSON.parse(localStorage.getItem("AuthToken"))
    : null,
  user: localStorage.getItem("AuthToken")
    ? jwt_decode(JSON.parse(localStorage.getItem("AuthToken")).refresh)
    : null,
  credentials: false,
};

const LoginAccesSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state, action) => {
      return {
        ...state,
        access: false,
        AuthToken: null,
        user: null,
        credentials: false,
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(FetchAccesToken.fulfilled, (state, action) => {
      if (action.payload) {
        localStorage.setItem("AuthToken", JSON.stringify(action.payload));
        return {
          ...state,
          access: true,
          user: jwt_decode(action.payload?.access),
          AuthToken: action.payload,
        };
      }
      return {
        ...state,
        credentials: true,
      };
    });
    builder.addCase(RefreshAccessToken.fulfilled, (state, action) => {
      localStorage.setItem("AuthToken", JSON.stringify(action.payload));
      return {
        ...state,
        access: true,
        user: jwt_decode(action.payload.access),
        AuthToken: action.payload,
      };
    });
  },
});

export default LoginAccesSlice.reducer;
export const UserAccess = (state) => state.login;
export const { logout } = LoginAccesSlice.actions;
