import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";


export const theaterApi = createApi({
  reducerPath: 'theaterApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3222/' }), // Your API base URL
  endpoints: (builder) => ({
    getTheaterInfo: builder.query({
      query: () => '/theater', // Endpoint to fetch user data
    }),
  }),
});

export const { useGetTheaterInfoQuery } = theaterApi;