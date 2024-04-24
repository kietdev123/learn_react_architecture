// App.js


import './App.css';
import IntrestRate from './components/Interest/InterestRate.js'
import store from './store/store.js'
import { Provider } from 'react-redux'
import  Counter  from '@/pages/Counter.js';
import AppRouter from './routes/app.route.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <AppRouter></AppRouter>

    </Provider>
  );
}

export default App;