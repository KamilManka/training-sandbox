import { useFormik} from "formik";
import * as yup from "yup";
import React from 'react'
import { TextField } from "@mui/material";
import {Button} from "@mui/material";
import { useNotificationContext } from "../contexts/NotificationContext";

const yupSchema=yup.object({
  name: yup.string().min(3).required("Name is required"),
  surname: yup.string().min(3).required(),
  street: yup.string().min(5).required(),
  postCode: yup.string().matches(/^[0-9]{2}-[0-9]{3}$/).required(),
  town: yup.string().min(3).required(),
  region: yup.string().min(3),
  imgSrc: yup.string().url(),
  phone: yup.string().matches(/^\+48[0-9]{9}$/,"To nie numer telefonu").required()
})

const FormInput=({formik,accessor,label})=>{

    return (
      <div>
        <TextField
          error={Boolean(formik.touched[accessor] && formik.errors[accessor])}
          helperText={
            formik.touched[accessor] && formik.errors[accessor]
              ? formik.errors[accessor]
              : null
          }
          id={accessor}
          label={label}
          name={accessor}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.accessor}
          margin="dense"
        />
      </div>
    );
  }


  const formInitialValues={
          name: "",
          surname: "",
          street: "",
          postCode: "",
          town: "",
          region: "",
          imgSrc: "",
          phone: ""
        }

  const addClientToDb=async (newClient)=>{
    const resp=await fetch("http://localhost:3000/clients",{
      method: "POST",
      headers: {"Content-type": "application/json;charset=UTF-8"},
      body: JSON.stringify(newClient)
    })
    const data=await resp.json();
    return data;
  }

  export const AddClient = () => {
    const {setNotificationStatus, setMessage} = useNotificationContext();

    const formik = useFormik({
        initialValues: formInitialValues,
        validationSchema: yupSchema,
        onSubmit: (values) => {
          console.log(values)
          addClientToDb(values).then(data=>console.log(data))
          setNotificationStatus("success");
          setMessage("Dodano klienta!");
        },
      });

    return (
        <form onSubmit={formik.handleSubmit} className="add-client__form">
          {/* {Object.keys(formInitialValues).map(accessor=><FormInput accessor={accessor} label="test" formik={formik} />)} */}
        <FormInput accessor="name" label="Name" formik={formik} />
        <FormInput accessor="surname" label="Surname" formik={formik} />
        <FormInput accessor="street" label="Street" formik={formik} />
        <FormInput accessor="postCode" label="Post Code" formik={formik} />
        <FormInput accessor="town" label="Town" formik={formik} />
        <FormInput accessor="region" label="Region" formik={formik} />
        <FormInput accessor="imgSrc" label="Photo link" formik={formik} />
        <FormInput accessor="phone" label="Phone number" formik={formik} />
        <Button type="submit">Send</Button>
      </form>
    )
  }
  
  //TODO: naprawić walidację