import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn, register } from 'redux/operations/auth';
import { selectAuthToken } from 'redux/selectors/auth';

export const AuthPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(selectAuthToken)
    useEffect(() => {
        if (token !== null) {
            navigate('/contacts')
        }
    },[token, navigate])

  const handleRegister = ev => {
    ev.preventDefault();
    const form = ev.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

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
    <div>
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

      <form onSubmit={handleRegister}>
        <fieldset>
          <legend>Sign In</legend>
          <div>
            <input type="text" placeholder="Name" name="name" />
            <input type="email" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <button type="submit">Sign In</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
