import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import Input from "../BaseComponents/Input/Input/Input";

const useStyles = makeStyles((theme: any) => ({
  root: {
    flexGrow: 1,
    height: "calc(100vh - 60px)",
    background: theme.colorPalette.primary.light,
  },
  section: {
    height: 400,
  },
}));

type FormValues = {
  email: string;
  content: string;
};
const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<FormValues>();
  console.log(watch("email"));

  const classes = useStyles();
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <main className={classes.root}>
      <Grid xs={12}>
        <Grid
          xs={6}
          container
          className={classes.section}
          justifyContent="center"
          alignItems="center"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="outlined"
              {...register("email", {
                required: "Bu alanı doldurun",
              })}
              fullWidth
              label="Content"
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
            <TextField
              variant="outlined"
              {...register("content", {
                required: "Bu alanı doldurun",
              })}
              fullWidth
              label="Content"
              error={Boolean(errors.content)}
              helperText={errors.content?.message}
            />
            <Button variant="contained" color="primary" type="submit">
              Gönder
            </Button>
          </form>
        </Grid>
      </Grid>
    </main>
  );
};

export default Contact;
