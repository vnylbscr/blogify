import { ThemeProvider } from '@material-ui/core';
import { theme } from '../src/styles/config';
import { addDecorator } from '@storybook/react';

export const parameters = {
   actions: { argTypesRegex: '^on[A-Z].*' },
   controls: {
      matchers: {
         color: /(background|color)$/i,
         date: /Date$/,
      },
   },
};

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
