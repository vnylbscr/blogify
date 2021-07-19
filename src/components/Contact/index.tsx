import { Box, Button, Grid, makeStyles, TextField } from "@material-ui/core";
import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import "./index.css";
import Input from "../BaseComponents/Input/Input/Input";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Footer from "../Footer";
const useStyles = makeStyles((theme: any) => ({
  root: {
    flexGrow: 1,
    height: "calc(100vh - 60px)",
    background: theme.colorPalette.primary.light,
  },
  section: {
    height: "100%",
  },
}));

const DESCRIPTION =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const MOCKS_MENU = [
  {
    title: "Biz kimiz?",
    description: DESCRIPTION,
  },
  {
    title: "Ne yapıyoruz?",
    description: DESCRIPTION,
  },
  {
    title: "İmkansız Görev",
    description: DESCRIPTION,
  },
];
type FormValues = {
  email: string;
  content: string;
};
const Contact = () => {
  const {
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "all",
  });
  // console.log(watch());

  console.log(watch().email);
  console.log("isValid ?", isValid);
  const classes = useStyles();
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <Fragment>
      <main className="contact-container">
        <div className="contact-top-section">
          <p>Blogify</p>
          <div className="contact-title-container">
            <p>Hızlı.</p>
            <p>Güvenilir</p>
          </div>
        </div>
        <div className="contact-bottom-section">
          {MOCKS_MENU.map((item) => (
            <Fragment>
              <div className="contact-title">
                <p>{item.title}</p>
              </div>
              <div className="contact-section">
                <span>{item.description}</span>
              </div>
            </Fragment>
          ))}
        </div>
        <Footer />
      </main>
    </Fragment>
  );
};
export default Contact;
