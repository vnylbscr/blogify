export declare namespace ModuleTheme {
  export interface Primary {
    main: string;
    dark: string;
    light: string;
  }
  export interface ColorPalette {
    primary: Primary;
    secondary: string;
  }
  export interface Workspace {
    appBarHeight: number;
  }
  export interface RootObject {
    colorPalette: ColorPalette;
    workspace: Workspace;
  }
}
