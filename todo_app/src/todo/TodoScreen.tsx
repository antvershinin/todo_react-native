import store from './redux/store';
import {Provider} from 'react-redux';
import TodoApp from './TodoApp';

function TodoScreen(): JSX.Element {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default TodoScreen;
