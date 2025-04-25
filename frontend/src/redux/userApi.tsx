import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3222/' }), // Your API base URL
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => '/users/me', // Endpoint to fetch user data
    }),
  }),
});

export const { useGetUserInfoQuery } = userApi;