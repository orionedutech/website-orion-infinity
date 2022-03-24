import "./NavBar.css";
import {OrangeButton} from '../Buttons/Buttons'
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {aboutUs, ourPrograms, ourServices} from './data'


const NavBar = ({ mobileMenuActive, handleMobileMenuActive }) => {
  const [aboutUsSubMenuDisplay, setAboutUsSubMenuDisplay] = useState(false);
  const [ourProgramsSubMenuDisplay, setOurProgramsSubMenuDisplay] =
    useState(false);
  const [ourServicesSubMenuDisplay, setOurServicesSubMenuDisplay] =
    useState(false);

  const handleChangeAboutUs = () => {
    setAboutUsSubMenuDisplay(!aboutUsSubMenuDisplay);
  };
  const handleChangeOurServices = () => {
    setOurServicesSubMenuDisplay(!ourServicesSubMenuDisplay);
  };
  const handleChangeOurPrograms = () => {
    setOurProgramsSubMenuDisplay(!ourProgramsSubMenuDisplay);
  };

  const handleReset = () => {
    setAboutUsSubMenuDisplay(false);
    setOurProgramsSubMenuDisplay(false);
    setOurServicesSubMenuDisplay(false);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    return () => {
      handleReset();
    };
  }, [pathname]);

  return (
    <nav>
      <div className="nav-logo-cont">
        <Link to="/">
          <img
            className="nav-cont"
            src="https://res.cloudinary.com/learnhat/image/upload/v1641191551/orion-new-website/logo_new_main_q47dby.jpg"
            alt="orion-logo"
          />
        </Link>
      </div>
      <div className="nav-items-cont">
        <ul className="nav-items-list">
          <li className="nav-item tab-hide">
            <Link to="/">Home</Link>
          </li>
          <li
            className="nav-item tab-hide"
            onMouseOver={handleChangeAboutUs}
            onMouseOut={handleChangeAboutUs}
          >
            {/* <Link
              to="/about-us"
            > */}
            About us
            {/* </Link> */}
            <SubMenu
              subMenuDisplay={aboutUsSubMenuDisplay}
              handleReset={handleReset}
              left={"40%"}
              data={aboutUs}
            />
          </li>
          <li
            className="nav-item"
            onMouseOver={handleChangeOurServices}
            onMouseOut={handleChangeOurServices}
          >
            {/* <a
              target="_blank"
              rel="noreferrer"
              href="http://www.orioncorporate.com/"
            > */}
            Our Services
            {/* </a> */}
            <SubMenu
              subMenuDisplay={ourServicesSubMenuDisplay}
              handleReset={handleReset}
              left={"47%"}
              data={ourServices}
            />
          </li>
          <li
            className="nav-item"
            onMouseOver={handleChangeOurPrograms}
            onMouseOut={handleChangeOurPrograms}
          >
            {/* <a
              target="_blank"
              rel="noreferrer"
              href="https://www.orionedutech.com/govt_project.php"
            > */}
            Our Programs
            {/* </a> */}
            <SubMenu
              subMenuDisplay={ourProgramsSubMenuDisplay}
              handleReset={handleReset}
              left={"55%"}
              data={ourPrograms}
            />
          </li>
          <li className="nav-item">
            <a 
              rel="noreferrer" href="https://orionedutech.in/corporate-social-responsibility">CSR</a>
          </li>
          
          <li className="nav-item tab-hide">
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://play.google.com/store/apps/details?id=com.learnhath.OrionEdutech"
          >
            <OrangeButton text="Download App" login />
          </a>
        </ul>
      </div>
      <button className="menu-btn" onClick={handleMobileMenuActive}>
        <i className={mobileMenuActive ? `fas fa-times` : `fas fa-bars`}></i>
      </button>
    </nav>
  );
};

export default NavBar;

const SubMenu = ({ subMenuDisplay, handleReset, left, data }) => {
  return (
    <div
      className={`sub-menu ${subMenuDisplay ? "active" : null}`}
      style={{ position: "absolute", left: left }}
      onMouseLeave={handleReset}
    >
      {data.map((item) => {
        return item.wlink ? ( <a rel="noreferrer" href={item.wlink} className="sub-menu-item" >{item.title}</a> ) : (
          <Link to={item.link} className="sub-menu-item">
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};
