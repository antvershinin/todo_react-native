import React from 'react';
import {listByFilter} from '../../redux/selectors';
import ToDoItem from './TodoItem';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native';

type Props = {};

const ToDoList: React.FC<Props> = () => {
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
