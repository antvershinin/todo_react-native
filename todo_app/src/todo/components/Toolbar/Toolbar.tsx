import {useDispatch, useSelector} from 'react-redux';
import {completeAll, clearAll, fillState} from '../../redux/todoSlice';
import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {listByFilter} from '../../redux/selectors';
import {completeAllTodosDB, deleteAllTodosDB} from '../../supabase/TodoApi';

type Props = {};

const Toolbar: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(listByFilter);
  const onPressCompleteAll = async () => {
    const tumbler = tasks.some(el => !el.completed);
    try {
      await completeAllTodosDB(tumbler);
      dispatch(completeAll());
    } catch (err) {
      console.log(err);
    }
  };

  const onPressDeleteAll = async () => {
    try {
      await deleteAllTodosDB();
      dispatch(clearAll());
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={style.toolbar}>
      <Button title="Complete All" onPress={onPressCompleteAll} />
      <Button title="Clear All" onPress={onPressDeleteAll} />
    </View>
  );
};

const style = StyleSheet.create({
  toolbar: {
    width: 250,
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginBottom: 20,
  },
});
export default Toolbar;
