import React, { useReducer } from 'react';
import styled from 'styled-components';

import Title from './components/Title';
import TodosList from './components/TodosList';
import Filters from './components/Filters';
import AddForm from './components/AddForm';
import Footer from './components/Footer';
// import Alert from './components/Alert';

const AppStyled = styled.div`
  width: 40%;
  min-width: 350px;
  padding: 15px;
  font-size: 1.25rem;
  position: relative;
`;

const initialState = {
  todos: [],
  filter: 'all',
  // alert: { display: false, text: '', type: 'info', value: false },
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
        filter: action.payload,
      };

    case 'clear':
      const ok = confirm(
        'Are you sure? It beyond retrieve remove all completed todos.'
      );

      if (!ok) {
        return { ...state };
      }
      // if (!state.alert.value) return { ...state };

      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.checked),
      };

    // case 'alert/show':
    //   if (!state.alert.display)
    //     return {
    //       ...state,
    //       alert: {
    //         display: true,
    //         text: action.payload.text,
    //         type: action.payload.type,
    //         value: false,
    //       },
    //     };
    //   return { ...state };

    // case 'alert/hide':
    //   console.log(action.payload);
    //   if (state.alert.display)
    //     return {
    //       ...state,
    //       alert: {
    //         display: false,
    //         text: '',
    //         type: 'info',
    //         value: action.payload,
    //       },
    //     };
    //   return { ...state };

    default:
      throw new Error();
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppStyled>
      {/* <Alert
        text={state.alert.text}
        display={state.alert.display}
        type={state.alert.type}
        show={(text) =>
          dispatch({ type: 'alert/show', payload: text })
        }
        hide={(value) =>
          dispatch({ type: 'alert/hide', payload: value })
        }
      /> */}
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
        todos={state.todos}
        checkTodo={(id) => dispatch({ type: 'check', payload: id })}
        removeTodo={(id) => dispatch({ type: 'remove', payload: id })}
      />
      <Footer clear={() => dispatch({ type: 'clear' })} />
    </AppStyled>
  );
};

export default App;
