import ToDoList from './src/components/TodoList/TodoList';
import Toolbar from './src/components/Toolbar/Toolbar';
import {StyleSheet, SafeAreaView} from 'react-native';
import Header from './src/components/Header/Header';
import {useEffect} from 'react';
import {getTododsDB} from './src/supabase/TodoApi';
import {useDispatch, useSelector} from 'react-redux';
import {ITask, fillState} from './src/redux/todoSlice';
import Filter from './src/components/Filter/Filter';
import {filterSelect} from './src/redux/selectors';
import {PostgrestSingleResponse} from '@supabase/supabase-js';

function Main(): JSX.Element {
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

export default Main;
