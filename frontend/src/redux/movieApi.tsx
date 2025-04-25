// src/redux/api/movieApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3222' }), // or your actual backend URL
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (page = 1, limit = 10) => `/movie?page=${page}&limit=${limit}`
    }),
    getMoviesById: builder.query({
       query : (id: string) => `/movie/${id}`,
    })
  }),
});

export const { useGetMoviesQuery, useGetMoviesByIdQuery } = movieApi;
