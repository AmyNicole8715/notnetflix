import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { tmdbApi } from '../services/moviedb';



export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
});
