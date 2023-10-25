import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redax/contacts/operations';
import { useEffect } from 'react';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactList } from 'components/ContactList/ContactList';

export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <ContactFilter title="Find contacts by name" />
        <ContactList />
      </Section>
    </>
  );
};
export default Contacts;
