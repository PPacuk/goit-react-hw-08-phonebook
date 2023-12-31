import css from './ContactList.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  findContact,
  selectContactsList,
  selectError,
  selectLoading,
} from 'redux/selectors/contacts';
import { deleteContact, fetchContacts } from 'redux/operations/contacts';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const contactCard = useSelector(selectContactsList);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filter = useSelector(findContact);
  const dispatch = useDispatch();

   useEffect(() => {
     dispatch(fetchContacts());
   }, [dispatch]);


  return (
    <ul className={css.contactsList}>
      {loading && <Loader />}
      {error && <p> {error}</p>}
      {contactCard
        .filter(contact =>
          contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        )
        .map(({ id, name, number }) => (
          <li key={id}>
            {name} : {number}
            <button
              className={css.contactsBtn}
              onClick={() => dispatch(deleteContact(id))}
            >
              delete
            </button>
          </li>
        ))}
    </ul>
  );
};
