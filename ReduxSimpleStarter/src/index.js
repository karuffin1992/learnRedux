import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

// React is its own library.
// Redux is its own library.
// React-Redux bridges them together.

// A reducer is a function that returns a piece of the application's state.
// Can have many different reducers, as there are many different states
// in an application.


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
