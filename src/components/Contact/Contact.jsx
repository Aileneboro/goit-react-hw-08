import { TiUser, TiPhone } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactContainer}>
      <div>
        <p>
          <TiUser />
          {name}
        </p>
        <p>
          <TiPhone />
          {number}
        </p>
      </div>
      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
