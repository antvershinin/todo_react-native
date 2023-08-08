import React, {useEffect} from 'react';
import {listByFilter} from '../../redux/selectors';
import ToDoItem from './TodoItem';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native';
import {getTododsDB} from '../../supabase/TodoApi';
import {fillState} from '../../redux/todoSlice';

type Props = {};

const ToDoList: React.FC<Props> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await getTododsDB();
        dispatch(fillState(response.data));
        console.log('USE EFFECT');
      } catch (err) {
        console.log(err);
      }
    };
    getTodos();
  }, []);
  const tasks = useSelector(listByFilter);

  return (
    <FlatList
      data={tasks}
      keyExtractor={item => item.id}
      renderItem={({item}) => <ToDoItem task={item} />}
    />
  );
};

export default ToDoList;
