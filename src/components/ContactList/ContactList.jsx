import React, { Fragment } from 'react';

import { ToastContainer } from 'react-toastify';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import itemsSelectors from 'redux/contacts/items-selectors';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useGetAllContactsQuery } from 'redux/contacts/itemsOperations';
import Loader from 'components/Loader';

import Filter from 'components/Filter';

export default function ContactList() {
  const { data: contacts, isLoading, error } = useGetAllContactsQuery();
  const filter = useSelector(itemsSelectors.getFilterSelector);
  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts?.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };
  // const getVisibleContacts = createSelector([]);
  const visibleContacts = getVisibleContacts();
  return (
    <Fragment>
      <Filter />
      <h2 className={s.title}>Contacts</h2>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>{<Loader />}</>
      ) : contacts ? (
        <>
          <ul className={s.list}>
            {visibleContacts.map(contact => (
              <ContactListItem
                key={contact.id}
                id={contact.id}
                name={contact.name}
                phone={contact.phone}
              />
            ))}
          </ul>
        </>
      ) : null}

      <ToastContainer />
    </Fragment>
  );
}
