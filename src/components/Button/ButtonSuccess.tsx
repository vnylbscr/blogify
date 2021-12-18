import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { MyTheme } from '../../styles/config';
import { Button, Typography } from '@material-ui/core';
interface IProps {
   fullWidth?: boolean;
   overrideStyles?: React.CSSProperties;
   onClick?: () => void;
   label?: string;
   width?: number;
   startIcon?: React.ReactNode;
   endIcon?: React.ReactNode;
   children?: React.ReactNode;
   capitalize?: boolean | undefined;
   [x: string]: any;
}

const useStyles = makeStyles<MyTheme, IProps>((theme: MyTheme) => ({
   root: {
      color: '#fff',
      textTransform: 'none',
      width: (props) => (props.width ? props.width : ''),
   },
   '&:hover': {},
}));

const ButtonSuccess = (props: IProps) => {
   const { label, onClick, overrideStyles, children, fullWidth, capitalize, ...rest } = props;
   const classes = useStyles(props);
   return (
      <Button
         className={classes.root}
         variant='contained'
         style={overrideStyles}
         onClick={onClick}
         fullWidth={fullWidth}
         color='primary'
         {...rest}
      >
         <Typography variant={capitalize ? 'body1' : 'button'}>{label || children}</Typography>
      </Button>
   );
};

export default ButtonSuccess;
