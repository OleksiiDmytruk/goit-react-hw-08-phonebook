import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redax/auth/operations';
import { selectUser } from 'redax/auth/selectors';
import { Btn, Wrap, Text } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser).name;
  return (
    <Wrap>
      <Text>Hello, {user}</Text>
      <Btn onClick={() => dispatch(logOut())}>Logout</Btn>
    </Wrap>
  );
};
