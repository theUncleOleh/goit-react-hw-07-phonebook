import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
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
      state.value = action.payload;
    },
  },
});

export const { filter } = itemsSlice.actions;
export default itemsSlice.reducer;
