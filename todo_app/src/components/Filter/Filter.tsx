import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {setFilter} from '../../redux/todoSlice';
import {useDispatch} from 'react-redux';

type Props = {};

const Filter: React.FC<Props> = () => {
  const dispatch = useDispatch();

  return (
    <View style={style.filter}>
      <Button
        title="All"
        onPress={() => dispatch(setFilter({filterName: ''}))}
      />
      <Button
        title="Active"
        onPress={() => dispatch(setFilter({filterName: 'false'}))}
      />
      <Button
        title="Completed"
        onPress={() => dispatch(setFilter({filterName: 'true'}))}
      />
    </View>
  );
};

const style = StyleSheet.create({
  filter: {
    width: 250,
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginBottom: 20,
  },
});
export default Filter;
