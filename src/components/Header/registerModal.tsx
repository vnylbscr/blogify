import React from "react";
import { useForm } from "react-hook-form";
import Modal from "../BaseComponents/Dialog";
import Input from "../BaseComponents/Input/Input/Input";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";

// Form Props
interface FormValues {
  email: string;
  username: string;
  password: string;
}

// Component Props
interface Props {
  open: boolean;
  onAccept: (data: FormValues) => void;
  onCloseModal: () => void;
}
const RegisterModal = (props: Props) => {
  const { open, onAccept, onCloseModal } = props;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    onAccept(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Modal
        open={props.open}
        dialogTitle="Kayıt Ol"
        dialogContentTitle="Blogify'a kayıt ol ve bütün özelliklerden faydalan"
      >
        <Input
          name="email"
          error={errors.email}
          fullWidth
          startIcon={<EmailIcon />}
          label="E-mail"
          control={control}
        />
      </Modal>
    </form>
  );
};

export default RegisterModal;
