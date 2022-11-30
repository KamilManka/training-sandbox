import React from "react";
import { cards } from "../Data";
import { Field, FormikProvider, useFormik } from "formik";
import * as yup from "yup";
import { TextField, Select, InputLabel, Autocomplete, Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useNotificationContext } from "../contexts/NotificationContext";

const getAllClients=async ()=>{
  const resp=await fetch("http://localhost:3000/clients")
  const data=await resp.json();
  return data;
}

// const getAllOrders=async ()=>{
//   const resp=await fetch("http://localhost:3000/clients")
//   const data=await resp.json();
//   return data;
// }

const yupSchema = yup.object({
  fullName: yup.string().required(),
  quantity: yup.number().min(1).max(15).required(),
  orderTitle: yup.string().min(5).required(),
  orderContent: yup.string().min(10).required(),
});

const FormInput = ({ formik, accessor, label, inputType }) => {
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
        type={inputType}
        sx={{ width: 300 }}

      />
    </div>
  );
};

export const AddOrder = () => {
  const {setNotification, setMessage} = useNotificationContext();

  const {data,isLoading,error}=useQuery(["clients"],getAllClients);
  // const clientsData = [];
  // getAllClients().then(data => {
  //   const clientsData = data.forEach(el => el["fullName"] = el.name + " " + el.surname)
  // }
  // )
console.log(data);
  const clientsOptions = {
    options: data ? data.map(el=>({label: el.name+" "+el.surname ,value: el.phoneNumber })) : [],
    getOptionLabel: (option) => option.label
  }

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      quantity: "",
      orderTitle: "",
      orderContent: "",
    },
    validationSchema: yupSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setNotification("success");
      setMessage("Dodano zamówienie");
    },
  });
  if(!isLoading){
  return (
    <>
      <div>AddOrder</div>
      <div>
        {/* <FormikProvider value={formik}> */}
          <form onSubmit={formik.handleSubmit} className="add-client__form">
            <Autocomplete
              {...clientsOptions}
              sx={{ width: 300 }}
              name="fullName"
              renderInput={(params) => <TextField {...params} label="Client" />}
              onChange={(e, option) => formik.setFieldValue("phoneNumber", option.value)}
              isOptionEqualToValue={(option, value) => option.value === value.value}
            />
            <FormInput inputType="number" accessor="quantity" label="Quantity" formik={formik} />
            <FormInput
              accessor="orderTitle"
              label="Order title"
              formik={formik}
            />
            <FormInput
              accessor="orderContent"
              label="Order content"
              formik={formik}
            />
            <Button type="submit">Send</Button>
          </form>
        {/* </FormikProvider> */}
      </div>
    </>
  );
  }
};
