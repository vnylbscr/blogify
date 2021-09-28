import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Button, Grid, makeStyles, TextField } from '@material-ui/core';
import { WithUndefined } from '../../types/utils';

const useStyles = makeStyles((theme) => ({
   root: {
      marginTop: 100,
      heigth: 600,
      width: '100%',
   },
   titleInput: {
      margin: '20px 0px',
   },
   editor: {
      //   padding: 15,
   },
}));

type EditorState = WithUndefined<string>;

export interface AddPostState {
   editorValue?: EditorState;
   postTitle?: string;
}

interface Props {
   onSubmitPost: (value: AddPostState) => void;
}

const MarkDownEditor = (props: Props) => {
   const { onSubmitPost } = props;
   const classes = useStyles();
   const [state, setState] = useState<AddPostState>();
    
   return (
      <div className={classes.root}>
         <TextField
            variant='outlined'
            label='Enter your post title'
            onChange={(e) =>
               setState((prevState) => ({
                  ...prevState,
                  postTitle: e.target.value,
               }))
            }
            className={classes.titleInput}
            fullWidth
            color='primary'
         />
         <MDEditor
            toolbarHeight={80}
            height={500}
            className={classes.editor}
            value={state?.editorValue}
            onChange={(value) =>
               setState((prevState) => ({
                  ...prevState,
                  editorValue: value,
               }))
            }
         />
         <div style={{ padding: '50px 0 0 0' }} />

         {state?.editorValue?.trim().length !== 0 && (
            <Grid container xs={12} justifyContent='flex-end' alignItems='center'>
               <Button
                  variant='contained'
                  color='primary'
                  onClick={() => {
                     if (state?.editorValue?.trim().length !== 0) {
                        onSubmitPost({
                           ...state,
                        });
                     }
                  }}
                  size='large'
               >
                  Add Post
               </Button>
            </Grid>
         )}
      </div>
   );
};

export default MarkDownEditor;
