import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};
const itemsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },
    remove(state, action) {
      state.items = [...state.items.filter(({ id }) => id !== action.payload)];
    },
    filter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { add, remove, filter } = itemsSlice.actions;
export const items = itemsSlice.reducer;
