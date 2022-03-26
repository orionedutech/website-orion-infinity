import "./bigImageRight.css";
import { OrangeButtonLarge } from "../../Components/Buttons";

const BigImageRight = ({ title, image, subTitle, btn }) => {
  return (
    <div
      className={`section-container bg-gray-lite home ${image} big-right-image `}
    >
      <div className="sub-cont-right">
        <div className="section-title-cont">
          <hr className="section-title-line" />
          <h3 className="section-title cl-white">{title}</h3>
        </div>
        <p className="image-subt cl-white">{subTitle}</p>
        {btn && (
          <div className="btn-cont-images">
            <a href="#11">
              <OrangeButtonLarge text={"Connect with us"} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default BigImageRight;
