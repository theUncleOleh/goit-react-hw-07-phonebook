import PageHeading from 'components/PageHeading';

import ContactList from 'components/ContactList';
export default function ContactsListPage() {
  return (
    <div>
      <PageHeading text="Contacts list" />

      <ContactList />
    </div>
  );
}
