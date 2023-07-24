import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import Section from "components/Section/Section";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/operations/auth";
import { fetchContacts } from "redux/operations/contacts";

export const ContactsPage = () => {
 const dispatch = useDispatch();

//  useEffect(() => {
//    dispatch(fetchContacts());
//  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <div>
          <Filter />
          <ContactList />
        </div>
      </Section>
    </>
  );
};
