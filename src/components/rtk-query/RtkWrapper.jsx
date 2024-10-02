import React, { useState } from 'react'
import { Provider } from 'react-redux';
import Todo from './components/Todos';
import store from './store/index';

function RtkWrapper() {
  const [showTodos, setShowTodos] = useState(false);

  const handleShowTodos = function() {
    setShowTodos(!showTodos);
  }
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