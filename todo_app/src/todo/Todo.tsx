import ToDoList from './components/TodoList/TodoList';
import Toolbar from './components/Toolbar/Toolbar';
import {StyleSheet, SafeAreaView} from 'react-native';
import Header from './components/Header/Header';
import {useEffect} from 'react';
import {getTododsDB} from './supabase/TodoApi';
import {useDispatch, useSelector} from 'react-redux';
import {ITask, fillState} from './redux/todoSlice';
import Filter from './components/Filter/Filter';
import {filterSelect} from './redux/selectors';
import {PostgrestSingleResponse} from '@supabase/supabase-js';

function Todo(): JSX.Element {
  const dispatch = useDispatch();

  const filter = useSelector(filterSelect);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response: PostgrestSingleResponse<ITask[]> = await getTododsDB(
          filter,
        );
        if (response.data) {
          dispatch(fillState(response.data));
        }
      } catch (err) {
        console.log(err);
      }
    };
    getTodos();
  }, [filter]);

  return (
    <SafeAreaView style={styles.app}>
      <Header />
      <Filter />
      <ToDoList />
      <Toolbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 20,
    backgroundColor: '#454545',
  },
});

export default Todo;
