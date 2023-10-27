import { deleteContact } from 'redax/contacts/operations';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Modal } from 'components/Modal/Modal';
import { Btn, Item } from 'components/ContactList/ContactList.styled';
import { useDispatch } from 'react-redux';

export const ContactItem = ({ id, name, number }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  return (
    <Item>
      {name}: {number}
      <div>
        <Btn type="button" onClick={() => setShowModal(true)}>
          Сhange
        </Btn>
        <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </Btn>
      </div>
      {showModal &&
        createPortal(
          <Modal
            id={id}
            name={name}
            number={number}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
    </Item>
  );
};
