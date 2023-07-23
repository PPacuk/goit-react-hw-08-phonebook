import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { selectAuthToken } from 'redux/selectors/auth';
import propTypes from 'prop-types';

export const PrivateRoute = ({ component: Component, fallback = '/' }) => {
  const token = useSelector(selectAuthToken);
  if (token === null) {
    return <Navigate to={fallback} />;
  }
  return (
    Component
  )
};
PrivateRoute.propTypes = {
  fallback: propTypes.string.isRequired,
  component: propTypes.element,
};
