import { useDispatch, useSelector } from 'react-redux';
import { List, Item, Btn } from './ContactList.styled';
import { selectFilterContacts } from 'redax/selectors';
import { deleteContact } from 'redax/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilterContacts);

  return (
    <List>
      {contacts.map(({ id, name, phone }) => (
        <Item key={id}>
          {name}: {phone}
          <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Btn>
        </Item>
      ))}
    </List>
  );
};
