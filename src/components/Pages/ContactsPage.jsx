import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import Section from "components/Section/Section";


export const ContactsPage = () => {

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
