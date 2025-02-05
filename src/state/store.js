import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { userReducer } from './reducers/userReducer';

const mainReducer = combineReducers({
  user: userReducer,
});

export const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false, // Отключить ImmutableStateInvariantMiddleware
      serializableCheck: false, // Отключить SerializableStateInvariantMiddleware
    }),
});
