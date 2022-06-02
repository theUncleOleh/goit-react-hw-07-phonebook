import { useDeleteContactMutation } from 'redux/contacts/itemsOperations';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { toast } from 'react-toastify';
import s from './ContactListItem.module.css';
export default function ContactListItem({ id, name, phone }) {
  const [deleteContact, { isLoading: isDeliting }] = useDeleteContactMutation();
  const deleteListItem = id => {
    deleteContact();
    toast.success(`Contact ${name} successfuly delete`);
  };
  return (
    <li className={s.item}>
      <p className={s.graf}>
        {name} : {phone}
      </p>
      <button
        type="button"
        disabled={isDeliting}
        className={s.button}
        onClick={() => deleteListItem(id)}
      >
        {isDeliting ? (
          <ScaleLoader height={15} width={5} margin={2} />
        ) : (
          'Delete'
        )}
      </button>
    </li>
  );
}
