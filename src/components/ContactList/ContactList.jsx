import { useDispatch, useSelector } from 'react-redux';
import { List, Item, Btn } from './ContactList.styled';
import { selectFilterContacts } from 'redax/contacts/selectors';
import { deleteContact } from 'redax/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilterContacts);

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Btn>
        </Item>
      ))}
    </List>
  );
};
