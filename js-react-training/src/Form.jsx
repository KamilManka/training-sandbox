import { useFormik } from "formik";
import * as yup from "yup"

const yupSchema=yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().min(1,"Minimum age is 1").max(115).required("Message")
})

export function Form() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: yupSchema, //wpięcie schematu walidacji
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
        />
        {formik.touched.age && formik.errors.age ? (
          <p><span role="alert" style={{ color: "red" }}>{formik.errors.age}</span></p>
        ) : null}
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
