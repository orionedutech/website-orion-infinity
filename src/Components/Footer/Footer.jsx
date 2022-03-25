import "./Footer.css";
import { Link } from "react-router-dom";
import logo from '../../logo.jpg'

const Footer = () => {
  return (
    <div className="bg-apna-blue">
      <footer className="bg-apna-blue">
        <div className="footer-box box-1">
          <img
            className="footer-logo"
            src={logo}
            alt=""
          />
          <div className="sub-content-box-icons">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/OrionEdutech123"
            >
              <i class="fab fa-facebook-f fab-special"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/orion-edutech-pvt-ltd/ "
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/Orionedutech123"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCyu7fWw8L_FaRonKMgVu8-w"
            >
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="footer-box box-2">
        <div className="sub-content-box">
            <h5>Our Services</h5>
            <Link to="/">
              {" "}
              <p>Staffing - Corporate Alliance</p>
            </Link>
            <a rel="noreferrer" href="https://orionedutech.in/study-abroad">
              {" "}
              <p>Study Abroad</p>
            </a>
            <a
              rel="noreferrer"
              href="https://orionedutech.in/content-development"
            >
              {" "}
              <p>Content Development</p>
            </a>
            <a
              rel="noreferrer"
              href="https://orionedutech.in/international-business"
            >
              {" "}
              <p>International Business</p>
            </a>
          </div>
          
         
          
          
        </div>
        <div className="footer-box box-3">
          <div className="sub-content-box">
            <h5>Our Programs</h5>
            <a
              rel="noreferrer"
              href="https://orionedutech.in/skill-development"
            >
              {" "}
              <p>Skill Development</p>
            </a>
            <a
              rel="noreferrer"
              href="https://orionedutech.in/foreign-internship"
            >
              {" "}
              <p>Foreign Internship</p>
            </a>
            <a
              rel="noreferrer"
              href="https://orionedutech.in/international-schooling"
            >
              {" "}
              <p>International Schooling</p>
            </a>
            <a
              rel="noreferrer"
              href="/"
            >
              {" "}
              <p>Nursing Job (Germany)</p>
            </a>
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
          <div className="sub-content-box">
            <h5>Email</h5>
            <p>info@orionedutech.com</p>
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
