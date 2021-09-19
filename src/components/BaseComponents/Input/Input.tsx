import React, { useState } from 'react';
import { Grid, IconButton, InputAdornment, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FieldError, FieldValues, UseControllerProps, Controller } from 'react-hook-form';
import { MyTheme } from '../../../styles/config';
import { RequireField } from '../../../types/helperTypes';
import VisibilityOn from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
export type InputTextType = 'text' | 'password' | 'file';
interface IProps<T> extends RequireField<UseControllerProps<T>, 'control'> {
   label: string;
   helperText?: string;
   fullWidth?: boolean | undefined;
   error: FieldError | undefined;
   startIcon?: React.ReactNode;
   endIcon?: React.ReactNode;
   isMultiline?: boolean;
   maxRows?: number;
   type?: InputTextType;
   placeholder?: string;
   autoFocus?: boolean;
   minRows?: number;
}

const useStyles = makeStyles((theme: MyTheme) => ({
   root: {
      marginTop: 20,
   },
   labelColor: {
      fontSize: '15px',
   },
   inputRoot: {
      height: 'auto',
      borderRadius: 15,
   },
   labelStyle: {
      fontSize: '1.2rem',
   },
   icon: {
      color: theme.colorPalette.secondary,
   },
   focused: {
      transition: 'all .5s',
      transform: 'scale(1.01)',
   },
}));

const Input = <T extends FieldValues>(props: IProps<T>) => {
   const {
      name,
      control,
      error,
      label,
      fullWidth = true,
      helperText,
      endIcon,
      startIcon,
      rules,
      type,
      placeholder,
      isMultiline,
      maxRows,
      minRows,
   } = props;

   const classes = useStyles(props);
   const [showPassword, setShowPassword] = useState(false);
   return (
      <Grid xs={12} container>
         <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field }) => (
               <TextField
                  {...field}
                  label={label}
                  className={classes.root}
                  helperText={error ? error?.message : helperText}
                  error={Boolean(error)}
                  variant='outlined'
                  multiline={isMultiline}
                  maxRows={maxRows}
                  minRows={minRows}
                  InputProps={{
                     classes: {
                        root: classes.inputRoot,
                        focused: classes.focused,
                     },
                     endAdornment: (
                        <InputAdornment position='end' className={classes.icon}>
                           {type === 'password' ? (
                              <IconButton onClick={() => setShowPassword((p) => !p)}>
                                 {showPassword ? <VisibilityOn /> : <VisibilityOff />}
                              </IconButton>
                           ) : (
                              endIcon
                           )}
                        </InputAdornment>
                     ),
                     startAdornment: (
                        <InputAdornment position='start' className={classes.icon}>
                           {startIcon}
                        </InputAdornment>
                     ),
                  }}
                  placeholder={placeholder}
                  fullWidth={fullWidth}
                  type={showPassword ? 'text' : type}
               />
            )}
         />
      </Grid>
   );
};
// Input.defaultProps = {};
export default Input;
