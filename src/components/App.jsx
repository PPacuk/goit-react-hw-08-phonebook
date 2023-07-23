import { Routes, Route } from 'react-router';
import { ContactsPage } from './Pages/ContactsPage';
import { PrivateRoute } from './Routes/PrivateRoute';
import { AuthPage } from './Pages/AuthPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route
        path="/contacts"
        element={<PrivateRoute fallback="/" component={<ContactsPage />} />}
      />
    </Routes>
  );
};
