import { useNavigate } from 'react-router-dom';
import { useAddContactMutation } from 'redux/contacts/itemsOperations';
import { toast } from 'react-toastify';
import Form from 'components/Form';

export default function AddContact({ contacts }) {
  const [createContact, { isLoading: isCreate }] = useAddContactMutation();
  const navigation = useNavigate();
  const addContacts = contact => {
    console.log(contact);
    const toNormalizeName = contact.name.toLocaleLowerCase();

    const name = contacts?.find(
      ({ name }) => name.toLocaleLowerCase() === toNormalizeName
    );

    if (name) {
      return toast.error(`${contact.name} is already in contacts`);
    }
    createContact(contact);
    toast.success(`${contact.name} was added to contacts!`);
    navigation('/');
  };
  return <Form onSubmit={addContacts} isLoading={isCreate} />;
}
