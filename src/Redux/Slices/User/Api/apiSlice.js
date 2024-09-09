import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "user",
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://binge-browser.onrender.com/api/v1/",
  }),
  endpoints: (builder) => ({
    getSlots: builder.query({
      query: () => ({
        url: `admin/time-slot`,
        method: "GET",
      }),
    }),

    getBookedSlots: builder.query({
      query: ({date,id}) => ({
        url: `slots/time/${date}/${id}`,
        method: "GET",
      }),
    }),
    bookSlot: builder.mutation({
      query: (data) => ({
        url: `slots/book-slots/${data.theaterUid}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetSlotsQuery, useGetBookedSlotsQuery, useBookSlotMutation } =
  userApi;
