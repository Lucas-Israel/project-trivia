import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const loginHelper = (name, email) => {
  let nameInput = screen.getByTestId('input-player-name');
  let emailInput = screen.getByTestId('input-gravatar-email');
  let btnPlay = screen.getByTestId('btn-play');
  
  expect(btnPlay).toBeDisabled();
  
  userEvent.type(nameInput, name);
  userEvent.type(emailInput, email);
  
  btnPlay = screen.getByTestId('btn-play');
  
  expect(btnPlay.innerHTML).toBe('Play');
  
  userEvent.click(btnPlay);
}

export default loginHelper;
