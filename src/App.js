// App.js

import logo from './logo.svg';
import './App.css';
import IntrestRate from './components/Interest/InterestRate.js'
import store from './store/store.js'
import { Provider } from 'react-redux'
import { Counter } from '@/pages/Counter.js';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Counter />
    </div>
    </Provider>
  );
}

export default App;