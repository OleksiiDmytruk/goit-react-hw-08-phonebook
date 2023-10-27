import { useSelector } from 'react-redux';
import { List } from './ContactList.styled';
import { selectFilterContacts } from 'redax/contacts/selectors';

import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = () => {
  const contacts = useSelector(selectFilterContacts);
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};
