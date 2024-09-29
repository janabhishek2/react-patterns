import React from 'react'
import { Provider } from 'react-redux';
import Todo from './components/Todos';
import store from './store/index';

function RtkWrapper() {
  return (
    <Provider store={store}>
        <Todo />
    </Provider>
  )
}

export default RtkWrapper