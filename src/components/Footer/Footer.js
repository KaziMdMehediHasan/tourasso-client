import {
  faFacebook,
  faInstagram,
  faSnapchat,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../logo.png";
import "./Footer.css";

const Footer = () => {
  const phone = <FontAwesomeIcon icon={faPhoneAlt} />;
  const map = <FontAwesomeIcon icon={faMapMarkerAlt} />;
  const mail = <FontAwesomeIcon icon={faEnvelope} />;

  //   brand icons
  const facebook = <FontAwesomeIcon icon={faFacebook} />;
  const instagram = <FontAwesomeIcon icon={faInstagram} />;
  const twitter = <FontAwesomeIcon icon={faTwitter} />;
  const snapChat = <FontAwesomeIcon icon={faSnapchat} />;
  return (
    <div className="bg-dark text-light">
      <div className="container footer-parent ">
        <div className="footer-row p-3">
          <img src={logo} alt="brand" />
          <p>Beautiful One Day, Perfect The Next</p>
          <p>
            <span>{phone}</span> 1-677-124-44227
          </p>
          <p>
            <span>{map} </span>
            Eighth Avenue 487, New York
          </p>
          <p>
            <span>{mail} </span>
            wanderers@qodeinteractive.com
          </p>
        </div>
        <div className="footer-row">
          <h4>Latest Posts</h4>
          <p>
            Traveling – It Leaves You Speechless, Then Turns You Into A
            Storyteller
          </p>
          <hr />
          <p>
            A Journey Is Always Best Measured In New Friends, Rather Than Miles{" "}
          </p>
          <hr />
          <p>Live Now As If You’d Drop Dead In Ten Seconds </p>
        </div>
        <div className="footer-row">
          <h4>Support</h4>
          <p>Contact us</p>
          <p>Our Blogs</p>
          <p>Contact us</p>
          <p>Terms And Conditions</p>
        </div>
        <div className="footer-row">
          <h4>Follow Us</h4>
          <p>
            <span>{facebook} </span> facebook.com/tourasso
          </p>
          <p>
            <span>{instagram} </span> instagram.com/tourasso
          </p>
          <p>
            <span>{twitter} </span> twitter.com/tourasso
          </p>
          <p>
            <span>{snapChat} </span> _tourasso
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
