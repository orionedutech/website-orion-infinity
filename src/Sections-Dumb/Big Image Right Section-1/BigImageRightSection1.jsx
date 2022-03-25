import "./bigImageRightSection1.css";
import { OrangeButtonLarge } from "../../Components/Buttons";

const BigImageRightSection1 = ({ title, image, subTitle, btn }) => {
  return (
    <div
      className={`section-container bg-gray-lite home ${image} big-right-image-fix `}
    >
      <div className="sub-cont-right-fix">
        <div className="section-title-cont">
          <hr className="section-title-line" />
          <h3 className="section-title ">{title}</h3>
        </div>
        <p className="image-subt-fix">{subTitle}</p>
        {btn && (
          <div className="btn-cont-images">
            <a href="#9">
              <OrangeButtonLarge text={"Connect with us"} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default BigImageRightSection1;
