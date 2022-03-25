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
            <h5>Orion Infinity</h5>
            <Link to="/">
              {" "}
              <p>About Us</p>
            </Link>
            <Link to="/">
              {" "}
              <p>Contact Us</p>
            </Link>
          </div>
        </div>
        <div className="footer-box box-3">
          <div className="sub-content-box">
            <h5>Our Programs</h5>

            <Link to="/terms-and-conditions">
              {" "}
              <p>Terms & Conditions</p>{" "}
            </Link>
            <Link to="/refund-policy">
              {" "}
              <p>Refund Policy</p>{" "}
            </Link>
            <Link to="/privacy-policy">
              {" "}
              <p>Privacy Policy</p>{" "}
            </Link>
          </div>
        </div>
        <div className="footer-box box-4">
          <div className="sub-content-box">
            <h5>Corporate Office</h5>
            <p>
              Orion House, 28, Rajarhat Main Road,
              <br /> Chinar Park, Kolkata, <br />
              West Bengal - 700157{" "}
            </p>
          </div>
        </div>
      </footer>
      <div className="footer-bar-cont">
        <div className="footer-bar">
          <div className="flex1">
            <p>© Orion Edutech Pvt. Ltd 2021 | All Rights Reserved</p>
          </div>
          <div className="flex2">
            <p>
              <Link to="/terms-and-conditions"> Terms & Conditions </Link> |{" "}
            </p>
            <p>
              {" "}
              <Link to="/refund-policy"> Refund Policy </Link> |{" "}
            </p>
            <p>
              <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
            </p>
            <p>Sitemap </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
