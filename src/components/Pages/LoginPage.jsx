import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/operations/auth';
import { selectAuthToken } from 'redux/selectors/auth';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectAuthToken);
  useEffect(() => {
    if (token !== null) {
      navigate('/contacts');
    }
  }, [token, navigate]);

  const handleLogin = ev => {
    ev.preventDefault();
    const form = ev.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };
  return (
    <form onSubmit={handleLogin}>
      <fieldset>
        <legend>Log In</legend>
        <div>
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button type="submit">Log In</button>
        </div>
      </fieldset>
    </form>
  );
};
