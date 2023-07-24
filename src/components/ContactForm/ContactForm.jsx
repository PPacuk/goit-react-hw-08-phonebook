import css from './ContactForm.module.css';
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { selectContactsList } from 'redux/selectors/contacts';
import { addContact } from 'redux/operations/contacts';



export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contactList = useSelector(selectContactsList);
  const dispatch = useDispatch();

  const handleNameInput = e => {
    setName(e.target.value);
  };

  const handleNumberInput = e => {
    setNumber(e.target.value);
  };

  const isOnList = contactList
    .map(contact => contact.name.toLocaleLowerCase())
    .includes(name.toLocaleLowerCase());

  const handleSubmit = e => {
    e.preventDefault();
    if (isOnList) {
      Notify.failure(`${name} is already in contact list!`);
    } else {
      dispatch(addContact({ name, number }));
      Notify.success(`${name} added to contact list!`);
      setName('');
      setNumber('');
    }
  };

  return (
      <form className={css.formWrapper} onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          className={css.formInput}
          placeholder="f.e Mateusz Bambik"
          value={name}
          onChange={handleNameInput}
        />

        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[.\s]?\(?\d{1,3}?\)?[.\s]?\d{1,4}[.\s]?\d{1,4}[.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.formInput}
          placeholder="666 666 666"
          value={number}
          onChange={handleNumberInput}
        />
        <button type="submit" className={css.formBnt}>
          Add contact
        </button>
      </form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
