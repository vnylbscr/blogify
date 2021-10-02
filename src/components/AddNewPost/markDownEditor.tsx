import React, { Fragment, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import { WithUndefined } from '../../types/utils';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useTheme } from '@material-ui/styles';
import { NullLiteral } from 'typescript';

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
   mt10: {
      margin: '15px 0px',
      padding: '5px 10px',
   },
}));

type EditorState = WithUndefined<string>;

export interface AddPostState {
   editorValue?: EditorState;
   postTitle?: string;
   image?: File;
   imageUrl?: any;
   subtitle?: string;
}

interface Props {
   onSubmitPost: (value: AddPostState) => void;
}

const MarkDownEditor = (props: Props) => {
   const { onSubmitPost } = props;
   const theme = useTheme();
   const classes = useStyles();
   const [state, setState] = useState<AddPostState>();

   const onClickAddFile = () => {
      document.getElementById('post_image')?.click();
   };

   const onChangeFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
         const file = event.target.files[0];
         setState((prevState) => ({
            ...prevState,
            image: file,
         }));
         const reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onloadend = (e) => {
            setState((prev) => ({
               ...prev,
               imageUrl: [reader.result],
            }));
         };
      }
   };

   return (
      <div className={classes.root}>
         <TextField
            variant='outlined'
            label='enter your post title'
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
         <input onChange={onChangeFiles} hidden id='post_image' type='file' accept='image/*' />
         <Grid container justifyContent='space-between' xs={12} className={classes.mt10}>
            <Button onClick={onClickAddFile} variant='contained' color='primary' size='medium'>
               add image for post
            </Button>
            {state?.image && (
               <Fragment>
                  <Grid container xs={3}>
                     <CheckCircleIcon style={{ color: theme.palette.success.main }} fontSize='default' />
                     <Typography color='primary'>{state.image.name}</Typography>
                     <img src={state?.imageUrl} alt='mert' style={{ width: 300, height: 200, marginTop: 20 }} />
                  </Grid>
               </Fragment>
            )}
         </Grid>
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
                  add post
               </Button>
            </Grid>
         )}
      </div>
   );
};

export default MarkDownEditor;
