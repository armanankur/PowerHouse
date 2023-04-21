import React, { useEffect, useState } from "react";
import styled from "./Login.module.css";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorTxt, setErrorTxt] = useState("");
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  function isEmail(str) {
    return str.match(pattern);
  }
  const handleClick = (e) => {
    e.preventDefault();
    if (userList === null) {
      setError(true);
      setErrorTxt("*Invalid Credentials");
      return;
    } else {
      const userFind = userList.find(
        (person) => person.email === email && person.password === password
      );
      if (email === "" && password === "") {
        setError(true);
        setErrorTxt("*Input field cant't be blank");
      } else if (isEmail(email) === null) {
        setError(true);
        setErrorTxt("*Invalid email");
      } else if (password.length < 6) {
        setError(true);
        setErrorTxt("*Password must be atleast 6 characters");
      } else if (userFind !== undefined) {
        setError(false);
        setErrorTxt("");
        alert(`${userFind.username} Login Successfully`);
        navigate("/");
        setEmail("");
        setPassword("");
      } else if (userFind === undefined) {
        setError(true);
        setErrorTxt("*Please register yourself");
      }
    }
  };

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("userData"));
    // console.log(data);
    setUserList(data);
  }, []);

  const handleJoinNowClick = () => {
    navigate("/register");
  };
  return (
    <div className={styled.mainContainer}>
      <div className={styled.loginContainer}>
        <h2>Login Now</h2>
        <form action="">
          <div className={styled.inputField}>
            <label htmlFor="email"> Email </label>
            <InputField
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styled.inputField}>
            <label htmlFor="password"> Password </label>
            <InputField
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
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
              ) : (
                ""
              )}
            </small>
          </div>
          <div className={styled.btnContainer}>
            <Button btnName="Login" onClick={handleClick} />
          </div>
        </form>
        <div className={styled.switch}>
          <strong>Don't have account ? </strong>{" "}
          <Link
            className={styled.login}
            to="/register"
            onClick={handleJoinNowClick}
          >
            {" "}
            JoinUs Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
