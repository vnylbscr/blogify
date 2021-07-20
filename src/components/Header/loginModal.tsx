import React from "react";
import { useForm } from "react-hook-form";
import Modal from "../BaseComponents/Dialog";
import Input from "../BaseComponents/Input/Input/Input";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";

interface FormValues {
  email: string;
  password: string;
}
interface Props {
  open: boolean;
  onCloseModal: () => void;
}
const LoginModal = (props: Props) => {
  const { open, onCloseModal } = props;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    // TODO run register mutation
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Modal
        open={open}
        dialogTitle="Blogify'a Giriş Yap"
        dialogContentTitle="Blogify'a kayıt ol ve bütün özelliklerden faydalan"
        // className={classes.modal}
        width={900}
        onClose={onCloseModal}
      >
        <Input
          name="email"
          error={errors.email}
          fullWidth
          startIcon={<EmailIcon />}
          label="E-mail"
          control={control}
        />
        <Input
          name="email"
          error={errors.email}
          fullWidth
          startIcon={<LockIcon />}
          label="E-mail"
          control={control}
        />
      </Modal>
    </form>
  );
};

export default LoginModal;
