import {useDispatch} from 'react-redux';
import {markComplete, deleteTask, changeText} from '../../redux/todoSlice';
import Form from '../Form/Form';
import {useState} from 'react';
import React from 'react';
import {ITask} from '../../redux/todoSlice';
import {StyleSheet, Text, View} from 'react-native';
import {deleteTodoDB, editTodoDB} from '../../supabase/TodoApi';

type Props = {
  task: ITask;
};

const ToDoItem: React.FC<Props> = ({task}) => {
  const [editStatus, setEditStatus] = useState(false);

  const dispatch = useDispatch();
  const {id, text, completed} = task;

  const onSubmitChangeText = async (newText: string) => {
    try {
      await editTodoDB({
        id,
        completed,
        text: newText,
      });
      dispatch(changeText({id, text: newText}));
      setEditStatus(false);
    } catch (err) {
      console.log(err);
    }
  };

  const onPressComplete = async () => {
    try {
      await editTodoDB({
        id,
        completed: !completed,
        text,
      });
      dispatch(markComplete({id}));
    } catch (err) {
      console.log(err);
    }
  };

  const onPressDelete = async () => {
    try {
      await deleteTodoDB(id);
      dispatch(deleteTask({id}));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.task}>
      <Text onPress={onPressComplete}>✔</Text>

      {editStatus ? (
        <Form
          style={styles.form_edit}
          defaultValue={task.text}
          onSubmit={onSubmitChangeText}
        />
      ) : (
        <Text
          style={task.completed ? styles.task_complete : styles.task_text}
          onLongPress={() => setEditStatus(true)}>
          {task.text}
        </Text>
      )}
      <Text onPress={onPressDelete}>X</Text>
    </View>
  );
};

export default ToDoItem;

const styles = StyleSheet.create({
  task: {
    alignItems: 'center',
    width: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    height: 50,
    marginBottom: 20,
  },
  task_complete: {
    textDecorationLine: 'line-through',
    fontSize: 35,
  },
  task_text: {
    fontSize: 40,
  },
  form_edit: {
    width: 200,
    height: 50,
    paddingLeft: 10,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: 'green',
  },
});
