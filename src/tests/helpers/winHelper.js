import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const winHelper = async (wins) => {
  for (let index = 0; index < wins; index += 1 ) {
    let correctAnw = await waitFor(() => screen.getByTestId('correct-answer'));
    userEvent.click(correctAnw);
    let nextBtn = screen.getByTestId('btn-next');
    userEvent.click(nextBtn);
  }
  if (wins < 5) {
    for (let index = 0; index < (5 - wins); index += 1 ) {
      let correctAnw = await waitFor(() => screen.getByTestId('wrong-answer-0'));
      userEvent.click(correctAnw);
      let nextBtn = screen.getByTestId('btn-next');
      userEvent.click(nextBtn);
    }
  }
}

export default winHelper;
