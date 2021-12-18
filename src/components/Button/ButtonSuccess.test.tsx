import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import ButtonSuccess from './ButtonSuccess';

describe('button sucess test ', () => {
   test('should render button correctly and click multiple times', () => {
      const onClickMock = jest.fn();

      render(<ButtonSuccess label='confirm account' onClick={onClickMock} />);

      expect(screen.getByText(/confirm/i)).toBeInTheDocument();

      const button = screen.getByRole('button');
      userEvent.click(button);

      expect(onClickMock).toHaveBeenCalled();

      userEvent.dblClick(button);

      expect(onClickMock).toHaveBeenCalledTimes(3);
   });
});
