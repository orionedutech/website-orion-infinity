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
                <div className="some-bt-cont">
                  <OrangeButtonLarge
                    text={item.buttonText}
                    clickFunc={() => setFormDisplay(item.id)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <FormDisplayComponent formDisplay={formDisplay} />
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
const FormJob = () => {
  const [status, setStatus] = useState(false);
  const baseUrl =
    "https://orionedutech.co.in/apis/learnhat_two/Orioninfinity/orionInfinityJobFromSubmit";
  const [name, setName] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userphone, setUserphone] = useState("");
  const [sector, setSector] = useState("");
  const [previousJobRole, setPreviousJobRole] = useState("");
  const [resume, setResume] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}`,
        JSON.stringify({
            fromName: name,
            fromEmail: useremail,
            fromPhone: userphone,
            fromSector: sector,
            fromPreviousjobrole: previousJobRole,
            andfromAttachedCV : 'here'
        })
      );
      if (response.data.emailSend) {
        setStatus(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return status ? (
    <div className="card-landscape">
      <p className="form-submit-text">
        Your details have been submitted successfully. Our team will get back to
        you shortly.
      </p>
    </div>
  ) : (
    <div className="form-box">
      <input
        type="text"
        placeholder="Name"
        value={name}
        name=""
        id=""
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Email ID"
        value={useremail}
        name=""
        id=""
        onChange={(e) => setUseremail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={userphone}
        name=""
        id=""
        maxLength={10}
        onChange={(e) => setUserphone(e.target.value)}
      />
      <input
        type="text"
        placeholder={"Sector"}
        value={sector}
        name=""
        id=""
        onChange={(e) => setSector(e.target.value)}
      />
      <input
        type="text"
        placeholder={"Previous Job Role"}
        value={previousJobRole}
        name=""
        id=""
        onChange={(e) => setPreviousJobRole(e.target.value)}
      />
      <label>
        Your Resume/CV
        <input
          type="file"
          placeholder={"Previous Job Role"}
          name=""
          id=""
          // onChange={(e) => setPreviousJobRole(e.target.value)}
        />
      </label>

      <div className="form-submit-button" onClick={handleSubmit}>
        <OrangeButtonLarge text={"Submit"} />
      </div>
    </div>
  );
};
const FormCompany = () => {
  const [status, setStatus] = useState(false);
  const baseUrl =
    "https://orionedutech.co.in/apis/learnhat_two/Orioninfinity/orioninfinityCompanyFromSubmit";

  const [companyName, setCompanyName] = useState("");
  const [repName, setRepName] = useState("");
  const [respDes, setRepDes] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userphone, setUserphone] = useState("");

  const handleFormSubmit = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}`,
        JSON.stringify({
            namefcompany: companyName,
            namefrepresentative: repName,
            designationfrepresentative: respDes,
            fromemail: useremail,
            fromphonenumber: userphone,
        })
      );
      console.log(response)
      if (response.data.emailSend) {
        setStatus(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return status ? (
    <div className="card-landscape">
      <p className="form-submit-text">
        Your details have been submitted successfully. Our team will get back to
        you shortly.
      </p>
    </div>
  ) : (
    <div className="form-box">
      <input
        type="text"
        placeholder="Name of Company"
        value={companyName}
        name=""
        id=""
        onChange={(e) => setCompanyName(e.target.value)}
      />

      <input
        type="text"
        placeholder={"Name of Representative"}
        value={repName}
        name=""
        id=""
        onChange={(e) => setRepName(e.target.value)}
      />
      <input
        type="text"
        placeholder={"Designation of Representative"}
        value={respDes}
        name=""
        id=""
        onChange={(e) => setRepDes(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email ID"
        name=""
        id=""
        onChange={(e) => setUseremail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        name=""
        id=""
        maxLength={10}
        onChange={(e) => setUserphone(e.target.value)}
      />

      <div className="form-submit-button" onClick={handleFormSubmit}>
        <OrangeButtonLarge text={"Submit"} />
      </div>
    </div>
  );
};
