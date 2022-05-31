import React from 'react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getFilterSelector } from 'redux/contacts/items-selectors';
//  import { itemsOperations } from 'redux/contacts';
import {
  useGetAllContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} from 'redux/contacts/itemsOperations';
import Loader from 'components/Loader';

import Form from 'components/Form';
import Filter from 'components/Filter';

export default function ContactList() {
  const { data: contacts, isLoading, error } = useGetAllContactsQuery();
  const [deleteContact, { isLoading: isDeliting }] = useDeleteContactMutation();
  const [createContact] = useAddContactMutation();
  const filter = useSelector(getFilterSelector);
  console.log(filter);
  console.log(contacts);

  //  const dispatch = useDispatch();
  //  const contacts = useSelector(itemsSelectors.getContactsSelector);
  //  const value = useSelector(itemsSelectors.getFilterSelector);
  //  console.log(contacts);

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
  console.log(contacts);

  // const getVisibleContacts = () => {
  //   contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(value.toLocaleLowerCase())
  //   );
  // };
  // const visibleContacts = getVisibleContacts();
  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  // );
  // console.log(visibleContacts);
  // const deleteContact = id => {
  //   // dispatch(remove(id));
  // };

  // useEffect(() => {
  //   dispatch(itemsOperations.fetchContacts());
  // }, [dispatch]);

  return (
    <Fragment>
      <Form onSubmit={addContacts} />

      <Filter />
      <h2 className={s.title}>Contacts</h2>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>{<Loader />}</>
      ) : contacts ? (
        <>
          <ul className={s.list}>
            {contacts.map(contact => (
              <li key={contact.id} className={s.item}>
                <p className={s.graf}>
                  {contact.name} : {contact.phone}
                </p>
                <button
                  type="button"
                  className={s.button}
                  onClick={() => deleteContact(contact.id)}
                >
                  {isDeliting ? 'Deliting...' : 'Delete'}
                </button>
              </li>
            ))}
          </ul>
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
