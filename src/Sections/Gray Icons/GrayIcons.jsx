// import { OrangeButtonLarge } from "../../../utils/buttons/Buttons";
import { OrangeButtonLarge } from "../../Components/Buttons";
import "./grayIcons.css";

const GrayIcons = ({ csr, logos, title, alsoButton }) => {
  return (
    <div className="section-container">
      <div className="section-title-cont">
        <hr className="section-title-line" />
        <h3 className="section-title">{title}</h3>
      </div>
      <div className="card-holder">
        {logos.map((logo) => {
          return (
            <div className="sub-cont">
              <img className="item" src={logo.icon} alt="" />
            </div>
          );
        })}
      </div>

      {alsoButton && (
        <div className="kno-more-btnn-cont">
          <a href="#11">
            <OrangeButtonLarge text={"Discover more"} />
          </a>
        </div>
      )}
    </div>
  );
};

export default GrayIcons;
