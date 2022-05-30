// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import * as ContactsActions from './items-actions';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import * as ContactsAPI from '../../contacts-api/contacts-api';
// import {createAsyncThunk} from '@reduxjs/toolkit'

// export const fetchContacts = () => async dispatch => {
//   dispatch(ContactsActions.fetchContactsRequest());
//   try {
//     const contacts = await ContactsAPI.axiosFetchContacts();
//     dispatch(ContactsActions.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(ContactsActions.fetchContactsError(error));
//   }
// };

// export const addContacts = (name, number) => dispatch => {
//   console.log(number);
//   dispatch(ContactsActions.addContactsRequest());
//   const contact = { name, number };
//   console.log(contact);
//   axios
//     .post('/contacts', contact)
//     .then(({ data }) => dispatch(ContactsActions.addContactsSuccess(data)))
//     .catch(error => dispatch(ContactsActions.addContactsError(error)));
// };

// export const fetchContacts = createAsyncThunk(
//   'items/fetchAllContacts',
//   async () => {
//     const contacts = await ContactsAPI.axiosFetchContacts();
//     return contacts;
//   }
// );

export const contactsApi = createApi({
  reducerPath: 'fetchAllContacts',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://629207f4cd0c91932b6c3fec.mockapi.io' }),
  tagTypes: ['Contacts',],
  endpoints: (builder) => ({
    getAllContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts']
    }),
    deleteContact: builder.mutation({
      query: (contactId) => ({
url: `/contacts/${contactId}`,
method: 'DELETE',

      }),
      invalidatesTags: ['Contacts'],
    }), 
    addContact: builder.mutation({
      query: (newContact) => ({
        url: `/contacts`,
        method: 'POST', 
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    })
  }),
 
})


export const { useGetAllContactsQuery, useDeleteContactMutation, useAddContactMutation } = contactsApi;
