import PageHeading from 'components/PageHeading';
import ButtonToBack from 'components/ButtonToBack';
import AddContact from 'components/AddContact';
export default function CreateContactPage() {
  return (
    <>
      <PageHeading text="Phonebook" />
      <ButtonToBack />
      <AddContact />
    </>
  );
}
