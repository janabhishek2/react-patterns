import React, { useState } from 'react'
import { Provider } from 'react-redux';
import Todo from './components/Todos';
import store from './store/index';
// import apiSlice from './slices/apiSlice';

function RtkWrapper() {
  const [showTodos, setShowTodos] = useState(false);

  const handleShowTodos = function() {
    setShowTodos(!showTodos);
  };

  // pre-fetch todo/2 data

  // store.dispatch(apiSlice.endpoints.getTodo.initiate(2));

  return (
    <Provider store={store}>
        {
          showTodos && <Todo />
        }
        <button onClick={handleShowTodos}>Show todos!</button>
    </Provider>
  )
}

export default RtkWrapper