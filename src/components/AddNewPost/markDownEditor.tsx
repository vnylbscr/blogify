import React, { Fragment, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import { WithUndefined } from '../../types/utils';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useTheme } from '@material-ui/styles';
import { useForm } from 'react-hook-form';

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

export interface FormState {
   editorValue?: EditorState;
   postTitle?: string;
   image?: File;
   imageUrl?: any;
   subtitle?: string;
}

interface Props {
   onSubmitPost: (value: FormState) => void;
}

const MarkDownEditor = (props: Props) => {
   const { onSubmitPost } = props;
   const theme = useTheme();
   const classes = useStyles();

   const {
      register,
      setValue,
      getValues,
      handleSubmit,
      watch,
      formState: { errors, isValid },
   } = useForm<FormState>({
      mode: 'onBlur',
      defaultValues: {},
   });
   const onClickAddFile = () => {
      document.getElementById('post_image')?.click();
   };

   console.log(watch());
   const onChangeFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
         const file = event.target.files[0];
         setValue('image', file);
         const reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onloadend = (e) => {
            setValue('imageUrl', [reader.result]);
         };
      }
   };

   const onSubmit = (data: FormState) => {
      console.log(data.subtitle);
      onSubmitPost(data);
   };

   return (
      <div className={classes.root}>
         <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container xs={12}>
               <Grid container item xs={12} sm={6}>
                  <Grid item xs={12}>
                     <TextField
                        variant='outlined'
                        label='enter your post title*'
                        {...register('postTitle', {
                           required: true,
                        })}
                        className={classes.titleInput}
                        fullWidth
                        color='primary'
                        error={Boolean(errors.postTitle)}
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        variant='outlined'
                        label='enter post subtitle*'
                        {...register('subtitle', {
                           required: true,
                        })}
                        className={classes.titleInput}
                        fullWidth
                        color='primary'
                        error={Boolean(errors.subtitle)}
                     />
                  </Grid>
               </Grid>
               <Grid item container xs={6}>
                  <input onChange={onChangeFiles} hidden id='post_image' type='file' accept='image/*' />
                  <Button onClick={onClickAddFile} variant='text' color='primary'>
                     add image for post
                  </Button>
                  <Grid container>
                     {getValues('image') && (
                        <Fragment>
                           <Grid container xs={3}>
                              <CheckCircleIcon style={{ color: theme.palette.success.main }} fontSize='default' />
                              <Typography color='primary'>{getValues('image')?.name}</Typography>
                              <img
                                 src={getValues('imageUrl')}
                                 alt='mert'
                                 style={{ width: 300, height: 200, marginTop: 20 }}
                              />
                           </Grid>
                        </Fragment>
                     )}
                  </Grid>
               </Grid>
            </Grid>

            <MDEditor
               toolbarHeight={80}
               height={500}
               className={classes.editor}
               value={getValues('editorValue')}
               onChange={(value) => {
                  setValue('editorValue', value);
               }}
            />
            <div style={{ padding: '50px 0 0 0' }} />
            {getValues().editorValue?.trim.length !== 0 && (
               <Grid container xs={12} justifyContent='flex-end' alignItems='center'>
                  <Button type='submit' disabled={!isValid} variant='contained' color='primary' size='large'>
                     add post
                  </Button>
               </Grid>
            )}
         </form>
      </div>
   );
};

export default MarkDownEditor;
