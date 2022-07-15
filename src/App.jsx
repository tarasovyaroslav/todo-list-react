import React, { useReducer } from 'react';
import styled from 'styled-components';

import Title from './components/Title';
import TodosList from './components/TodosList';
import Filters from './components/Filters';
import AddForm from './components/AddForm';
import Footer from './components/Footer';

const AppStyled = styled.div`
  width: 40%;
  min-width: 350px;
  padding: 15px;
  font-size: 1.25rem;
  position: relative;
`;

const initialState = {
  todos: [],
  /*filteredTodos: [],*/ filter: 'all',
};

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { ...state, todos: [...state.todos, action.payload] };

    case 'check':
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return todo.id === action.payload
            ? { ...todo, checked: !todo.checked }
            : todo;
        }),
      };

    case 'remove':
      return {
        ...state,
        todos: state.todos.filter(
          (todo) => todo.id !== action.payload
        ),
      };

    case 'filter':
      return {
        ...state,
        /*filteredTodos: state.todos.filter((todo) => {
          switch (action.payload) {
            case 'completed':
              return todo.checked;
            case 'uncompleted':
              return !todo.checked;
            default:
              return true;
          }
        }),*/
        filter: action.payload,
      };

    case 'clear':
      const ok = confirm(
        'Are you sure? It beyond retrieve remove all completed todos.'
      );

      if (!ok) {
        return { ...state };
      }

      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.checked),
      };

    default:
      throw new Error();
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const messages = {
    all: 'Create some todos!',
    completed: 'No completed todos.',
    uncompleted: 'Well done! All completed.',
  };

  return (
    <AppStyled>
      <Title>TODO</Title>
      <Filters
        filter={state.filter}
        changeFilter={(filter) =>
          dispatch({ type: 'filter', payload: filter })
        }
      />
      <AddForm
        addTodo={(todo) => dispatch({ type: 'add', payload: todo })}
      />
      <TodosList
        filter={state.filter}
        todos={/*state.filteredTodos*/ state.todos}
        checkTodo={(id) => dispatch({ type: 'check', payload: id })}
        removeTodo={(id) => dispatch({ type: 'remove', payload: id })}
      />
      <Footer clear={() => dispatch({ type: 'clear' })} />
    </AppStyled>
  );
};

export default App;
