import { Grid, InputAdornment, InputLabel, TextField, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { FC } from 'react';
import { FieldError, FieldValues, UseControllerProps, Controller } from 'react-hook-form';
import { MyTheme } from '../../../../styles/config';
import { RequireField } from '../../../../types/helperTypes';

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
}

const useStyles = makeStyles((theme: MyTheme) => ({
   root: {
      marginTop: 20,
   },
   labelColor: {
      // color: "#fdsfsd",
      fontSize: '15px',
   },
   inputRoot: {
      height: 70,
      borderRadius: 15,
      // border: "1px solid yellow",
   },
   labelStyle: {
      fontSize: '1.2rem',
      // color: theme.colorPalette.primary.dark,
   },
   icon: {
      color: theme.colorPalette.secondary,
   },
   focused: {
      // backgroundColor: theme.colorPalette.primary.dark,
      // color: theme.colorPalette.secondary,
   },
   //  input: {
   //     height: 40,
   //  },
}));

const Input = <T extends FieldValues>(props: IProps<T>) => {
   const {
      name,
      control,
      error,
      label,
      fullWidth,
      helperText,
      endIcon,
      startIcon,
      rules,
      type,
      placeholder,
      isMultiline,
      maxRows,
   } = props;
   const classes = useStyles(props);
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
                  InputProps={{
                     classes: {
                        root: classes.inputRoot,
                        focused: classes.focused,
                        // input: classes.input,
                     },
                     endAdornment: (
                        <InputAdornment position='end' className={classes.icon}>
                           {endIcon}
                        </InputAdornment>
                     ),
                     startAdornment: (
                        <InputAdornment position='start' className={classes.icon}>
                           {startIcon}
                        </InputAdornment>
                     ),
                  }}
                  // InputLabelProps={{
                  //   classes: {
                  //     root: classes.labelStyle,
                  //   },
                  // }}
                  placeholder={placeholder}
                  fullWidth={fullWidth || true}
                  type={type}
               />
            )}
         />
      </Grid>
   );
};
Input.defaultProps = {};
export default Input;
