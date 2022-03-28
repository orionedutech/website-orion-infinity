// import { FormJob, FormCompany } from "../../Sections/Forms Section/Forms Section";
import {FormJob, FormCompany} from '../Forms'


const FormSubSection = () => {
  return (
    <div id="12" >
    <div className="section-container">
      <div className="section-title-cont">
        <hr className="section-title-line" />
        <h3 className="section-title">Find your perfect job</h3>
      </div>

      <div className="card-holder">
        <FormJob />
      </div>
      
    </div>
    <div id="11" className="section-container">
      <div className="section-title-cont">
        <hr className="section-title-line" />
        <h3 className="section-title">Know more about our Solutions</h3>
      </div>

      <div className="card-holder">
        <FormCompany />
      </div>
      
    </div>
    </div>
  );
};

export default FormSubSection;
