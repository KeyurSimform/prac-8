import React from "react";
import "../SignUp/SignUp.css";
import { useFormik } from "formik";
import { FormField } from "../FormField/FormField";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      profilePicture: null,
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validateOnBlur: true,
    validationSchema: validate,

    onSubmit: (values) => {
      const readValue = new FileReader();
      readValue.readAsDataURL(values.profilePicture);
      readValue.onloadend = () => {
        localStorage.setItem("profilePicture", readValue.result);
        dispatch(
          userAction.login({
            name: values.name,
            email: values.email,
            phone: values.phone,
            password: values.password,
            profilePicture: URL.createObjectURL(values.profilePicture),
          })
        );
      };
    },
  });

  return (
    <div className="d-flex justify-content-around">
      <div>
        <h2 className="text-center">Sign Up</h2>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="img">
          <label htmlFor="file" name="profilePicture"></label>
          <input
            id="file"
            type="file"
            name="profilePicture"
            title="&nbsp;"
            accept=".jpg, .png"
            onChange={(event) => {
              formik.setFieldValue("profilePicture", event.target.files[0]);
            }}
            onBlur={formik.handleBlur}
          />

          {formik.touched.profilePicture && formik.errors.profilePicture ? (
            <div className="error">{formik.errors.profilePicture}</div>
          ) : null}
        </div>
        <FormField
          name="name"
          label="Name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.name}
          error={formik.errors.name}
        />
        <FormField
          name="email"
          label="Email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.email}
          error={formik.errors.email}
        />
        <FormField
          name="phone"
          label="PhoneNo"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.phone}
          error={formik.errors.phone}
        />
        <FormField
          name="password"
          label="Password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.password}
          error={formik.errors.password}
        />
        <FormField
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.confirmPassword}
          error={formik.errors.confirmPassword}
        />

        <button className="btn btn-primary my-3" type="submit">
          Submit
        </button>
        <button className="btn btn-danger mx-3 my-3" type="reset">
          Reset
        </button>
      </form>
    </div>
  );
};

export default SignUp;
