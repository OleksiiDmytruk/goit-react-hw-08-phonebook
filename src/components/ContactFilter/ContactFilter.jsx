import { useDispatch, useSelector } from 'react-redux';
import { Label } from './ContactFilter.styled';
import { changeFilter } from 'redax/contacts/filterSlice';
import { selectFilter } from 'redax/contacts/selectors';

export const ContactFilter = ({ title }) => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <Label>
      {title}
      <input
        type="text"
        value={filter}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      />
    </Label>
  );
};
