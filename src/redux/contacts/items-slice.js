import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};
const itemsSlice = createSlice({
  name: 'filterItems',
  initialState,
  reducers: {
    // add: (state, action) => {
    //   state.items.push(action.payload);
    // },
    // remove(state, action) {
    //   state.items = [...state.items.filter(({ id }) => id !== action.payload)];
    // },
    filter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filter } = itemsSlice.actions;
export const filterItems = itemsSlice.reducer;
