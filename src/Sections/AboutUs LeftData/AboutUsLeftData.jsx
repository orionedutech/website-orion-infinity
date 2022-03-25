import "./aboutUsLeftData.css";
import { OrangeButtonLarge } from "../../Components/Buttons";

const AboutUsLeftData = ({ title, image, subTitle, btn, theme }) => {
  return (
    <div
      className={`section-container bg-gray-lite home ${image} big-right-image `}
    >
      <div className="sub-cont-right">
        <div className="section-title-cont">
          <hr className="section-title-line" />
          <h3 className={`section-title ${theme === 'light' ? '' : 'cl-white'}`}>{title}</h3>
        </div>
        <p className={`image-subt ${theme === 'light' ? '' : 'cl-white'}`}>{subTitle}</p>
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

export default AboutUsLeftData;
