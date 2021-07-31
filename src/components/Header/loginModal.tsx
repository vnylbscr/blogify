import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../BaseComponents/Dialog';
import Input from '../BaseComponents/Input/Input/Input';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import { Button, Grid, Typography } from '@material-ui/core';
import { useMutation } from '@apollo/client';
import { USER_LOGIN_MUTATION } from '../../queries/authorize';
import { LoginVariables, Login_login } from '../../queries/__generated__/Login';
import { useDispatch } from 'react-redux';
import { LOGIN } from '../../actions/user';
import { CircularProgress } from '@material-ui/core';
import { Popover } from 'material-ui';

interface Props {
   open: boolean;
   onCloseModal: () => void;
}
const LoginModal = (props: Props) => {
   const { open, onCloseModal } = props;
   const [login, { data, error, loading }] = useMutation<Login_login>(USER_LOGIN_MUTATION);
   const dispatch = useDispatch();
   const {
      control,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<LoginVariables>({
      mode: 'all',
   });
   const onSubmit = async (data: LoginVariables) => {
      // TODO run register mutation
      console.log(data);
      const { data: responseData } = await login({ variables: { ...data } });

      localStorage.setItem('token', JSON.stringify(responseData?.token));
   };
   return (
      <Modal
         open={open}
         dialogTitle="Blogify'a Giriş Yap"
         dialogContentTitle="Blogify'a kayıt ol ve bütün özelliklerden faydalan"
         // className={classes.modal}
         width={500}
         onClose={() => {
            // Reset Form
            reset();
            onCloseModal();
         }}
      >
         <form onSubmit={handleSubmit(onSubmit)}>
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
               fullWidth
               type='submit'
               color='primary'
               endIcon={loading && <CircularProgress color='primary' size={24} />}
            >
               Giriş Yap
            </Button>
            {error && (
               <Typography style={{ color: 'red', marginTop: 10, textAlign: 'center' }} variant='h6'>
                  {error.message}
               </Typography>
            )}
         </form>
      </Modal>
   );
};

export default LoginModal;
