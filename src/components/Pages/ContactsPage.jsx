import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import css from './ContactPage.module.css'


export const ContactsPage = () => {

  return (
    <div className={css.contactContainer}>
        <ContactForm />
        <div>
          <Filter />
          <ContactList />
        </div>
    </div>
  );
};
