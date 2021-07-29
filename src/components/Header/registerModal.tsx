import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../BaseComponents/Dialog';
import Input from '../BaseComponents/Input/Input/Input';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import { classicNameResolver } from 'typescript';
import { makeStyles } from '@material-ui/styles';
import { useMutation } from '@apollo/client';
// import { USER_REGISTER_MUTATION } from '../../queries/authorize';
import { Backdrop, Button, CircularProgress, Grid } from '@material-ui/core';
import { MyTheme } from '../../styles/config';
import { REGISTER } from '../../actions/user';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { RegisterVariables } from '../../queries/__generated__/Register';

// Form Props

// Component Props
interface Props {
   open: boolean;
   onCloseModal: () => void;
}

const useStyles = makeStyles((theme: MyTheme) => ({
   modal: {},
   backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
   },
}));
const RegisterModal = (props: Props) => {
   const { open, onCloseModal } = props;
   const dispatch = useDispatch();
   const { enqueueSnackbar } = useSnackbar();
   // const [register, { data, error, loading }] = useMutation(USER_REGISTER_MUTATION);
   const classes = useStyles();
   const {
      control,
      handleSubmit,
      reset,
      formState: { errors, isValid },
   } = useForm<RegisterVariables>();
   const onSubmit = (data: RegisterVariables) => {
      // TODO run register mutation
      // register({
      //    variables: {
      //       ...data,
      //    },
      // })
      //    .then(({ data: { register } }) => {
      //       enqueueSnackbar('Giriş Yaptınız', {
      //          variant: 'success',
      //       });
      //       dispatch({ type: REGISTER, payload: register });
      //    })
      //    .catch((error) => console.log({ error }));
   };
   return (
      <Modal
         open={open}
         dialogTitle='Kayıt Ol'
         dialogContentTitle="Blogify'a kayıt ol ve bütün özelliklerden faydalan"
         className={classes.modal}
         width={600}
         height={600}
         onClose={() => {
            reset();
            onCloseModal();
         }}
      >
         <form onSubmit={handleSubmit(onSubmit)}>
            <Grid xs={12} container>
               <Input
                  name='username'
                  error={errors.username}
                  fullWidth
                  startIcon={<AccountCircleIcon />}
                  label='Kullanıcı Adı'
                  control={control}
                  rules={{
                     required: 'Bu alan gereklidir',
                     minLength: {
                        value: 5,
                        message: 'Kullanıcı adınız en 5 karakterden oluşmalıdır',
                     },
                  }}
               />
               <Input
                  name='email'
                  error={errors.email}
                  fullWidth
                  startIcon={<EmailIcon />}
                  label='E-mail'
                  control={control}
                  rules={{
                     required: 'Bu alan gereklidir',
                     pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Lütfen geçerli bir e-mail giriniz',
                     },
                  }}
               />
               <Input
                  name='password'
                  error={errors.password}
                  fullWidth
                  startIcon={<LockIcon />}
                  label='Şifre'
                  control={control}
                  rules={{
                     required: 'Bu alan gereklidir',
                     minLength: {
                        value: 6,
                        message: 'Şifreniz en az 6 karakterden oluşmalıdır',
                     },
                  }}
                  type='password'
               />
               <Button
                  variant='contained'
                  type='submit'
                  fullWidth
                  color='secondary'
                  style={{ marginTop: 30 }}
                  // disabled={loading}
               >
                  {/* {loading ? 'Gönderiliyor...' : 'Kayıt Ol'} */}
               </Button>
               {/* {error && <p style={{ color: 'red' }}>{error.message}</p>} */}
               {/* <Backdrop className={classes.backdrop} open={loading}>
                  <CircularProgress size={60} color='secondary' />
               </Backdrop> */}
            </Grid>
         </form>
      </Modal>
   );
};

export default RegisterModal;
