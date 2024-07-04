import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const SUBMIT = async (event) => {
    try {
      event.preventDefault();
    let result = await fetch("http://localhost:8000/signIn", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, location }),
    });
    result = await result.json();
    if(result) {
      toast.success('Thanks For Ordering Food ', {
        position: "top-center",
        autoClose: 2000, // Auto-close the notification after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
      navigate("/home");
    }
    } catch (error) {
      console.log(error);
    }
    //   console.log(result);
  };
  return (
    <>
    <h1 className="text-center fw-bold">Go-Food Order Form</h1>
      <div className="container text-center  w-50 my-1">
        <div className="row">
          <div className="card-body">
            <form className="needs-validation">
              <div>
                <label htmlFor="username" className=" fw-bold mt-1">
                  Name :
                </label>
                <input
                  className="form-control mt-3"
                  type="text"
                  placeholder="TYPE NAME"
                  autoCorrect="off"
                  id="username"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
              </div>
              <div>
                <label htmlFor="useremail" className="fw-bold mt-4">
                  Email :
                </label>
                <input
                  className="form-control mt-3 "
                  type="text"
                  placeholder="TYPE EMAIL"
                  autoCorrect="off"
                  id="useremail"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
                <small className="text-dark fw-bold" >Your email must be unique  </small>
              </div>
              {/* <div>
                <label htmlFor="userpassword" className="fw-bold mt-4">
                  Password :
                </label>
                <input
                  className="form-control mt-3"
                  type="Password"
                  placeholder="TYPE PASSWORD"
                  autoCorrect="off"
                  id="userphone"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
                <small className="text-dark fw-bold" >Your password muat have 8-20 characters</small>
              </div> */}
              <div>
                <label htmlFor="userphone" className="fw-bold mt-4">
                  Phone no :
                </label>
                <input
                  className="form-control mt-2"
                  type="text"
                  placeholder="TYPE PHONE NUMBER"
                  autoCorrect="off"
                  id="userphone"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  required
                />
              </div>
              <div>
                <label htmlFor="useraddress" className="fw-bold mt-4">
                  Location :
                </label>
                <input
                  className="form-control mt-2 "
                  type="text"
                  placeholder="TYPE ADDRESS"
                  id="useraddress"
                  autoCorrect="off"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  required
                />
                <small className="text-dark fw-bold" >Your Location must be perfect  </small>
              </div>
            </form>
          </div>
        </div>
      </div>
      <center>
        <button className="btn btn-success text-center" onClick={SUBMIT}>
          SUBMIT
        </button>
        {/* <a href="/login">
          <button className="btn btn-danger text-center ms-5">
            ALREADY HAVE ACCOUNT
          </button>
        </a> */}
      </center>
    </>
  );
};

export default SignIn;
