import React from "react";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "Yup";

const ValidateLoginForm = () => {
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      console.log("Submitting");
    }}
  ></Formik>;
};

export default ValidateLoginForm;
