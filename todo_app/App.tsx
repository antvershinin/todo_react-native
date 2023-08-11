import store from './src/redux/store';
import {Provider} from 'react-redux';
import Main from './Main';
import Calculator from './src/calculator/Calculator';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      {/* <Main /> */}
      <Calculator />
    </Provider>
  );
}

export default App;
