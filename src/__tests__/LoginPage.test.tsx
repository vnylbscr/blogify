import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import LoginPage from '../modules/Auth/Login';
import { providerRender } from '../test-utils';

describe('Login Page Test', () => {
   const mockData: any[] = [];

   test('should validate inputs and click to submit button', () => {
      const history = createMemoryHistory();

      const { container } = providerRender(
         <MockedProvider mocks={mockData}>
            <Router history={history}>
               <LoginPage />
            </Router>
         </MockedProvider>
      );

      const loginButton = screen.getByText('Login');
      const registerButton = screen.getByText(/Register now/i);
      const inputEmail = container.querySelector("input[name ='email']") as HTMLInputElement;
      const inputPassword = container.querySelector("input[name ='password']") as HTMLInputElement;

      userEvent.click(registerButton);

      userEvent.type(inputEmail, 'mert@merto.com');
      userEvent.type(inputPassword, '123123');

      expect(inputEmail.value).toEqual('mert@merto.com');
      expect(inputPassword.value).toEqual('123123');

      userEvent.click(loginButton);
   });
});
