import { Button, TextField } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useUserContext } from "./contexts/UserContext";

//TODO: dodać dokładniejszą walidację
const yupSchema = yup.object({
  login: yup.string().required(),
  password: yup.string().required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
});

export const FakeRegisterComponent = () => {
  const {registerUser} = useUserContext();
    const formik = useFormik({
        initialValues: {
          login: "",
          password: "",
          confirmPassword: ""
        },
        // validationSchema: yupSchema,
        onSubmit: ({login,password}) => {
          console.log({login,password})
          registerUser(login,password);
        }
      });
      return (
        <div className="register-form-container">
          <form onSubmit={formik.handleSubmit} className="signup-form">
            <TextField size="small" name="login" label="Login" onChange={formik.handleChange} />
            <TextField size="small" name="password" type="password" label="Password" onChange={formik.handleChange} />
            <TextField size="small" name="confirmPassword" type="password" label="Confirm password" onChange={formik.handleChange} />
            <Button type="submit">Sign-up</Button>
          </form>
        </div>

      );
    };
    
