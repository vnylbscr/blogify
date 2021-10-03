import React, { Fragment } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Button, Grid, makeStyles, IconButton, TextField, Typography } from '@material-ui/core';
import { WithUndefined } from '../../types/utils';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useTheme } from '@material-ui/styles';
import { Controller, useForm } from 'react-hook-form';
import PublishIcon from '@material-ui/icons/Publish';
import ReactSelect from 'react-select';
import BackupIcon from '@material-ui/icons/Backup';

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
   textArea: {
      fontSize: '1.4rem',
      padding: 10,
   },
   mt10: {
      margin: '15px 0px',
      padding: '5px 10px',
   },
   previewImage: {
      width: '100%',
      maxHeight: '500px',
      marginTop: 20,
      zIndex: 10,
      transition: 'all 0.7s',
      '&:hover': {
         transform: 'scale(1.1)',
         cursor: 'pointer',
      },
   },
   bold: {
      fontWeight: 'bold',
   },
}));

type EditorState = WithUndefined<string>;

type Options = {
   label: string;
   value: string;
};
const ITEMS = [
   {
      label: 'programming',
      value: 'programming',
   },
   {
      label: 'art',
      value: 'art',
   },
   {
      label: 'javascript',
      value: 'javascript',
   },
   {
      label: 'frontend-development',
      value: 'frontend-development',
   },
   {
      label: 'react.js',
      value: 'react.js',
   },
   {
      label: 'backend-development',
      value: 'backend-development',
   },
   {
      label: 'mobile-development',
      value: 'mobile-development',
   },
   {
      label: 'through life',
      value: 'through life',
   },
   {
      label: 'travis scott is my man',
      value: 'travis scott is my man',
   },
   {
      label: 'typescript',
      value: 'typescript',
   },
   {
      label: 'react-native',
      value: 'react-native',
   },
];
export interface FormState {
   content?: EditorState;
   title?: string;
   image?: File;
   imageUrl?: any;
   subtitle?: string;
   category: Array<Options>;
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
      handleSubmit,
      watch,
      control,
      reset,
      formState: { errors, isValid },
   } = useForm<FormState>({
      mode: 'all',
      defaultValues: {},
   });
   const onClickAddFile = () => {
      document.getElementById('post_image')?.click();
   };

   const onChangeFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
         const file = event.target.files[0];
         setValue('image', file);
         if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = (e) => {
               setValue('imageUrl', [reader.result]);
            };
         }
      }
   };

   const onSubmit = (data: FormState) => {
      console.log(data.subtitle);
      onSubmitPost(data);
      reset({
         content: '',
         title: '',
         subtitle: '',
         image: undefined,
         imageUrl: '',
         category: [],
      });
   };

   console.log(watch('category'));

   return (
      <div className={classes.root}>
         <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container xs={12} style={{ marginBottom: 30 }}>
               <Grid container item xs={12} sm={4} alignItems='center' justifyContent='center'>
                  <Grid item xs={12}>
                     <TextField
                        variant='outlined'
                        label='enter your post title*'
                        {...register('title', {
                           required: true,
                           validate: (value) => {
                              return !!value?.trim();
                           },
                        })}
                        className={classes.titleInput}
                        fullWidth
                        color='primary'
                        error={Boolean(errors.title)}
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        variant='outlined'
                        label='enter post subtitle*'
                        {...register('subtitle', {
                           required: true,
                           validate: (value) => {
                              return !!value?.trim();
                           },
                        })}
                        className={classes.titleInput}
                        fullWidth
                        color='primary'
                        error={Boolean(errors.subtitle)}
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <Typography
                        variant='body2'
                        color='textSecondary'
                        style={{ padding: '8px 0px', color: errors?.category && 'red' }}
                     >
                        select category
                     </Typography>
                     <Controller
                        control={control}
                        name='category'
                        rules={{ required: true }}
                        render={({ field }) => (
                           <ReactSelect
                              placeholder='please select a category'
                              styles={{
                                 input: (base) => ({
                                    ...base,
                                    height: '44px',
                                 }),
                                 placeholder: (base) => ({
                                    ...base,
                                    fontSize: '1rem',
                                    color: theme.colorPalette.primary.light,
                                 }),
                              }}
                              options={ITEMS}
                              {...field}
                              isMulti
                              isSearchable
                           />
                        )}
                     />
                  </Grid>
                  <input onChange={onChangeFiles} hidden id='post_image' type='file' />
                  <Grid item xs={12} className={classes.mt10}>
                     {watch().image ? (
                        <Grid container className={classes.mt10} alignItems='center'>
                           <CheckCircleIcon style={{ color: 'rebeccapurple', paddingRight: 10 }} fontSize='large' />
                           <Typography variant='h6' className={classes.bold} color='primary'>
                              {watch('image')?.name}
                           </Typography>
                           <IconButton style={{ paddingLeft: 10 }} size='medium' onClick={onClickAddFile}>
                              <BackupIcon color='secondary' fontSize='large' />
                           </IconButton>
                        </Grid>
                     ) : (
                        <Button onClick={onClickAddFile} variant='text' startIcon={<PublishIcon />} color='primary'>
                           add image for post
                        </Button>
                     )}
                  </Grid>
               </Grid>
               <Grid item container xs={12} sm={8} alignItems='center' justifyContent='center'>
                  <Grid container xs={12} justifyContent='center' alignItems='center'>
                     {watch('image') ? (
                        <Fragment>
                           <Grid container xs={9}>
                              <img src={watch('imageUrl')} alt='mert' className={classes.previewImage} />
                           </Grid>
                        </Fragment>
                     ) : (
                        <Grid justifyContent='center' container>
                           <Typography variant='h6' color='textSecondary'>
                              please select an image for this post
                           </Typography>
                        </Grid>
                     )}
                  </Grid>
                  <Grid container xs={9} justifyContent='flex-end' alignItems='center' style={{ paddingTop: 30 }}>
                     <Button
                        type='submit'
                        disabled={!isValid || watch('content')?.trim()?.length === 0 || !watch('image')}
                        variant='contained'
                        color='primary'
                        size='large'
                        fullWidth
                     >
                        share 👏
                     </Button>
                  </Grid>
               </Grid>
            </Grid>

            <Typography variant='h6' style={{ padding: '20px 0px' }}>
               content of the blog
            </Typography>
            <MDEditor
               textareaProps={{
                  placeholder: 'enter your blog content here ✍️',
               }}
               enableScroll={false}
               highlightEnable
               toolbarHeight={80}
               minHeight={200}
               height={500}
               className={classes.editor}
               value={watch('content')}
               onChange={(value) => setValue('content', value, { shouldDirty: true })}
               tabSize={3}
            />
            <div style={{ padding: '50px 0 0 0' }} />
         </form>
      </div>
   );
};

export default MarkDownEditor;
