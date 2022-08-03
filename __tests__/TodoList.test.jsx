import {
  cleanup,
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TodosList from '../src/components/TodosList';

// describe('Radio button tests', () => {
afterEach(cleanup);

it('renders TodoList component', () => {
  render(<TodosList />);
  expect(screen.getByRole('list')).toBeInTheDocument();
});

it('renders without items', () => {
  render(<TodosList todos={[]} />);
  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getByText('Create some todos!')).toBeInTheDocument();
});

it('renders with items', () => {
  render(
    <TodosList
      todos={[
        { id: 1, text: 'item1', checked: true },
        { id: 2, text: 'item2', checked: false },
        { id: 3, text: 'item3', checked: true },
      ]}
    />
  );
  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getAllByText(/item*/)).toHaveLength(3);
});

it('filter todos', () => {
  render(
    <TodosList
      filter="completed"
      todos={[
        { id: 1, text: 'item1', checked: true },
        { id: 2, text: 'item2', checked: false },
        { id: 3, text: 'item3', checked: true },
      ]}
    />
  );
  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.queryAllByText(/item*/)).toHaveLength(2);
  expect(screen.queryByText(/item1/)).toBeInTheDocument();
  expect(screen.queryByText(/item2/)).not.toBeInTheDocument();
  expect(screen.queryByText(/item3/)).toBeInTheDocument();
});

it('check and remove todos', () => {
  const checkTodo = jest.fn();
  const removeTodo = jest.fn();

  render(
    <TodosList
      filter="all"
      todos={[
        { id: 1, text: 'item1', checked: true },
        { id: 2, text: 'item2', checked: false },
        { id: 3, text: 'item3', checked: true },
      ]}
      checkTodo={() => checkTodo()}
      removeTodo={() => removeTodo()}
    />
  );
  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.queryAllByText(/item*/)).toHaveLength(3);
  fireEvent.click(screen.queryByLabelText('item1'));
  expect(checkTodo).toBeCalledTimes(1);
  fireEvent.click(screen.queryAllByText('X')[0]);
  fireEvent.click(screen.queryAllByText('X')[1]);
  expect(removeTodo).toBeCalledTimes(2);
});

// });
