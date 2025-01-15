import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { reducer } from './reducers/reducer';

const mainReducer = combineReducers({
  state: reducer,
}); //в последствии изменить название ключа и мб название редьюсера

export const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false, // Отключить ImmutableStateInvariantMiddleware
      serializableCheck: false, // Отключить SerializableStateInvariantMiddleware
    }),
});
