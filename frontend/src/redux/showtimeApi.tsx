import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const showtimeApi = createApi({
    reducerPath: 'showtimeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3222/' }),
    endpoints: (builder) => ({
      getShowtimes: builder.query({
        query: () => '/showtime',
      }),
    }),
  });
  
  export const { useGetShowtimesQuery } = showtimeApi;