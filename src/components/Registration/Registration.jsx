import React, { useState } from "react";
import styled from "./Registration.module.css";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
const Registration = () => {
  const [fname, setFname] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userData, setUserData] = useState([]);

  const [error, setError] = useState(false);
  const [errorTxt, setErrorTxt] = useState("");
const navigate=useNavigate()
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  function isEmail(str) {
    return str.match(pattern);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (fname === "" && email === "" && username === "" && password === "") {
      setError(true);
      setErrorTxt("*Input field can't be blank");
    } else if (fname.length <= 2) {
      setError(true);
      setErrorTxt("*Name contains atleast 3 Characters");
    } else if (username.length <= 4) {
      setError(true);
      setErrorTxt("*Username contains atleast 5 Characters");
    } else if (isEmail(email) === null) {
      setError(true);
      setErrorTxt("*Invalid email");
    } else if (password.length < 6) {
      setError(true);
      setErrorTxt("*Password contains atleast 6 characters");
    } else {
      setError(false);
      setErrorTxt("");

      const userInfo = {
        fname: fname,
        username: username,
        email: email,
        password: password,
      };

      userData.push(userInfo);
      //console.log(userData)
      setFname("");
      setUserName("");
      setEmail("");
      setPassword("");

      localStorage.setItem("userData", JSON.stringify(userData));
      console.log(userData);
      alert(`Welcome ${fname} , Registration Successfully `);
       navigate("/login")
    }

    //className={styled.mainContainer}
  };
  return (
    <div className={styled.mainContainer}>
      <div className={styled.formContainer}>
        <h2>JoinUs Now</h2>
        <form action="" onSubmit={handleFormSubmit}>
          <div className={styled.inputField}>
            <label htmlFor="fname">Full Name </label>
            <InputField
              type="text"
              placeholder="Enter Full Name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className={styled.inputField}>
            <label htmlFor="username">Username </label>
            <InputField
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className={styled.inputField}>
            <label htmlFor="email">Email </label>
            <InputField
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styled.inputField}>
            <label htmlFor="password">Password </label>
            <InputField
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <small>
            {error ? (
              <strong
                style={{
                  color: "yellow",
                  textShadow: "0.1px 0.2px 0.3px black",
                }}
              >
                {errorTxt}
              </strong>
            ) : null}
          </small>
          <div className={styled.btnContainer}>
            <Button btnName="SignUp" />
          </div>
        </form>
        <div className={styled.switch}>
          <strong>Back to </strong>{" "}
          <Link className={styled.login} to="/login">
            {" "}
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
