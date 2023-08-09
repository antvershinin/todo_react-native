import Form from '../Form/Form';
import {addTask} from '../../redux/todoSlice';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTodoDB} from '../../supabase/TodoApi';

type Props = {};

const Header: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (text: string) => {
    try {
      const response = await addTodoDB(text);
      const newTask = response.data;
      dispatch(addTask(...newTask));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.header_text}>To Do App</Text>
      </View>
      <Form onSubmit={handleSubmit} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 10,
    marginTop: 20,
  },
  header_text: {
    fontSize: 50,
  },
});
