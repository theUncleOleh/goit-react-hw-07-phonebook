import React from 'react';
import PropTypes from 'prop-types';
import { Fragment, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { itemsSelectors } from 'redux/contacts';
import { itemsOperations } from 'redux/contacts';
// import { add, remove } from '../../redux/contacts/items-actions';

import { toast } from 'react-toastify';
import Form from 'components/Form';
import Filter from 'components/Filter';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(itemsSelectors.getContactsSelector);
  const value = useSelector(itemsSelectors.getFilterSelector);
  console.log(contacts);
  console.log(value);

  const addContacts = contact => {
    // dispatch(itemsOperations.addContacts(contact));

    const toNormalizeName = contact.name.toLocaleLowerCase();
    const name = contacts.find(
      ({ name }) => name.toLocaleLowerCase() === toNormalizeName
    );

    if (name) {
      return toast.error(`${contact.name} is already in contacts`);
    }
    dispatch(itemsOperations.addContacts(contact));
    toast.success(`${contact.name} was added to contacts!`);
  };
  // const checkName = ({ name }) => {
  //   const toNormalizeName = name.toLocaleLowerCase();
  //   return contacts.find(
  //     ({ name }) => name.toLocaleLowerCase() === toNormalizeName
  //   );
  // };

  // const getVisibleContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(value.toLocaleLowerCase())
  //   );
  // };

  // const visibleContacts = getVisibleContacts();

  const deleteContact = id => {
    // dispatch(remove(id));
  };
  // const numberFormatting = number => {
  //   const array = [...number];
  //   for (let i = 3; i < array.length - 1; i += 3) {
  //     array.splice(i, 0, '-');
  //   }
  //   return array.join('');
  // };
  useEffect(() => {
    dispatch(itemsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Fragment>
      <Form onSubmit={addContacts} />
      <Filter />
      <h2 className={s.title}>Contacts</h2>
      {contacts.length > 0 && (
        <ul className={s.list}>
          {contacts.map(contact => (
            <li key={contact.id} className={s.item}>
              <p className={s.graf}>
                {contact.name}: {contact.phone}
              </p>
              <button
                type="button"
                className={s.button}
                onClick={() => deleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

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