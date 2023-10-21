import { ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Toaster } from 'react-hot-toast';
import { Section } from './Section/Section';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redax/operations';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <ContactFilter title="Find contacts by name" />
        <ContactList />
      </Section>
      <GlobalStyle />
      <Toaster />
    </Layout>
  );
};
