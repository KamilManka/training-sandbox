import { Button, TextField } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import {useUserContext} from "./contexts/UserContext"

//TODO: dodać dokładniejszą walidację
const yupSchema = yup.object({
  login: yup.string().required(),
  password: yup.string().required(),
});

export const FakeLoginComponent = () => {
  const {logIn}=useUserContext();
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: yupSchema,
    onSubmit: (values) => {
      logIn(values)
    },
  });
  return (
    <div className="login-form-container">
      <form onSubmit={formik.handleSubmit} className="login-form">
        <TextField size="small" name="login" label="Login" onChange={formik.handleChange}/>
        <TextField
          size="small"
          name="password"
          type="password"
          label="Password"
          onChange={formik.handleChange}
        />
        <Button type="submit">Log-in</Button>
        <Button component={Link} to="../register">
          Sign-up
        </Button>
      </form>
    </div>
  );
};
