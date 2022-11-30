import { useMemo, useState, useEffect } from "react";
import { cards } from "../Data";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, ButtonGroup, TextField } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const getClientById = async (id) => {
  const response = await fetch(`http://localhost:3000/clients/${id}`);
  const data = await response.json();
  return data;
};

const updateClientById = async (updateClientData) => {
  console.log("a jak tutaj?",updateClientData)
  const response = await fetch(`http://localhost:3000/clients/${updateClientData.id}`, {  //nie przekazuje id
    method: "PUT",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(updateClientData),
  });
  const data = await response.json();
  return data;
};

// const yupSchema = yup.object({
//   name: yup.string().min(3).required("Name is required"),
//   surname: yup.string().min(3).required(),
//   street: yup.string().min(5).required(),
//   postCode: yup.number().min(2).max(2) + yup.number().min(3).max(3),
//   city: yup.string().min(3).required(),
//   region: yup.string().min(3),
//   imgSrc: yup.string().url(),
//   phone: yup.string().matches(/[+]/) + yup.number().min(11).max(11).required(),
// });

const FormInput = ({ formik, accessor, label }) => {
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
        value={formik.values[accessor]}
        margin="dense"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
};

export const EditClient = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(async (values) => await updateClientById(values), {
    onSuccess: () => {
      // rewalidacja i pobranie ponownie zapytania pod kluczem orders
      queryClient.invalidateQueries(["clients"]);
      alert("Klient zaktualizowany");
    },
    onError: () => {
      console.log("Cos poszlo nie tak");
    },
  });

  const { id } = useParams();
  const [data, setData] = useState([]);
  
  useEffect(() => {
    getClientById(id).then((data) => setData(data));
  }, [id]);

  const formik = useFormik({
    initialValues: data, 
    enableReinitialize: true,
    // validationSchema: yupSchema,
    // initialTouched: data.length>0 ? data.map(el=>({[el]:true})) : [],
    onSubmit: (values) => {
      console.log(values,id)
      mutation.mutate({...values, id});
    },
  });

  return (
    <div>
      <div>EditClient</div>

      <form onSubmit={formik.handleSubmit} className="add-client__form">
        <FormInput accessor="name" label="Name" formik={formik} />
        <FormInput accessor="surname" label="Surname" formik={formik} />
        <FormInput accessor="street" label="Street" formik={formik} />
        <FormInput accessor="postCode" label="Post Code" formik={formik} />
        <FormInput accessor="town" label="Town" formik={formik} />
        <FormInput accessor="region" label="Region" formik={formik} />
        <FormInput accessor="imgSrc" label="Photo link" formik={formik} />
        <FormInput accessor="phone" label="Phone number" formik={formik} />
        <ButtonGroup size="small" className="clientid__button-group">
          <Button component={Link} to={"../"} variant="contained">
            Cancel
          </Button>
          <Button type="submit" variant="contained">
            Update
          </Button>
        </ButtonGroup>
      </form>
    </div>
  );
};
