import {
  cleanup,
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Radio from '../src/components/Radio';

// describe('Radio button tests', () => {
afterEach(cleanup);

it('renders Radio component without children and props', () => {
  render(<Radio />);
  expect(screen.getByRole('radio')).toBeInTheDocument();
});

it('must have label text and be checked', () => {
  render(<Radio defaultChecked>label</Radio>);
  expect(screen.getByText('label')).toBeInTheDocument();
  expect(screen.getByRole('radio')).toBeChecked();
});

it('must be unchecked', () => {
  render(<Radio />);
  expect(screen.getByRole('radio')).not.toBeChecked();
});

it('onChange works', () => {
  const onChange = jest.fn();
  // const user = userEvent.setup();

  render(
    <>
      <Radio name="group" value="1" onChange={() => onChange()}>
        button1
      </Radio>
      <Radio
        name="group"
        value="2"
        defaultChecked
        onChange={() => onChange()}
      >
        button2
      </Radio>
    </>
  );

  // user.click(screen.getByLabelText('button1'));
  expect(screen.getByLabelText('button1')).not.toBeChecked();
  // userEvent.click(screen.getByLabelText('button1'));
  fireEvent.click(screen.getByLabelText('button1'));
  expect(screen.getByLabelText('button1')).toBeChecked();
  expect(onChange).toHaveBeenCalledTimes(1);
});
// });
