import { Routes, Route } from 'react-router';
import { ContactsPage } from './Pages/ContactsPage';
import { PrivateRoute } from './Routes/PrivateRoute';
import { Home } from './Pages/HomePage';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Login } from './Pages/LoginPage';
import { Register } from './Pages/RegisterPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/operations/auth';

export const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
dispatch(refreshUser())
  }, [dispatch])
  
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/contacts"
          element={<PrivateRoute fallback="/" component={<ContactsPage />} />}
        />
      </Route>
    </Routes>
  );
};
