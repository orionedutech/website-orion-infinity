import "./team.css";

const Team = ({ title, data }) => {
  return (
    <div className="section-container">
      <div className="section-title-cont">
        <hr className="section-title-line" />
        <h3 className="section-title">{title}</h3>
      </div>
      <div className="card-holder">
        {data.map((item) => {
          return (
            <div className="only-card card-last">
              <img className='prof-pics' src={item.image} alt="err" />
              <div className="last-test-cont" >
              <h4 className="last-card-name" >{item.name}</h4>
              <p className="last-card-title" >{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
