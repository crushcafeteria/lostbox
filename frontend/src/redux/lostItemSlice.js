import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    lostItems: [],
}

export const lostItemsSlice = createSlice({
    name: 'lostItems',
    initialState,
    reducers: {},
});

// Export the reducer
export default lostItemsSlice.reducer;