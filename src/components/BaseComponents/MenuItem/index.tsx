import React, { FC } from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { Fn } from '../../../types/utils';
import { MyTheme } from '../../../styles/config';
type Variant = 'first' | 'second';
interface IProps {
   onClick?: Fn;
   variant?: Variant;
   icon?: (className: string) => JSX.Element;
   label: string;
   overrideStyles?: React.CSSProperties;
}

const useStyles = makeStyles<MyTheme, IProps>((theme: MyTheme) => ({
   root: (props) => ({
      height: props.variant === 'first' ? 70 : 90,
      //   backgroundColor: props.variant === 'first' ? theme.colorPalette.primary.light : theme.colorPalette.secondary,
      color: 'black',
      ...props.overrideStyles,
      '&:hover': {
         color: 'black',
         background: theme.colorPalette.primary.light,
      },
   }),
   icon: {
      fontSize: (props) => (props.variant === 'first' ? '1.4rem' : '1rem'),
   },
}));

const StyledMenuItem: FC<IProps> = (props: IProps) => {
   const { onClick, variant, icon, label } = props;
   const classes = useStyles(props);
   return (
      <MenuItem onClick={onClick} classes={{ root: classes.root }}>
         <Grid container xs={12} justifyContent='space-between'>
            {icon && icon(classes.icon)}
            <Typography variant='body2'>{label}</Typography>
         </Grid>
      </MenuItem>
   );
};

export default StyledMenuItem;
