import {supabase} from './supabase';
import {ITask} from '../redux/todoSlice';

export const addTodoDB = (text: string) => {
  return supabase.from('todo').insert({text}).select();
};

export const getTododsDB = (filter?: string) => {
  if (!filter) {
    return supabase.from('todo').select('*');
  } else return supabase.from('todo').select('*').eq('completed', filter);
};

export const deleteAllTodosDB = () => {
  return supabase.from('todo').delete().neq('id', '0');
};

export const completeAllTodosDB = (tumbler: boolean) => {
  return supabase.from('todo').update({completed: tumbler}).neq('id', '0');
};

export const editTodoDB = (props: ITask) => {
  return supabase
    .from('todo')
    .update({completed: props.completed, text: props.text})
    .eq('id', props.id);
};

export const deleteTodoDB = (id: string) => {
  return supabase.from('todo').delete().eq('id', id);
};
