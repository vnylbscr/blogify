import React, { Fragment } from 'react';
import { TypographyProps, Typography, Slide } from '@material-ui/core';
import { WithUndefined } from '../../../types/utils';

import { makeStyles } from '@material-ui/core';
import { MyTheme } from '../../../styles/config';

type MultipleChildren = WithUndefined<string> | null | WithUndefined<string>[];

type AnimationDirections = 'right' | 'left';

interface Props extends TypographyProps {
   children: MultipleChildren;
   bold?: boolean;
   margin?: boolean;
   animation?: AnimationDirections;
}

const useStyles = makeStyles<MyTheme, Props>((theme) => ({
   root: {
      fontWeight: (props) => (props.bold ? 'bold' : 'normal'),
      color: theme.colorPalette.primary.dark,
      margin: (props) => (props.margin ? `${theme.spacing(2)}px 0px` : undefined),
   },
}));

const MyTypography = (props: Props) => {
   const { children, bold, animation, ...rest } = props;
   const classes = useStyles(props);
   return (
      <Fragment>
         {Boolean(animation) ? (
            <Slide in={Boolean(animation)} direction={animation}>
               <Typography {...rest} className={classes.root}>
                  {children}
               </Typography>
            </Slide>
         ) : (
            <Typography {...rest} className={classes.root}>
               {children}
            </Typography>
         )}
      </Fragment>
   );
};

export default MyTypography;
