import { ThemeProvider } from '@material-ui/styles';
import { render } from '@testing-library/react';
import { theme } from './styles/config';

export const MaterialThemeProvider: React.FC = ({ children }) => {
   return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

function materialRender(ui: any, options?: any) {
   return render(ui, { wrapper: MaterialThemeProvider, ...options });
}

export * from '@testing-library/react';

export { materialRender };
