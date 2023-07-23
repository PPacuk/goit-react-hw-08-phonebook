import { Routes, Route } from 'react-router';
import { ContactsPage } from './Pages/ContactsPage';
import { PrivateRoute } from './Routes/PrivateRoute';
import { AuthPage } from './Pages/AuthPage';
import { Home } from './Pages/HomePage';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Login } from './Pages/LoginPage';
import { Register } from './Pages/RegisterPage';

export const App = () => {
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
