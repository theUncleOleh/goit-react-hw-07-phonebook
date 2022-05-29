// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as ContactsActions from './items-actions';
import * as ContactsAPI from '../../contacts-api/contacts-api';

export const fetchContacts = () => async dispatch => {
  dispatch(ContactsActions.fetchContactsRequest());
  try {
    const contacts = await ContactsAPI.axiosFetchContacts();
    dispatch(ContactsActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(ContactsActions.fetchContactsError(error));
  }
};

export const addContacts = (name, phone) => dispatch => {
  dispatch(ContactsActions.addContactsRequest());
  const contact = { name, phone };

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(ContactsActions.addContactsSuccess(data)))
    .catch(error => dispatch(ContactsActions.addContactsError(error)));
};

// export const fetchContacts = createAsyncThunk(
//   'items/fetchAllContacts',
//   async () => {
//     const contacts = await ContactsAPI.axiosFetchContacts();
//     return contacts;
//   }
// );
