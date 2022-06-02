import React from 'react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getFilterSelector } from 'redux/contacts/items-selectors';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import {
  useGetAllContactsQuery,
  useAddContactMutation,
} from 'redux/contacts/itemsOperations';
import Loader from 'components/Loader';

import Form from 'components/Form';
import Filter from 'components/Filter';

export default function ContactList() {
  const { data: contacts, isLoading, error } = useGetAllContactsQuery();
  // const [deleteContact, { isLoading: isDeliting }, data] =
  //   useDeleteContactMutation();
  const [createContact, { isLoading: isCreate }] = useAddContactMutation();
  const filter = useSelector(getFilterSelector);
  console.log(filter);
  console.log(contacts);

  const addContacts = contact => {
    console.log(contact);
    const toNormalizeName = contact.name.toLocaleLowerCase();

    const name = contacts.find(
      ({ name }) => name.toLocaleLowerCase() === toNormalizeName
    );

    if (name) {
      return toast.error(`${contact.name} is already in contacts`);
    }
    createContact(contact);
    toast.success(`${contact.name} was added to contacts!`);
  };
  //   const toNormalizeName = contact.name.toLocaleLowerCase();
  //   const name = contacts.find(
  //     ({ name }) => name.toLocaleLowerCase() === toNormalizeName
  //   );

  //   if (name) {
  //     return toast.error(`${contact.name} is already in contacts`);
  //   }
  //   createContact(contact);
  //   toast.success(`${contact.name} was added to contacts!`);
  // };

  let visibleContacts = [];
  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };
  if (!isLoading && !error) {
    visibleContacts = getVisibleContacts();
  }

  return (
    <Fragment>
      <Form onSubmit={addContacts} isLoading={isCreate} />

      <Filter />
      <h2 className={s.title}>Contacts</h2>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>{<Loader />}</>
      ) : contacts ? (
        <>
          {visibleContacts.map(contact => (
            <ContactListItem
              key={contact.id}
              id={contact.id}
              name={contact.name}
              phone={contact.phone}
            />
          ))}
        </>
      ) : null}

      <ToastContainer />
    </Fragment>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};


