import React from 'react';
import {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

type Props = {
  onSubmit: (value: string) => void;
  placeholder?: string;
  defaultValue?: string;
  style?: {};
};

const Form: React.FC<Props> = props => {
  const [currentValue, setCurrentValue] = useState(props.defaultValue || '');

  const handleSubmit = () => {
    props.onSubmit(currentValue);

    setCurrentValue('');
  };

  return (
    <View>
      <TextInput
        value={currentValue}
        style={props.style ? props.style : styles.input}
        onChangeText={text => setCurrentValue(text)}
        onSubmitEditing={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 250,
    height: 50,
    paddingLeft: 10,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: 'white',
    fontSize: 25,
  },
});

export default Form;
