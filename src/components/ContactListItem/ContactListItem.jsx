import { useDeleteContactMutation } from 'redux/contacts/itemsOperations';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { FiUser, FiPhone } from 'react-icons/fi';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';
export default function ContactListItem({ id, name, phone }) {
  const [deleteContact, { isLoading: isDeliting }] = useDeleteContactMutation();
  const deleteListItem = id => {
    deleteContact(id);
    toast.success(`Contact ${name} successfuly delete`);
  };
  return (
    <>
      <li className={s.item}>
        <p className={s.graf}>
          <FiUser />
          {name}
        </p>
        :
        <p className={s.graf}>
          <FiPhone /> {phone}
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
    </>
  );
}

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
