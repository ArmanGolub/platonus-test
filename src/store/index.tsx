import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import { todoApi } from '../api/todoApi';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    [todoApi.reducerPath]: todoApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
}); 

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 