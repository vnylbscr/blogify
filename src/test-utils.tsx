import { ThemeProvider } from '@material-ui/styles';
import { render } from '@testing-library/react';
import { theme } from './styles/config';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

const ReduxThemeProvider: React.FC = ({ children }) => {
   return (
      <Provider store={store}>
         <PersistGate persistor={persistor} loading={<div>loading...</div>}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
         </PersistGate>
      </Provider>
   );
};

function providerRender(ui: any, options?: any) {
   return render(ui, { wrapper: ReduxThemeProvider, ...options });
}

export * from '@testing-library/react';

export { providerRender };
