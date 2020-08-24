import React from "react";

const Signup = () => {
  return (
    <div>
      <div className="login__body">
        <div className="card">
          <h5 className="text-center mb-4">Create a new Account</h5>
          <from>
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" placeholder="Email" name="email"></input>
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              placeholder="Password"
              name="password"
            ></input>
            <button class="btn btn-block btn-primary">SignUp</button>
          </from>
        </div>
      </div>
    </div>
  );
};

export default Signup;
