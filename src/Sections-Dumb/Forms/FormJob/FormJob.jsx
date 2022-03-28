import axios from "axios";
import { useState } from "react";
import { OrangeButtonLarge } from "../../../Components/Buttons";

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
console.log(resume)
  const handleSubmit = async () => {
    const formdata = new FormData();
    formdata.append(
      "data_json",
      JSON.stringify({
        fromName: name,
        fromEmail: useremail,
        fromPhone: userphone,
        fromSector: sector,
        fromPreviousjobrole: previousJobRole,
      })
    )
    formdata.append("fromAttachResume", resume)
    try {
      const response = await axios.post(`${baseUrl}`, formdata);
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
        type="number"
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
      <label style={{marginLeft:'1.5rem', marginTop:'1rem'}} >
        Your Resume/CV
        <input
          type="file"
          placeholder={"Resume"}
          name=""
          id=""
          onChange={(e) => setResume(e.target.files[0])}
          // onChange={(e) => setPreviousJobRole(e.target.value)}
        />
      </label>

      <div className="form-submit-button" onClick={handleSubmit}>
        <OrangeButtonLarge text={"Submit"} />
      </div>
    </div>
  );
};

export default FormJob;

