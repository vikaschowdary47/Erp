import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./Login.css";

const Login = () => (
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");

  <Formik
    initialValues={{ email: "", password: "" }}
    // onSubmit={(values, { setSubmitting }) => {
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        window.location.href = "/students";
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string().email().required("Required"),
      password: Yup.string().min(6).required("Required"),
    })}
  >
    {(props) => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;
      return (
        <div className="login__body">
          <div className="card">
            <h5 className="text-center mb-4">Login to your account</h5>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email ID / Phone Number</label>
              <br />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email && "error"}
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
              <br />
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password && "error"}
              />
              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}
              <button
                className="btn btn-block btn-primary"
                type="submit"
                disabled={isSubmitting}
              >
                Login
              </button>
            </form>
            <div className="mt-3">
              <a href="##">Forgot Password</a>/
              <a href="##">Claim your Account</a>
            </div>
          </div>
        </div>
      );
    }}
  </Formik>
);

export default Login;
