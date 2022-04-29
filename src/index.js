import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import {createStore,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {reducer} from './reducer'

const store = createStore(
  reducer, 
  composeWithDevTools(applyMiddleware(thunk))
  )

ReactDOM.render(
    <Provider store={store} >
      <App />
    </Provider>,
  document.getElementById('root')
);

