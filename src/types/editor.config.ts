import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';

/**
 * Custom `Element` for the editable component
 * @todo buraya bir kaç tip daha eklenecek
 */
type CustomStringType =
   | 'paragraph'
   | 'block-quote'
   | 'bulleted-list'
   | 'heading-one'
   | 'heading-two'
   | 'list-item'
   | 'numbered-list';
export type CustomElement = { type: CustomStringType; children: CustomText[] };

// Keys
export type CustomFontKeys = 'bold' | 'italic' | 'underline' | 'code';
// Font Styles
export interface CustomFontStyle {
   bold: boolean;
   italic: boolean;
   underline: boolean;
   code: boolean;
}

export interface CustomText extends Partial<CustomFontStyle> {
   text?: string;
}

declare module 'slate' {
   interface CustomTypes {
      Editor: BaseEditor & ReactEditor;
      Element: CustomElement;
      Text: CustomText;
   }
}
