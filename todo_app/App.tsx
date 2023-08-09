import store from './src/redux/store';
import {Provider} from 'react-redux';
import Main from './Main';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
