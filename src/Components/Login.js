import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const LogIn = async (e) => {
    try {
      e.preventDefault();
      let result = await fetch("http://127.0.0.1:8000/logIn", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      result = await result.json();

      if(!result.success){
        alert("INVALID PERSON")
      }if(result.success){
        navigate('/home');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container w-50">
      <h1 className="text-center fw-bold">LOG-IN</h1>
        <form className="text-center">
          <div className="mt-5 p-5 fw-bolder">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="p-5 fw-bold">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="form-control"
              id="exampleInputPassword1"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your password with anyone else.
            </div>
          </div>
          <button
            onClick={LogIn}
            type="submit"
            className="btn btn-primary me-5"
          >
            Submit
          </button>
          <a href="/*">I'm a new user</a>
        </form>
      </div>
    </>
  );
};

export default Login;
