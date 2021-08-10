import { Button, ButtonBase, makeStyles } from '@material-ui/core';
import React, { FC } from 'react';

const useStyles = makeStyles((theme: any) => ({
   root: {
      textTransform: 'none',
      color: theme.colorPalette.secondary,
      fontSize: '1.2rem',
      '&:hover': {
         backgroundColor: theme.colorPalette.primary.dark,
      },
   },
}));

interface HeaderItemProps {
   title: string;
   onClick?: () => void | null;
   style?: object;
   icon?: React.ReactNode;
   [x: string]: any;
}
const HeaderItem: FC<HeaderItemProps> = (props) => {
   const classes = useStyles();
   const { title, onClick, style, icon, ...rest } = props;
   return (
      <Button
         variant='text'
         color='secondary'
         className={classes.root}
         onClick={onClick}
         style={style}
         startIcon={icon}
         disableFocusRipple
      >
         {title}
      </Button>
   );
};

export default HeaderItem;
