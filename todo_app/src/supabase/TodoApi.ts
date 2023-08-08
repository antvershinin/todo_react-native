import {supabase} from './supabase';
import {ITask} from '../redux/todoSlice';

export const addTodoDB = (text: string) => {
  return supabase.from('todo').insert({text}).select();
};

export const getTododsDB = () => {
  return supabase.from('todo').select('*');
};

export const deleteAllTodosDB = () => {
  return supabase.from('todo').delete();
};
