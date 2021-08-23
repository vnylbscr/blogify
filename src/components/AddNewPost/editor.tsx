// @refresh reset
import { Container, Toolbar } from '@material-ui/core';
import React, { FC, useCallback, useMemo, useState } from 'react';
import { createEditor, Descendant } from 'slate';
import { Editable, RenderElementProps, RenderLeafProps, Slate, withReact, useSlate } from 'slate-react';
import { initialValue } from '../../lib/editorInitialValue';
import { CustomElement, CustomFontStyle } from '../../types/editor.config';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
interface Props {}

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
   return (
      <Container
         style={{
            backgroundColor: 'white',
            width: '100%',
            height: '700px',
            marginTop: 20,
            overflow: 'auto',
            padding: 20,
         }}
      >
         <Slate value={value} onChange={(value) => setValue(value)} editor={editor}>
            <Toolbar variant='dense'>
               <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label='text formatting'>
                  <ToggleButton value='bold' aria-label='bold'>
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
