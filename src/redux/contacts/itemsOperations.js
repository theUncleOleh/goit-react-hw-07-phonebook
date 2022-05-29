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
