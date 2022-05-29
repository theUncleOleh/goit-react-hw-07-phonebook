import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import { fetchContacts } from './itemsOperations';
import * as ContactsActions from './items-actions';

export const items = createReducer([], {
  [ContactsActions.fetchContactsSuccess]: (_, action) => action.payload,
  [ContactsActions.addContactsSuccess]:(state, action) => [...state, action.payload],
 
  // [remove]: (state, action) => state.filter(({ id }) => id !== action.payload),
});
export const isLoading = createReducer(false, {
  [ContactsActions.fetchContactsRequest]: () => true,
  [ContactsActions.fetchContactsSuccess]: () => false,
  [ContactsActions.fetchContactsError]: () => false, 
  [ContactsActions.addContactsRequest]: () => true,
  [ContactsActions.addContactsSuccess]: () => false,
  [ContactsActions.addContactsError]: () => false,


});
const error = createReducer(null, {
  [ContactsActions.fetchContactsError]: (_, action) => action.payload,
  [ContactsActions.fetchContactsRequest]: () => null,
  [ContactsActions.addContactsError]: (_, action) => action.payload,
  [ContactsActions.addContactsRequest]: () => null,
});

export const filterItems = createReducer('', {
  [ContactsActions.filter]: (_, action) => action.payload,
});

export const reducers = combineReducers({
  items,
  isLoading,
  error,
  filterItems,
});
