import "./aboutUsRightData.css";
import { OrangeButtonLarge } from "../../Components/Buttons";

const AboutUsRightData = ({ title, image, subTitle, btn, theme }) => {
  return (
    <div
      className={`section-container bg-gray-lite home ${image} big-right-image big-right-image-ulta `}
    >
      <div className="sub-cont-right ">
        <div className="section-title-cont section-title-cont-right">
          <hr className="section-title-line section-title-line-big" />
          <h3 className={`section-title ${theme === 'light' ? '' : 'cl-white'}`}>{title}</h3>
        </div>
        <p className={`  image-subt-right ${theme === 'light' ? '' : 'cl-white'}`}>{subTitle}</p>
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

export default AboutUsRightData;
