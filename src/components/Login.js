import React from "react";
// import formik from "formik";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="login__body">
      <div className="card">
        <h5 className="text-center mb-4">Login to your account</h5>
        <from>
          <label htmlFor="email">Email ID / Phone Number</label>
          <br />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button class="btn btn-block btn-primary">Login</button>
        </from>
      </div>
    </div>
  );
};

export default Login;
