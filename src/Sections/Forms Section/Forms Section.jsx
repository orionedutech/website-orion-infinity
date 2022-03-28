/* eslint-disable */

import "./formsSection.css";
import { OrangeButtonLarge } from "../../Components/Buttons";
import { useState } from "react";
import axios from "axios";

const FormsSection = ({ data, title }) => {
  const [formDisplay, setFormDisplay] = useState(null);

  return (
    <div className="section-container">
      {/* <div className="section-title-cont">
        <hr className="section-title-line" />
        <h3 className="section-title">{title}</h3>
      </div> */}

      <div className="card-holder">
        {data.map((item) => {
          return (
            <div className="card-landscape card-ls-abt-us">
              <div className="cont-dev-card-img-cont">
                <img src={item.image} alt="" />
              </div>
              <div className="ls-card-text-cont">
                <h2  className="title-xlrage" >{item.title}</h2>
                <p className="p-text">{item.description}</p>
                <div className="some-bt-cont" >
                <a href={`#${item.id}`} >
                  <OrangeButtonLarge
                    text={item.buttonText}
                  />
                </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <FormDisplayComponent formDisplay={formDisplay} /> */}
    </div>
  );
};

export default FormsSection;

const FormDisplayComponent = ({ formDisplay }) => {
  return (
    <div className="card-holder">
      {formDisplay === 1 ? <FormJob /> : null}
      {formDisplay === 2 ? <FormCompany /> : null}
    </div>
  );
};
/* eslint-disable */
