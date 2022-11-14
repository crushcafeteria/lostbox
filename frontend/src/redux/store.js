import {configureStore} from "@reduxjs/toolkit";
import {lostItemsAPI} from "./LostItemsAPI";

export const store = configureStore({
    reducer: {
        [lostItemsAPI.reducerPath]: lostItemsAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(lostItemsAPI.middleware)

});