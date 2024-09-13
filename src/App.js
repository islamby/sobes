import React from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoForm />
      <FilterButtons />
      <TodoList />
    </div>
  );
}

export default App;
