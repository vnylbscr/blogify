import { indigo, purple } from '@material-ui/core/colors';
import createTheme, { Theme } from '@material-ui/core/styles/createTheme';
import { ModuleTheme } from './module.theme';

declare module '@material-ui/styles' {
   interface DefaultTheme extends MyTheme {}
}

declare module '@material-ui/core/styles/createTheme' {
   interface ThemeOptions extends MyTheme {}
}

export interface MyTheme extends ModuleTheme.RootObject, Theme {}

export const theme: any = createTheme({
   typography: {
      fontFamily: ['Open Sans', 'MontSerrat', 'sans-serif'].join(','),
   },
   palette: {
      primary: indigo,
      secondary: purple,
   },
   colorPalette: {
      primary: {
         main: '#3c5186',
         dark: '#1e2842',
         light: '#91a2ce',
      },
      secondary: '#F6A9A9',
   },
   workspace: {
      appBarHeight: 60,
      borderRadius: {
         small: 8,
         medium: 15,
         large: 28,
      },
   },
});
