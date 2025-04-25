import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const seatApi = createApi({
    reducerPath: 'seatApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3222/' }),
    endpoints: (builder) => ({
      getSeats: builder.query({
        query: () => '/seat',
      }),
    }),
  });
  
  export const { useGetSeatsQuery } = seatApi;