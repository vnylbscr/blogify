import React, { FC, useState } from 'react';
import { Button, Grid, makeStyles } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { MyTheme } from '../../styles/config';
import TitleIcon from '@material-ui/icons/Title';
import Input from '../BaseComponents/Input/Input/Input';
import { REQUIRED_FIELD } from '../../lib/constants';

interface Props {}

interface Form {
   postTitle: string;
   postSubtitle: string;
   postContent: string;
}

const useStyles = makeStyles((theme: MyTheme) => ({
   main: {
      backgroundColor: theme.colorPalette.primary.light,
   },
   input: {},
}));
const AddNewPostForm: FC<Props> = (props) => {
   const classes = useStyles(props);
   const {
      control,
      formState: { errors },
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
   const onClickImage = () => document.getElementById('postUploadImage')?.click();
   return (
      <Grid container className={classes.main}>
         <Grid xs={12} item className={classes.input}>
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
         <Grid xs={12} item className={classes.input}>
            <Input
               control={control}
               label='Alt Başlık'
               error={errors.postSubtitle}
               rules={{
                  minLength: {
                     value: 20,
                     message: 'Post alt başlığı en az 20 karakterden oluşmalıdır!',
                  },
                  required: REQUIRED_FIELD,
               }}
               name='postSubtitle'
               startIcon={<TitleIcon />}
               type='text'
            />
         </Grid>
         <Grid xs={12} item className={classes.input}>
            <Input
               control={control}
               label='İçerik'
               error={errors.postContent}
               rules={{
                  minLength: {
                     value: 25,
                     message: 'Post başlığı en az 10 karakterden oluşmalıdır!',
                  },
               }}
               name='postTitle'
               startIcon={<TitleIcon />}
               type='text'
               isMultiline
               maxRows={4}
            />
         </Grid>
         <Grid xs={12} item className={classes.input}>
            <input
               type='file'
               accept='image/*'
               id='postUploadImage'
               onChange={onChangeFile}
               style={{ display: 'none' }}
            />
            <Button variant='contained' onClick={onClickImage}>
               Resim Yükle
            </Button>
         </Grid>
      </Grid>
   );
};

export default AddNewPostForm;
