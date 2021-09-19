import React, { FC, useCallback, useState } from 'react';
import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { MyTheme } from '../../styles/config';
import TitleIcon from '@material-ui/icons/Title';
import Input from '../BaseComponents/Input/Input';
import { REQUIRED_FIELD } from '../../lib/constants';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import clsx from 'clsx';
import { useDropzone } from 'react-dropzone';
type Fn = (data: Form) => void;

interface Props {
   onAcceptForm: Fn;
}

interface Form {
   postTitle: string;
   postSubtitle: string;
   postContent: string;
}

const useStyles = makeStyles((theme: MyTheme) => ({
   main: {
      backgroundColor: theme.colorPalette.primary.light,
      padding: theme.spacing(2),
   },
   input: {},
   fileBox: {
      padding: theme.spacing(2),
      border: '1px solid' + theme.colorPalette.secondary,
      borderRadius: theme.workspace.borderRadius.medium,
   },
   margin10: {
      margin: '14px 0',
   },
}));
const AddNewPostForm: FC<Props> = ({ onAcceptForm }) => {
   const classes = useStyles();
   const onDrop = useCallback((acceptedFiles) => {
      // Do something with the files
      console.log('accepted', acceptedFiles);
      setFiles(acceptedFiles[0]);
   }, []);
   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
   const {
      control,
      formState: { errors, isValid },
      handleSubmit,
   } = useForm<Form>({
      mode: 'all',
   });
   const [files, setFiles] = useState<File>();
   const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
      const fileList = e.target.files;
      if (!fileList) return;
      setFiles(fileList[0]);
   };
   const onClickImage = () => document.getElementById('postUploadImage')?.click;
   const onSubmit = (data: Form) => onAcceptForm(data);
   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <Grid container className={classes.main}>
            <Grid xs={12} item className={clsx(classes.input, classes.margin10)}>
               <Input
                  control={control}
                  label='Başlık'
                  error={errors.postTitle}
                  rules={{
                     required: REQUIRED_FIELD,
                  }}
                  name='postTitle'
                  startIcon={<TitleIcon />}
                  type='text'
               />
            </Grid>
            <Grid xs={12} item className={clsx(classes.input, classes.margin10)}>
               <Input
                  control={control}
                  label='Alt Başlık'
                  error={errors.postSubtitle}
                  rules={{
                     // minLength: {
                     //    value: 20,
                     //    message: 'Post alt başlığı en az 20 karakterden oluşmalıdır!',
                     // },
                     required: REQUIRED_FIELD,
                  }}
                  name='postSubtitle'
                  startIcon={<TitleIcon />}
                  type='text'
               />
            </Grid>
            <Grid xs={12} item className={clsx(classes.input, classes.margin10)}>
               <Input
                  control={control}
                  label='İçerik'
                  error={errors.postContent}
                  rules={
                     {
                        // minLength: {
                        //    value: 25,
                        //    message: 'Post başlığı en az 10 karakterden oluşmalıdır!',
                        // },
                     }
                  }
                  name='postContent'
                  isMultiline
                  maxRows={5}
                  minRows={3}
               />
            </Grid>
            <Grid xs={12} item className={clsx(classes.input, classes.margin10)}>
               <input
                  type='file'
                  accept='image/*'
                  id='postUploadImage'
                  onChange={onChangeFile}
                  style={{ display: 'none' }}
               />
               <Grid container {...getRootProps()} xs={12} alignItems='center' justifyContent='space-between'>
                  <Button variant='text' color='secondary' size='large' onClick={onClickImage}>
                     Resim Yükle yada Buraya resim sürükle
                  </Button>
                  <input {...getInputProps()} />
                  {isDragActive ? (
                     <Typography variant='h4' color='primary'>
                        Dosyalarınızı buraya sürükleyebilirsiniz.
                     </Typography>
                  ) : (
                     <></>
                  )}
                  {files && (
                     <Grid container xs={6} className={classes.fileBox}>
                        <CheckCircleIcon style={{ color: '#B5FFD9', marginRight: 15 }} fontSize='large' />
                        <Typography variant='h6' color='textSecondary'>
                           {files.name}
                        </Typography>
                     </Grid>
                  )}
               </Grid>
            </Grid>
            <Button fullWidth type='submit' variant='contained' color='primary' size='large'>
               Post Oluştur
            </Button>
         </Grid>
      </form>
   );
};

export default AddNewPostForm;
