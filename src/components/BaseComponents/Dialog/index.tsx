import React from "react";
import { FC } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

interface IModalProps {
  open: boolean;
  onClose?: () => void;
  style?: object;
  dialogTitle?: string;
  dialogContentTitle?: string;
  className?: string;
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    padding: 20,
    backgroundColor: "transparent",
  },
}));
const Modal: FC<IModalProps> = (props) => {
  const { open, onClose, style, dialogTitle, className } = props;
  return (
    <Dialog open={open} onClose={onClose} style={style} className={className}>
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent>{props.children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
