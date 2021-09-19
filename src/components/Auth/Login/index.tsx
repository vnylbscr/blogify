import React, { Fragment } from 'react';
import { makeStyles, Button, Grid, Hidden, Typography, Fade } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { useHistory, Link } from 'react-router-dom';
import { LoginMutation, LoginMutationVariables } from '../../../queries/__generated__/LoginMutation';
import { USER_LOGIN_MUTATION } from '../../../queries/authorize';
import { LOGIN } from '../../../redux/actions/user';
import Input from '../../BaseComponents/Input/Input';
import { EMAIL_REGEX, REQUIRED_FIELD } from '../../../lib/constants';
import FooterText from '../../FooterText';
interface Props {}

const useStyles = makeStyles((theme) => ({
   root: {
      height: 'calc(100vh - 60px)',
   },
   leftSection: {
      background:
         'url("https://images.unsplash.com/photo-1509475826633-fed577a2c71b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2200&q=80")',
      height: '100%',
      backgroundSize: 'cover',
      width: '100%',
   },
   inputContainer: {
      padding: 50,
      background: 'linear-gradient(#b1c6e2, #838de4)',
   },
   backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
   },
}));
const LoginPage = (props: Props) => {
   const classes = useStyles();
   const [login, { error, loading }] = useMutation<LoginMutation>(USER_LOGIN_MUTATION, {
      // onError: (error) => console.log('ULAAA  NOLİY', error),
   });
   const dispatch = useDispatch();
   const history = useHistory();

   const {
      control,
      handleSubmit,
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
      <Grid container className={classes.root}>
         <Hidden xsDown>
            <Grid className={classes.leftSection} sm={8} item container />
         </Hidden>
         <Grid container justifyContent='center' alignItems='center' className={classes.inputContainer} xs={12} sm={4}>
            <Fade in={true} timeout={1000}>
               <Grid xs={12}>
                  <Fragment>
                     <Grid xs={12}>
                        <Typography align='center' variant='h5' color='primary'>
                           Blogify'a Giriş Yap
                        </Typography>
                     </Grid>
                     <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                           name='email'
                           error={errors.email}
                           fullWidth
                           startIcon={<EmailIcon />}
                           label='E-mail'
                           control={control}
                           rules={{
                              required: REQUIRED_FIELD,
                              pattern: {
                                 value: EMAIL_REGEX,
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
                              required: REQUIRED_FIELD,
                              minLength: {
                                 value: 6,
                                 message: 'Şifreniz en az 6 karakterden oluşmalıdır',
                              },
                           }}
                           type='password'
                        />
                        <Grid container justifyContent='center' alignItems='center' style={{ padding: 20 }}>
                           <Typography>Henüz hesabın yok mu?</Typography>
                           <Link style={{ marginLeft: 10 }} to='/sign-up'>
                              Hemen oluştur
                           </Link>
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
                  </Fragment>
               </Grid>
            </Fade>
            <FooterText />
         </Grid>
      </Grid>
   );
};

export default LoginPage;
