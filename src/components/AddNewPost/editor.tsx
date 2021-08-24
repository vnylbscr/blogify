// @refresh reset
import { Container, Toolbar } from '@material-ui/core';
import React, { FC, useCallback, useMemo, useState } from 'react';
import { createEditor, Descendant, Editor, BaseEditor, Transforms, Element as SlateElement } from 'slate';
import { Editable, RenderElementProps, RenderLeafProps, Slate, withReact, useSlate, ReactEditor } from 'slate-react';
import { initialValue } from '../../lib/editorInitialValue';
import { CustomElement, CustomFontStyle, CustomText } from '../../types/editor.config';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
interface Props {}
const LIST_TYPES = ['numbered-list', 'bulleted-list'];
const AddPostEditor: FC<Props> = (props) => {
   const editor = useMemo(() => withReact(createEditor()), []);
   //    const initialValue: CustomElement = [];
   const renderElement = useCallback((props: RenderElementProps) => {
      return <Element {...props} />;
   }, []);
   const renderLeaf = useCallback((props: RenderLeafProps) => {
      return <Leaf {...props} />;
   }, []);
   const [formats, setFormats] = useState<string[]>();
   const [value, setValue] = useState<Descendant[]>(initialValue);
   const handleFormat = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
      setFormats(newFormats);
   };
   console.log(value);
   return (
      <Container
         style={{
            backgroundColor: 'white',
            width: '100%',
            height: '700px',
            marginTop: 20,
            overflow: 'auto',
            marginBottom: '20px',
            padding: 20,
         }}
      >
         <Slate value={value} onChange={(value) => setValue(value)} editor={editor}>
            <Toolbar variant='dense'>
               <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label='text formatting'>
                  <ToggleButton
                     value='bold'
                     onClick={(e) => {
                        e.preventDefault();
                        toggleBlock(editor, 'italic');
                        console.log('caaa');
                     }}
                     aria-label='bold'
                  >
                     <FormatBoldIcon />
                  </ToggleButton>
                  <ToggleButton value='italic' aria-label='italic'>
                     <FormatItalicIcon />
                  </ToggleButton>
                  <ToggleButton value='underline' aria-label='underlined'>
                     <FormatUnderlinedIcon />
                  </ToggleButton>
               </ToggleButtonGroup>
            </Toolbar>
            <Editable
               renderElement={renderElement}
               renderLeaf={renderLeaf}
               placeholder='Bir şeyler yazın'
               spellCheck
               autoFocus
            />
         </Slate>
      </Container>
   );
};
const toggleBlock = (editor: any, format: any) => {
   const isActive = isBlockActive(editor, format);
   const isList = LIST_TYPES.includes(format);
   console.log('format is here', format);
   Transforms.unwrapNodes(editor, {
      match: (n: any) =>
         LIST_TYPES.includes((!Editor.isEditor(n) && SlateElement.isElement(n) && n.type).valueOf().toString()),
      split: true,
   });
   const newProperties: Partial<SlateElement> = {
      type: isActive ? 'paragraph' : isList ? 'list-item' : format,
   };
   Transforms.setNodes(editor, newProperties);

   if (!isActive && isList) {
      const block = { type: format, children: [] };
      Transforms.wrapNodes(editor, block);
   }
};

const toggleMark = (editor: any, format: any) => {
   const isActive = isMarkActive(editor, format);
   if (isActive) {
      Editor.removeMark(editor, format);
   } else {
      Editor.addMark(editor, format, true);
   }
};
const isMarkActive = (editor: any, format: any) => {
   const marks: any = Editor.marks(editor);
   return marks ? marks[format] === true : false;
};
const isBlockActive = (editor: any, format: any) => {
   const [match] = Editor.nodes(editor, {
      match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
   });
   return !!match;
};

type ToggleProps = {
   value: string;
   icon?: React.ReactNode;
   format: any;
};
const MyToggleButton = ({ value, format, icon }: ToggleProps) => {
   const editor = useSlate();
   return (
      <ToggleButton value={value} selected={isBlockActive(editor, format)}>
         {icon}
      </ToggleButton>
   );
};
const Element = (props: RenderElementProps) => {
   const { attributes, children, element } = props;
   switch (element.type) {
      case 'block-quote':
         return <blockquote {...attributes}>{children}</blockquote>;
      case 'bulleted-list':
         return <ul {...attributes}>{children}</ul>;
      case 'heading-one':
         return <h1 {...attributes}>{children}</h1>;
      case 'heading-two':
         return <h2 {...attributes}>{children}</h2>;
      case 'list-item':
         return <li {...attributes}>{children}</li>;
      case 'numbered-list':
         return <ol {...attributes}>{children}</ol>;
      default:
         return <p {...attributes}>{children}</p>;
   }
};

const Leaf = (props: RenderLeafProps) => {
   let { leaf, attributes, children } = props;
   if (leaf.bold) {
      children = <strong>{children}</strong>;
   }
   if (leaf.code) {
      children = <code>{children}</code>;
   }
   if (leaf.italic) {
      children = <em>{children}</em>;
   }
   if (leaf.underline) {
      children = <u>{children}</u>;
   }
   return <span {...attributes}>{children}</span>;
};
export default AddPostEditor;
