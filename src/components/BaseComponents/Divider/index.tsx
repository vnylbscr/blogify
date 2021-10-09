import React from 'react';
import { Divider, DividerProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { MyTheme } from '../../../styles/config';

interface Props extends DividerProps {
   dashed?: boolean;
}

const useStyles = makeStyles<MyTheme, Props>((theme) => ({
   root: {
      width: '100%',
      backgroundColor: '#aaa',
   },
   dashed: {
      border: 'none',
      borderTop: '1px dotted #eee',
      color: '#fff',
      backgroundColor: 'transparent',
      height: '0.1px',
      width: '100%',
   },
}));

const MyDivider = (props: Props) => {
   const classes = useStyles(props);
   const { dashed, ...rest } = props;
   return <Divider classes={{ root: dashed ? classes.dashed : classes.root }} {...rest} />;
};

export default MyDivider;
