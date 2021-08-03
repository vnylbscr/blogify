import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../BaseComponents/Dialog';
import Input from '../BaseComponents/Input/Input/Input';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import { Button, Grid, Link, Typography } from '@material-ui/core';
import { useMutation } from '@apollo/client';
import { USER_LOGIN_MUTATION } from '../../queries/authorize';
import { useDispatch } from 'react-redux';
import { LOGIN } from '../../actions/user';
import { CircularProgress } from '@material-ui/core';
import { Popover } from 'material-ui';
import { LoginMutation, LoginMutationVariables } from '../../queries/__generated__/LoginMutation';
import { useHistory } from 'react-router-dom';
import { styled } from '@material-ui/styles';

const StyledButton = styled(({ color, ...props }) => <Button classes={{ label: 'label', root: 'root' }} {...props} />)(
   () => ({
      root: {
         backgroundColor: 'orange',
      },
      '& .label': {
         color: 'red',
      },
   })
);
interface Props {
   open: boolean;
   onCloseModal: () => void;
}
const LoginModal = (props: Props) => {
   const { open, onCloseModal } = props;
   const [login, { data, error, loading }] = useMutation<LoginMutation>(USER_LOGIN_MUTATION, {
      // onError: (error) => console.log('ULAAA  NOLİY', error),
   });
   const dispatch = useDispatch();
   const history = useHistory();
   const {
      control,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<LoginMutationVariables>({
      mode: 'all',
   });
   const onSubmit = async (data: LoginMutationVariables) => {
      // TODO run register mutation
      login({ variables: { ...data } })
         .then(({ data }) => {
            if (data?.login) {
               localStorage.setItem('token', data?.login.token || '');
               dispatch({
                  type: LOGIN,
                  payload: data?.login,
               });
               history.push('/');
            }
         })
         .catch((e) => {
            console.log(e);
         });
   };
   return (
      <Modal
         open={open}
         dialogTitle="Blogify'a Giriş Yap"
         dialogContentTitle="Blogify'a kayıt ol ve bütün özelliklerden faydalan"
         // className={classes.modal}
         width={500}
         height={500}
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
            <Grid container justifyContent='center' alignItems='center' style={{ padding: 20 }}>
               <Typography>Henüz hesabın yok mu?</Typography>
               <Link style={{ marginLeft: 10 }}>Hemen oluştur</Link>
            </Grid>
            <Button
               variant='contained'
               fullWidth
               type='submit'
               color='primary'
               endIcon={loading && <CircularProgress color='primary' size={24} />}
               style={{ marginTop: 20 }}
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
