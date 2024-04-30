import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const api_key = import.meta.env.VITE_APP_API_KEY;

export const NewsApi = createApi({
  reducerPath: "NewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/",
  }),
  endpoints: (builder) => ({
    getAllNews: builder.query({
      query: (category) => `${category}`,
    }),
  }),
});

export const { useGetAllNewsQuery } = NewsApi;
