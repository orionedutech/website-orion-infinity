import "./contactSection.css";

const ContactSection = ({ title, data }) => {
  return (
    <div className="section-container bg-gray-lite">
      <div className="section-title-cont">
        <hr className="section-title-line" />
        <h3 className="section-title">{title}</h3>
      </div>
      <div className="card-holder">
        {data.map((item) => {
          return (
            <div
              className="card-landscape wide-text-card"
              style={{ textAlign: "center" }}
            >
              <h5 className="card-sub-title wc-title">{item.name}</h5>
              <h5 style={{fontSize:'1rem',lineHeight:'1.2rem', color:'#2f4152'}} >{item.description}</h5>
              <div style={{marginTop:'1rem'}} >
              <h5 style={{fontSize:'1rem',lineHeight:'1.2rem', color:'#2f4152'}} >{item.phone}</h5>
              <h5 style={{fontSize:'1rem',lineHeight:'1.2rem', color:'#2f4152'}} >{item.email}</h5>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactSection;
