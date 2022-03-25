/* eslint-disable */
import {OrangeButton} from '../Buttons/Buttons'
import "./MobileNavbar.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {aboutUs, ourPrograms, ourServices} from './data'


 const MobileNavbar = ({ mobileMenuActive, handleMobileMenuActive }) => {
  const [aboutUsSubMenuDisplay, setAboutUsSubMenuDisplay] = useState(false);
  const [ourProgramsSubMenuDisplay, setOurProgramsSubMenuDisplay] =
    useState(false);
  const [ourServicesSubMenuDisplay, setOurServicesSubMenuDisplay] =
    useState(false);

  const handleChangeAboutUs = () => {
    setAboutUsSubMenuDisplay(!aboutUsSubMenuDisplay);

    setOurProgramsSubMenuDisplay(false);
    setOurServicesSubMenuDisplay(false);
  };
  const handleChangeOurServices = () => {
    setOurServicesSubMenuDisplay(!ourServicesSubMenuDisplay);

    setAboutUsSubMenuDisplay(false);
    setOurProgramsSubMenuDisplay(false);
  };
  const handleChangeOurPrograms = () => {
    setOurProgramsSubMenuDisplay(!ourProgramsSubMenuDisplay);

    setAboutUsSubMenuDisplay(false);
    setOurServicesSubMenuDisplay(false);
  };

  const handleReset = () => {
    setAboutUsSubMenuDisplay(false);
    setOurProgramsSubMenuDisplay(false);
    setOurServicesSubMenuDisplay(false);
  };
  return (
    <div className={mobileMenuActive ? "mobile-nav active" : "mobile-nav"}>
      <div className="mobile-nav-items">
        <ul className="mobile-nav-items-list">
          <li onClick={handleMobileMenuActive} className="nav-item-m">
            <Link to="/">Home</Link>
          </li>

        
          <li onClick={handleMobileMenuActive} className="nav-item-m">
            <Link to="/about-us">About Us</Link>
          </li>
          <li onClick={handleMobileMenuActive} className="nav-item-m">
            <Link to="/contact-us">Contact Us</Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar

const SubMenu = ({
  subMenuDisplay,
  handleReset,
  left,
  data,
  handleMobileMenuActive,
}) => {
  return (
    <div
    
      className={`mob-sub-menu ${subMenuDisplay ? "mob-active" : null}`}
      onClick={handleReset}
    >
      {data.map((item) => {
        return item.wlink ? (
          <a key={item.wlink}
            onClick={handleMobileMenuActive}
            rel="noreferrer"
            href={item.wlink}
            className="mob-sub-menu-item"
          >
            {item.title}
          </a>
        ) : (
          <Link key={item.wlink}
            onClick={handleMobileMenuActive}
            to={item.link}
            className="mob-sub-menu-item"
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};
