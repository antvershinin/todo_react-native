import {StyleSheet, SafeAreaView} from 'react-native';
import Header from './src/components/Header/Header';
import store from './src/redux/store';
import {Provider, useDispatch} from 'react-redux';
import ToDoList from './src/components/TodoList/TodoList';
import Toolbar from './src/components/Toolbar/Toolbar';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.app}>
        <Header />
        <ToDoList />
        <Toolbar />
      </SafeAreaView>
    </Provider>
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

export default App;
