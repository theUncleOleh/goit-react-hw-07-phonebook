// import { toast } from 'react-toastify';
// import Form from 'components/Form';

// import { useSelector } from 'react-redux';
// import { itemsSelectors } from 'redux/contacts/items-selectors';

// export default function AddContact({ contacts, phone, name, value }) {
//   //   const contacts = useSelector(itemsSelectors.getContactsSelector);
//   console.log(contacts);
//   const addContacts = () => {
//     const contact = { name, phone };
//     console.log(contact);
//     const toNormalizeName = contact.name.toLocaleLowerCase();
//     const name = contacts.find(
//       ({ name }) => name.toLocaleLowerCase() === toNormalizeName
//     );

//     if (name) {
//       return toast.error(`${contact.name} is already in contacts`);
//     }

//     toast.success(`${contact.name} was added to contacts!`);
//   };
//   const checkName = contact => {
//     const toNormalizeName = contact.name.toLocaleLowerCase();
//     return contacts.find(
//       contact => contact.name.toLocaleLowerCase() === toNormalizeName
//     );
//   };

//   const getVisibleContacts = () => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(value.toLocaleLowerCase())
//     );
//   };

//   const visibleContacts = getVisibleContacts();

//   const numberFormatting = number => {
//     const array = [...number];
//     for (let i = 3; i < array.length - 1; i += 3) {
//       array.splice(i, 0, '-');
//     }
//     return array.join('');
//   };
//   //   useEffect(() => {
//   //     dispatch(itemsOperations.fetchContacts());
//   //   }, [dispatch]);
//   return;
// }
