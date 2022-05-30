// import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import { fetchContacts } from './itemsOperations';
// import * as ContactsActions from './items-actions';

// export const items = createReducer([], {
//   [fetchContacts.fulfilled]: (_, action) => action.payload,
//   // [ContactsActions.addContactsSuccess]: (state, action) => [
//   //   ...state,
//   //   action.payload,
//   // ],

//   // [remove]: (state, action) => state.filter(({ id }) => id !== action.payload),
// });
// export const isLoading = createReducer(false, {
//   [fetchContacts.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,
//   [fetchContacts.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,
// });
// const error = createReducer(null, {
//   [fetchContacts.rejected]: (_, action) => action.payload,
//   [fetchContacts.pending]: () => null,
// });

// export const filterItems = createReducer('', {
//   [ContactsActions.filter]: (_, action) => action.payload,
// });

// export const reducers = combineReducers({
//   items,
//   isLoading,
//   error,
//   filterItems,
// });
