import React from 'react';
import { Backdrop, Grid, Typography, CircularProgress, Hidden, Fade, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Input from '../../BaseComponents/Input/Input';
import { useMutation } from '@apollo/client';
import { USER_REGISTER_MUTATION } from '../../../queries/register';
// import { RegisterMutation, RegisterMutationVariables } from '../../../queries/__generated__/RegisterMutation';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { EMAIL_REGEX, PASSWORD_MUST_BE_6_CHARACTERS } from '../../../lib/constants';
import { useForm } from 'react-hook-form';
import { REGISTER } from '../../../redux/actions/user';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import ButtonSuccess from '../../BaseComponents/Button/ButtonSuccess';
import FooterText from '../../FooterText';
import { RegisterMutation, RegisterMutationVariables } from '../../../queries/__generated__/RegisterMutation';
import Loader from '../../Loader';
import { useSnackbar } from 'notistack';

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

const RegisterPage = (props: Props) => {
   const classes = useStyles();
   const dispatch = useDispatch();
   const { enqueueSnackbar, closeSnackbar } = useSnackbar();
   const [register, { error, loading }] = useMutation<RegisterMutation, RegisterMutationVariables>(
      USER_REGISTER_MUTATION
   );
   const {
      control,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data: any) => {
      // TODO run register mutation
      register({
         variables: {
            ...data,
         },
      })
         .then(({ data }) => {
            if (data?.register) {
               localStorage.setItem('token', data?.register.token || '');
               dispatch({ type: REGISTER, payload: data?.register });
            }
         })
         .catch((error) => {
            enqueueSnackbar(error.message, {
               variant: 'error',
            });
         });
   };
   return (
      <Grid container className={classes.root}>
         <Hidden xsDown>
            <Grid container sm={8} className={classes.leftSection} />
         </Hidden>
         {loading && <Loader />}
         <Grid container className={classes.inputContainer} justifyContent='center' alignItems='center' xs={12} sm={4}>
            <Fade in={true} timeout={1000}>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid xs={12} container>
                     <Grid xs={12}>
                        <Typography align='center' variant='h5' color='primary'>
                           Register to Blogify
                        </Typography>
                     </Grid>
                     <Input
                        name='username'
                        error={errors.username}
                        fullWidth
                        startIcon={<AccountCircleIcon />}
                        label='username'
                        control={control}
                        rules={{
                           required: 'this field is required.',
                           minLength: {
                              value: 5,
                              message: 'username must be greater than 5 characters.',
                           },
                        }}
                     />
                     <Input
                        name='email'
                        error={errors.email}
                        fullWidth
                        startIcon={<EmailIcon />}
                        label='e-mail'
                        control={control}
                        rules={{
                           required: 'this field is required.',
                           pattern: {
                              value: EMAIL_REGEX,
                              message: 'please provide valid e-mail address.',
                           },
                        }}
                     />
                     <Input
                        name='password'
                        error={errors.password}
                        fullWidth
                        startIcon={<LockIcon />}
                        label='password'
                        control={control}
                        rules={{
                           required: 'this field is required.',
                           minLength: {
                              value: 6,
                              message: PASSWORD_MUST_BE_6_CHARACTERS,
                           },
                        }}
                        type='password'
                     />
                     <Grid
                        container
                        xs={12}
                        spacing={2}
                        justifyContent='center'
                        alignItems='center'
                        style={{ padding: 10, marginTop: 20 }}
                     >
                        <Typography>Already have an account?</Typography>
                        <Link to='/sign-in' style={{ marginLeft: 10 }} onClick={() => {}}>
                           Login
                        </Link>
                     </Grid>
                     <Grid container style={{ marginTop: 20 }}>
                        <Typography variant='caption' color='textSecondary' style={{ padding: '10px 0px' }}>
                           By registering Blogify, you agree to our privacy policy.
                        </Typography>
                        <ButtonSuccess
                           type='submit'
                           fullWidth
                           label={'Register'}
                           overrideStyles={{}}
                           disabled={loading}
                           size='large'
                        />
                     </Grid>
                  </Grid>
               </form>
            </Fade>
            <FooterText />
         </Grid>
      </Grid>
   );
};

export default RegisterPage;
