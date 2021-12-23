import { ThemeProvider } from '@material-ui/styles';
import { render } from '@testing-library/react';
import { theme } from './styles/config';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter } from 'react-router-dom';

const ReduxThemeProvider: React.FC = ({ children }) => {
   return (
      <Provider store={store}>
         <PersistGate persistor={persistor} loading={<div>loading...</div>}>
            <SnackbarProvider maxSnack={3}>
               <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </SnackbarProvider>
         </PersistGate>
      </Provider>
   );
};

function providerRender(ui: any, options?: any) {
   return render(ui, { wrapper: ReduxThemeProvider, ...options });
}

const renderWithRouter = (ui: any, { route = '/' } = {}) => {
   return render(ui, { wrapper: BrowserRouter });
};

export * from '@testing-library/react';

export { providerRender, renderWithRouter };
