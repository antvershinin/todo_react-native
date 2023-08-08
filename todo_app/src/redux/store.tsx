import {configureStore} from '@reduxjs/toolkit';
import tasksReducer from './todoSlice';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
