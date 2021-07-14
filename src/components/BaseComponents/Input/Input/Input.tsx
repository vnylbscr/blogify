import { TextField } from "@material-ui/core";
import { FC } from "react";
import { Control, UseFormProps, UseFormRegister } from "react-hook-form";
interface IProps {
  label: string;
  helperText: string;
  fullWidth?: boolean | undefined;
  name: string;
  [x: string]: any;
}

const Input: FC<IProps> = (props) => {
  const {
    label,
    helperText,
    fullWidth,
    inputValues,
    name,
    isMultiline,
    ...rest
  } = props;
  return (
    <TextField
      variant="outlined"
      fullWidth={fullWidth}
      name={name}
      label={label}
      {...rest}
    />
  );
};

export default Input;
