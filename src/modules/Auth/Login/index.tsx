import React, { Fragment } from 'react';
import { makeStyles, Button, Grid, Hidden, Typography, Fade } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { USER_LOGIN_MUTATION } from '../../../queries/authorize';
import { LOGIN } from '../../../store/actions/user';
import { EMAIL_REGEX, REQUIRED_FIELD } from '../../../lib/constants';
import FooterText from '../../../components/FooterText';
import { LoginMutation, LoginMutationVariables } from '../../../queries/__generated__/LoginMutation';
import Loader from '../../../components/Loader';
import { useSnackbar } from 'notistack';
import Input from '../../../components/Input/Input';

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
   const { enqueueSnackbar } = useSnackbar();
   const [login, { error, loading }] = useMutation<LoginMutation, LoginMutationVariables>(USER_LOGIN_MUTATION);
   const dispatch = useDispatch();

   const {
      control,
      handleSubmit,
      formState: { errors },
   } = useForm({
      mode: 'all',
   });

   const onSubmit = async (data: any) => {
      // TODO run register mutation
      login({ variables: { ...data } })
         .then(({ data }) => {
            if (data?.login) {
               dispatch({
                  type: LOGIN,
                  payload: data?.login,
               });
            }
            enqueueSnackbar(`hello again, 👌 ${data?.login.username} `, {
               variant: 'success',
               autoHideDuration: 2000,
            });
         })
         .catch((e) => {
            enqueueSnackbar(e.message, {
               variant: 'error',
               autoHideDuration: 3000,
            });
         });
   };

   return (
      <Grid container className={classes.root}>
         <Hidden xsDown>
            <Grid className={classes.leftSection} sm={8} item container />
         </Hidden>
         {loading && <Loader />}
         <Grid container justifyContent='center' alignItems='center' className={classes.inputContainer} xs={12} sm={4}>
            <Fade in={true} timeout={1000}>
               <Grid xs={12}>
                  <Fragment>
                     <Grid xs={12}>
                        <Typography align='center' variant='h5' color='primary'>
                           Login Blogify
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
                                 message: 'please provide correct e-mail.',
                              },
                           }}
                        />
                        <Input
                           name='password'
                           error={errors.password}
                           fullWidth
                           startIcon={<LockIcon />}
                           label='Password'
                           control={control}
                           rules={{
                              required: REQUIRED_FIELD,
                              minLength: {
                                 value: 6,
                                 message: 'your password must be greater than 6 characters. ',
                              },
                           }}
                           type='password'
                        />
                        <Grid container justifyContent='center' alignItems='center' style={{ padding: 20 }}>
                           <Typography>Don't have an account?</Typography>
                           <Link style={{ marginLeft: 10 }} to='/sign-up'>
                              Register now!
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
                           Login
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
