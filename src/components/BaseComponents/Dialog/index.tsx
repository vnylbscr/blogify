import React from 'react';
import { FC } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

interface IModalProps {
   open: boolean;
   onClose?: () => void;
   style?: object;
   dialogTitle?: string;
   dialogContentTitle?: string;
   className?: string;
   fullWidth?: boolean;
   width?: number;
   height?: number;
   fullScreen?: boolean;
}

const useStyles = makeStyles((theme: any) => ({
   root: {
      padding: 20,
      backgroundColor: 'transparent',
   },
   paper: {
      width: (props: IModalProps) => props.width || '',
      height: (props: IModalProps) => props.height || '',
      // background: theme.colorPalette.primary.main,
   },
}));
const Modal: FC<IModalProps> = (props) => {
   const { open, onClose, style, dialogTitle, className, fullWidth, fullScreen } = props;
   const classes = useStyles(props);
   return (
      <Dialog
         open={open}
         onClose={onClose}
         style={style}
         fullWidth={fullWidth}
         classes={{
            paper: classes.paper,
            root: classes.root,
         }}
         fullScreen={fullScreen}
      >
         <DialogTitle>{dialogTitle}</DialogTitle>
         <DialogContent>{props.children}</DialogContent>
      </Dialog>
   );
};

// Testing squashing commit 1
// Testing squashing commit 2
// Testing squashing commit 3
export default Modal;
