import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bookingApi = createApi({
  reducerPath: 'bookingApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3222' }), // Update if your backend has a different base URL
  endpoints: (builder) => ({
    createBooking: builder.mutation<unknown, {userId: string; seatId: string ; showtimeId:string}>({
      query: ({ userId, seatId, showtimeId }) => ({
        url: `/booking`,
        method: 'POST',
        body: {userId, seatId, showtimeId },
      }),
    }),
  }),
});

export const { useCreateBookingMutation } = bookingApi;