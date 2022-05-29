import React from 'react';
import PropTypes from 'prop-types';
import { Fragment, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContactsSelector,
  getFilterSelector,
} from '../../redux/contacts/items-selectors';
import * as itemsOpertions from '../../redux/contacts/itemsOperations';
// import { add, remove } from '../../redux/contacts/items-actions';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import Form from '../Form/Form';
import Filter from '../Filter/Filter';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsSelector);
  const value = useSelector(getFilterSelector);
  console.log(contacts);
  console.log(value);
  const addContacts = (name, number) => {
    const newName = checkName(name);
    const formNumber = numberFormatting(number);
    const contact = {
      id: nanoid(),
      name,
      number: formNumber,
    };

    if (newName) {
      return toast.error(`${name} is already in contacts`);
    }
    // dispatch(add(contact));

    toast.success(`${name} was added to contacts!`);
  };

  const checkName = name => {
    const normalyzeName = name.toLocaleLowerCase();
    return contacts.find(
      ({ name }) => name.toLocaleLowerCase() === normalyzeName
    );
  };
  // const getVisibleContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(value.toLocaleLowerCase())
  //   );
  // };

  // const visibleContacts = getVisibleContacts();

  const deleteContact = id => {
    // dispatch(remove(id));
  };
  const numberFormatting = number => {
    const array = [...number];
    for (let i = 3; i < array.length - 1; i += 3) {
      array.splice(i, 0, '-');
    }
    return array.join('');
  };
  useEffect(() => {
    dispatch(itemsOpertions.fetchContacts());
  }, [dispatch]);

  return (
    // <div>
    //   {contacts.length > 0 && (
    //     <ul>
    //       {contacts.map(contact => (
    //         <li key={contact.id}>
    //           <img src={contact.avatar} alt={contact.name} />
    //           <p>
    //             {contact.name} : {contact.phone}
    //           </p>
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    // </div>
    <Fragment>
      <Form onSubmit={addContacts} />
      <Filter />
      <h2 className={s.title}>Contacts</h2>
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
