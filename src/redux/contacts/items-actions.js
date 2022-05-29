import { createAction } from '@reduxjs/toolkit';

// export const add = createAction('item/add');
export const remove = createAction('item/delete');
export const filter = createAction('item/filter');

export const fetchContactsRequest = createAction('item/fetchContactsRequest');
export const fetchContactsSuccess = createAction('item/fetchContactsSuccess');
export const fetchContactsError = createAction('item/fetchContactsError');

export const addContactsRequest = createAction('item/addContactsRequest');
export const addContactsSuccess = createAction('item/addContactsSuccess ');
export const addContactsError = createAction('item/addContactsError');
