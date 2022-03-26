import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../logo.jpg";

const Footer = () => {
  return (
    <div className="bg-apna-blue">
      <footer className="bg-apna-blue">
        <div className="footer-box box-1">
          <img className="footer-logo" src={logo} alt="" />
        </div>

        <div className="footer-box box-2">
          <div className="sub-content-box">
            {/* <h5>Orion Infinity</h5> */}
            <Link to="/about-us">
              {" "}
              <p>About Us</p>
            </Link>
            <Link to="/contact-us">
              {" "}
              <p>Contact Us</p>
            </Link>
            <Link to="/terms-and-conditions">
              {" "}
              <p>Terms & Conditions</p>{" "}
            </Link>
            <Link to="/privacy-policy">
              {" "}
              <p>Privacy Policy</p>{" "}
            </Link>
          </div>
        </div>
        <div className="footer-box box-3">
          <div className="sub-content-box">
            {/* <h5>Our Programs</h5> */}
            <a href="https://orionedutech.in/">
              <p>Orion Edutech</p>
            </a>
          </div>
          <div className="sub-content-box">
            <h5>Email</h5>
            <p>info@orionedutech.com</p>
          </div>
        </div>
        <div className="footer-box box-4">
          <div className="sub-content-box">
            <h5>Corporate Office</h5>
            <p>
              Orion Infinity HR Solutions FZE,
              <br /> Sheikh Rashid Tower, ESO 27, 7th Floor,
              <br /> Dubai World Trade Centre, <br />
              Dubai, UAE{" "}
            </p>
          </div>
          {/* <div className="sub-content-box">
            <h5>Email</h5>
            <p>info@orionedutech.com</p>
          </div> */}
        </div>
      </footer>
      <div className="footer-bar-cont">
        <div className="footer-bar">
          <div className="flex1">
            <p>© Orion Infinity HR Solutions FZE | All Rights Reserved</p>
          </div>
          <div className="flex2">
            {/* <p>
              <Link to="/terms-and-conditions"> Terms & Conditions </Link> |{" "}
            </p>
            <p>
              {" "}
              <Link to="/refund-policy"> Refund Policy </Link> |{" "}
            </p>
            <p>
              <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
            </p>
            <p>Sitemap </p> */}
            {/* <div className="sub-content-box"> */}
            {/* <h5>Email</h5> */}
            {/* <p>info@orioninfinityhr.com</p> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
