import "./blueIcons.css";

const BlueIcons = ({ dataIcons, title }) => {
  return (
    <div className="section-container">
      <div className="section-title-cont">
        <hr className="section-title-line" />
        <h3 className="section-title">{title}</h3>
      </div>

      <BlueIconsSection data={dataIcons} />
    </div>
  );
};

export default BlueIcons;

export const BlueIconsSection = ({ data }) => {
  return (
    <div className="card-holder ">
      {data.map((item) => {
        return (
          <div className="sub-cont-key-sec-blue-ic">
            <img
              className="item-blue-ic"
              src={item.icon ? item.icon : item.link}
              alt=""
            />
            <h5 className="text-blue-ic">{item.name ? item.name : item.title}</h5>
          </div>
        );
      })}
    </div>
  );
};
