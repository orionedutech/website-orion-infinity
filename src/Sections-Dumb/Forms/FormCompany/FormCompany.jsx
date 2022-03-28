import axios from "axios";
import { useState } from "react";
import { OrangeButtonLarge } from "../../../Components/Buttons";

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
        // console.log(response)
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
  export default FormCompany