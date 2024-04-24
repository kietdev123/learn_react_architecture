// App.js


import './App.css';
import IntrestRate from './components/Interest/InterestRate.js'
import store from './store/store.js'
import { Provider } from 'react-redux'
import  Counter  from '@/pages/Counter.js';
import AppRouter from './routes/app.route.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './utils/i18n.js';

function App() {
  return (
    <Provider store={store}>
       <ToastContainer />
      <AppRouter></AppRouter>

    </Provider>
  );
}

export default App;