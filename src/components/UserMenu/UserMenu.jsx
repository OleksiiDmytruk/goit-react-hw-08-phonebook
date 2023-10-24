import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redax/auth/operations';
import { selectUser } from 'redax/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch;
  const user = useSelector(selectUser);
  return (
    <div>
      <p>{user}</p>
      <button
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </button>
    </div>
  );
};
