import {useDispatch, useSelector} from 'react-redux';
import {completeAll, clearAll} from '../../redux/todoSlice';
import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {listByFilter} from '../../redux/selectors';

type Props = {};

const Toolbar: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const onPressCompleteAll = () => {
    dispatch(completeAll());
  };

  const onPressDeleteAll = () => {
    dispatch(clearAll());
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
