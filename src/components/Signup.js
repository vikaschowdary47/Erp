import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const Signup = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        window.location.href = "/login";
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
        <div>
          <div className="login__body">
            <div className="card">
              <h5 className="text-center mb-4">Create a new Account</h5>
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
                  SignUp
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    }}
  </Formik>
);

export default Signup;
