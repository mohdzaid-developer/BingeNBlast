import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const accessToken = sessionStorage.getItem("token");

export const adminApi = createApi({
  reducerPath: "admin",
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://binge-browser.onrender.com/api/v1/",
  }),
  endpoints: (builder) => ({
    //Login
    adminLogin: builder.mutation({
      query: (login) => ({
        url: "admin/auth/login",
        method: "POST",
        body: login,
      }),
    }),

    //Theaters
    getTheaters: builder.query({
      query: () => ({
        url: "admin/theater/list",
        method: "GET",
      }),
    }),
    getTheater: builder.query({
      query: (id) => ({
        url: `admin/theater/${id}`,
        method: "GET",
      }),
    }),

    //Cakes
    getCakes: builder.query({
      query: () => ({
        url: "admin/extra-items/CAKE",
        method: "GET",
      }),
      providesTags: ["Cakes"],
    }),
    addCake: builder.mutation({
      query: (cake) => ({
        url: "admin/extra-items/CAKE",
        method: "POST",
        body: cake,
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }),
      invalidatesTags: ["Cakes"],
    }),
    deleteCake: builder.mutation({
      query: (id) => ({
        url: `admin/extra-items/${id}`,
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }),
      invalidatesTags: ["Cakes"],
    }),
    editCake: builder.mutation({
      query: (data) => ({
        url: `admin/extra-items/${data.uid}`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }),
      invalidatesTags: ["Cakes"],
    }),

    //Decorations
    getDecorations: builder.query({
      query: () => ({
        url: "admin/extra-items/DECORATION",
        method: "GET",
      }),
      providesTags: ["Decorations"],
    }),
    addDecoration: builder.mutation({
      query: (cake) => ({
        url: "admin/extra-items/DECORATION",
        method: "POST",
        body: cake,
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }),
      invalidatesTags: ["Decorations"],
    }),
    deleteDecoration: builder.mutation({
      query: (id) => ({
        url: `admin/extra-items/${id}`,
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }),
      invalidatesTags: ["Decorations"],
    }),
    editDecoration: builder.mutation({
      query: (data) => ({
        url: `admin/extra-items/${data.uid}`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }),
      invalidatesTags: ["Decorations"],
    }),

    //Add-ons
    getAddons: builder.query({
      query: () => ({
        url: "admin/extra-items/ADD_ON",
        method: "GET",
      }),
      providesTags: ["Addon"],
    }),
    addAddon: builder.mutation({
      query: (cake) => ({
        url: "admin/extra-items/ADD_ON",
        method: "POST",
        body: cake,
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }),
      invalidatesTags: ["Addon"],
    }),
    deleteAddon: builder.mutation({
      query: (id) => ({
        url: `admin/extra-items/${id}`,
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }),
      invalidatesTags: ["Addon"],
    }),
    editAddon: builder.mutation({
      query: (data) => ({
        url: `admin/extra-items/${data.uid}`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }),
      invalidatesTags: ["Addon"],
    }),

    // Contact Form
    postMessage: builder.mutation({
      query: (user) => ({
        url: "contact-us",
        method: "POST",
        body: user,
      }),
    }),
    getMessage: builder.query({
      query: () => ({
        url: "contact-us",
        method: "GET",
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }),
      providesTags: ["Message"],
    }),
    deleteMessage: builder.mutation({
      query: (id) => ({
        url: `contact-us/${id}`,
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }),
      invalidatesTags: ["Message"],
    }),

    // Images
    imageUpload: builder.mutation({
      query: (data) => ({
        url: `image/thumbnail/${data.uid}`,
        method: "POST",
        headers: {
          Authorization: "Bearer " + accessToken,
        },
        body: data.formsData,
      }),
    }),


    // Get Bookings
    getBookings: builder.query({
      query: (date) => ({
        url: `slots/${date}`,
        method: "GET",
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }),
      providesTags: ["Bookings"],
    }),
  }),
});

export const {
  useAdminLoginMutation,

  useGetTheatersQuery,
  useGetTheaterQuery,

  useGetCakesQuery,
  useAddCakeMutation,
  useDeleteCakeMutation,
  useEditCakeMutation,

  useGetDecorationsQuery,
  useAddDecorationMutation,
  useDeleteDecorationMutation,
  useEditDecorationMutation,

  useGetAddonsQuery,
  useAddAddonMutation,
  useDeleteAddonMutation,
  useEditAddonMutation,

  usePostMessageMutation,
  useGetMessageQuery,
  useDeleteMessageMutation,

  useImageUploadMutation,

  useGetBookingsQuery
} = adminApi;
