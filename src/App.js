import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Image from "./Components/Image";
import { createStore ,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { Provider } from 'react-redux'
// import counterReducer from './reducers/counterReducer'
import userReduer from './reducers/userReducer'
import MyProvider from './Providers/MyProvider';
import Routing from './Routes/Route';
const store = createStore(userReduer,composeWithDevTools(applyMiddleware(thunk)))
function App() {
  return (<MyProvider><Provider store={store}>
    <div className="App">
        <Routing />
       </div></Provider></MyProvider>
  );
}

export default App;