import styled from "./footer.module.css";
import { BiDumbbell } from "react-icons/bi";
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialInstagram,
} from "react-icons/ti";
function Footer() {
  return (
    <div className={styled.footer}>
      <div className={styled.socialMedia}>
        <span className={styled.footerLogo}>
          <BiDumbbell />
        </span>
        <div></div>
        <h5>Lorem ipsum dolor sit amet consectet</h5>
        <div className={styled.socialMediaLogo}>
          <TiSocialTwitter />
          <TiSocialFacebook />
          <TiSocialInstagram />
        </div>
      </div>
      <div className={styled.links}>
        <ul className={styled.list}>
          <h3>Healthy Living</h3>
          <li>Lorem </li>
          <li>Lorem ipsum</li>
          <li>Lorem</li>
          <li>Lorem</li>
        </ul>
        <ul className={styled.list}>
          <h3>Services</h3>
          <li>Lorem ipsum</li>
          <li>Lorem</li>
          <li>Lorem ipsum</li>
          <li>Lorem</li>
        </ul>
        <ul className={styled.list}>
          <h3>Programs</h3>
          <li>Lorem ipsum</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem ipsum </li>
        </ul>
      </div>
      <div className={styled.rights}>
        <small>Copyright 2023 Power House | All Rights Reserved
        | Created by- </small><strong> Ankur Anand</strong>
      </div>
    </div>
  );
}
export default Footer;
