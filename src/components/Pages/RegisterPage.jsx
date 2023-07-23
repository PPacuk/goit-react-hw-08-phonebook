import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from 'redux/operations/auth';
import { selectAuthToken } from 'redux/selectors/auth';

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectAuthToken);
  useEffect(() => {
    if (token !== null) {
      navigate('/contacts');
    }
  }, [token, navigate]);

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

  return (
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
  );
};
