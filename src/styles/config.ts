import createTheme, { Theme } from '@material-ui/core/styles/createTheme';
import { ModuleTheme } from './ModuleTheme';

declare module '@material-ui/styles' {
   interface DefaultTheme extends MyTheme {}
}

declare module '@material-ui/core/styles/createTheme' {
   interface ThemeOptions extends MyTheme {}
}

export interface MyTheme extends ModuleTheme.RootObject, Theme {}

export const theme = createTheme({
   typography: {
      fontFamily: ['Open Sans', 'MontSerrat', 'sans-serif'].join(','),
   },
   colorPalette: {
      primary: {
         main: '#3c5186',
         dark: '#1e2842',
         light: '#91a2ce',
      },
      secondary: '#F6B8B8',
   },
   workspace: {
      appBarHeight: 60,
   },
});
