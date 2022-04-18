import React from "react";
import "../SignUp/SignUp.css";
import { useFormik } from "formik";
import FormField from "../FormField/FormField";
import { useDispatch } from "react-redux";
import { validation } from "../Validation/Validation";
import { userActions } from "../../store/userSlice";
import image from "../../assets/signup.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//  Here is the SignUp Componenet which will allow user to signup the form and will be logged in

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
// this will check that the if user is present in the local storage the it will not allow to redirect to the signup page and will restrict to stay on the homepage only. 
  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/homepage');
    }
  }, [navigate]) ;
//  Buy using the formik , implemented the signup functionality

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
    validationSchema: validation,
// Handled the onSubmit event , when submit button is clicked by the user
    onSubmit: (values) => {
      const readValue = new FileReader();
      readValue.readAsDataURL(values.profilePicture);
      readValue.onloadend = () => {
      navigate("/homepage");

        localStorage.setItem("profilePhoto", readValue.result);
        localStorage.setItem(
          "user",
          JSON.stringify({
            isLoggedIn: true,
            name: values.name,
            phone: values.phone,
            email: values.email,
          })
        );
      };
      dispatch(
        userActions.login({
          name: values.name,
          email: values.email,
          phone: values.phone,
          password: values.password,
          profilePicture: URL.createObjectURL(values.profilePicture),
        })
      );
    },
  });

  return (
    <div className="d-flex justify-content-evenly mt-3">
      <div className="d-flex-column align-self-center justify-content-center">
        <h2 className="text-center mb-5">Sign Up</h2>
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
              <div className="error text-danger">
                {formik.errors.profilePicture}
              </div>
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
      <div className="d-flex align-self-center justify-content-center">
        <img
          src={image}
          alt="https://squahr.com/assets/images/authentication/signup.png"
        ></img>
      </div>
    </div>
  );
};

export default SignUp;
