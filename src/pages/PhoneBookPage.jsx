import PageHeading from '../components/PageHeading/PageHeading';
import ContactList from '../components/ContactList/ContactList';

export default function PhoneBookPage() {
  return (
    <>
      <PageHeading text="Phonebook" />
      <ContactList />
    </>
  );
}
