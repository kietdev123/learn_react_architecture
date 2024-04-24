// App.js


import './App.css';
import IntrestRate from './components/Interest/InterestRate.js'

import { Provider } from 'react-redux'
import  Counter  from '@/pages/Counter.js';
import AppRouter from './routes/app.route.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './utils/i18n.js';
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './store/store.js'
// console.log(AppStore)
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

       <ToastContainer />
      <AppRouter></AppRouter>
      </PersistGate>

    </Provider>
  );
}

export default App;