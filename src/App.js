import { Provider } from 'react-redux'

import './App.scss';
import Cart from './Components/Cart/Cart';
import store from './Redux/store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Cart />
        </div>
    </Provider>
  );
}

export default App;
