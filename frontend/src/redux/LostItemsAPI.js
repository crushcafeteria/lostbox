import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../settings";

export const lostItemsAPI = createApi({
    reducerPath: 'lostItemsAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: (build) => ({
        getLostItems: build.query({
            query: () => 'lost-items',
            providesTags: ['LostItem']
        }),

        findLostItem: build.query({
            query: (id) => `lost-items/${id}`,
            providesTags: ['LostItem']
        }),

        addLostItem: build.mutation({
            query: formData => ({
                url: `/report-lost`,
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['LostItem']
        }),
    }),
});

// Export endpoints
export const {
    useGetLostItemsQuery,
    useFindLostItemQuery,
    useAddLostItemMutation
} = lostItemsAPI;