import React from "react";
import styled from "./Navbar.module.css";
import { BiDumbbell } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
const Navbar = () => {
  const navigate = useNavigate();
  const btnClicked = () => {
    //console.log("btnclickone")
    navigate("/login");
  };

  function clickHandlerlogo() {
    navigate("/");
  }
  return (
    <div className={styled.navbar_container}>
      <div className={styled.navlogo}>
        <div className={styled.navlogo}>
          <BiDumbbell onClick={clickHandlerlogo} />
        </div>
      </div>
      <div className={styled.navlink_container}>
        <ul className={styled.navlink}>
          <li>
            {" "}
            <Link className={styled.link} to="/">
              HOME
            </Link>
          </li>
          <li>
            {" "}
            <Link className={styled.link} to="/AboutUs">
              ABOUTUS
            </Link>
          </li>
          <li>
            {" "}
            <Link className={styled.link} to="/Program">
              PROGRAM
            </Link>
          </li>
          <li>
            {" "}
            <Link className={styled.link} to="/Training">
              TRAINING
            </Link>
          </li>
          <li>
            {" "}
            <Link className={styled.link} to="/Pricing">
              PRICING
            </Link>
          </li>
        </ul>
      </div>

      <div className={styled.navbtn}>
        <Button btnName="Join Us" onClick={btnClicked} />
      </div>
    </div>
  );
};
export default Navbar;
