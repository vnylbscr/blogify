import { makeStyles } from '@material-ui/styles';
import React, { FC } from 'react';
import { MyTheme } from '../../../styles/config';
import { Button } from '@material-ui/core';
interface IProps {
   fullWidth?: boolean;
   style?: object;
   onClick: () => void;
   label?: string;
   width?: number;
   startIcon?: React.ReactNode;
   endIcon?: React.ReactNode;
   [x: string]: any;
}

// deneme
const useStyles = makeStyles<MyTheme, IProps>((theme: MyTheme) => ({
   root: {
      color: theme.colorPalette.secondary,
      backgroundColor: theme.colorPalette.primary.main,
      borderRadius: 10,
      textTransform: 'none',
      width: (props) => (props.width ? props.width : ''),
   },
}));

const MyButton = (props: IProps) => {
   const { label, onClick, style, fullWidth, ...rest } = props;
   const classes = useStyles(props);
   return (
      <Button
         className={classes.root}
         variant='outlined'
         style={style}
         onClick={onClick}
         fullWidth={fullWidth}
         {...rest}
      >
         {label}
      </Button>
   );
};

export default MyButton;
