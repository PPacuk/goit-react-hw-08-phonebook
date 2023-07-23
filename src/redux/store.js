import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './slices/contactSlice';
import { filterReducer } from './slices/filterSlice';
import { authReducer } from './slices/authSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user'],
};

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    auth: persistReducer(authConfig, authReducer),
  },
});

export const persistor = persistStore(store);
