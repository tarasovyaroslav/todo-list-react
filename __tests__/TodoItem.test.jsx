import {
  cleanup,
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TodoItem from '../src/components/TodoItem';

// describe('Radio button tests', () => {
afterEach(cleanup);

it('renders TodoItem component', () => {
  render(<TodoItem data-testid="item" />);
  expect(screen.getByTestId('item')).toBeInTheDocument();
});

it('render with props', () => {
  const checkTodo = jest.fn();
  const removeTodo = jest.fn();

  render(
    <TodoItem
      data-testid="item"
      id={1}
      checkTodo={checkTodo}
      checked={true}
      text={'some todo'}
      removeTodo={removeTodo}
    />
  );
  expect(screen.getByRole('checkbox')).toBeInTheDocument();
  expect(screen.getByRole('checkbox')).toBeChecked();
  expect(screen.getByText('some todo')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
});

it('checkTodo works', () => {
  const checkTodo = jest.fn();
  const removeTodo = jest.fn();

  render(
    <TodoItem
      data-testid="item"
      id={1}
      // checked={true}
      text={'some todo'}
      checkTodo={() => checkTodo()}
      removeTodo={() => removeTodo()}
    />
  );
  // userEvent.click(screen.getByRole('checkbox'));
  fireEvent.click(screen.getByRole('checkbox'));
  fireEvent.click(screen.getByRole('checkbox'));
  expect(screen.getByRole('checkbox')).not.toBeChecked();
  expect(checkTodo).toBeCalledTimes(2);
});

it('removeTodo works', () => {
  const checkTodo = jest.fn();
  const removeTodo = jest.fn();

  render(
    <TodoItem
      data-testid="item"
      id={1}
      // checked={true}
      text={'some todo'}
      checkTodo={() => checkTodo()}
      removeTodo={() => removeTodo()}
    />
  );
  // userEvent.click(screen.getByRole('button'));
  fireEvent.click(screen.getByRole('button'));
  expect(removeTodo).toBeCalledTimes(1);
});
// });
