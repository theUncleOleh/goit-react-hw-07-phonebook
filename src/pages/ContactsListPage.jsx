import PageHeading from 'components/PageHeading';
import ButtonToBack from 'components/ButtonToBack';
import ContactList from 'components/ContactList';
export default function ContactsListPage() {
  return (
    <div>
      <PageHeading text="Contacts list" />
      <ButtonToBack />
      <ContactList />
    </div>
  );
}
