import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = "http://127.0.0.1:8000/Notifications/";

const initialState = [];

export const FetchNotifications = createAsyncThunk(
  "notification/FetchNotifications",
  async () => {
    const response = await fetch(url);
    const data = await response.json();
    if (response.ok) {
      return data;
    }
  }
);

const NotificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(FetchNotifications.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default NotificationSlice.reducer;
export const AllNotications = (state) => state.notification;
