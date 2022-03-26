import './numberStatsDisplay.css'
import { OrangeButtonLarge } from '../../Components/Buttons';
const NumberStatsDisplay = ({ mode, data }) => {
  // const data = mode === 'light' ? studtyAbroadData : homeData;
  return (
    <div
      className={
        mode === 'light'
          ? "section-container bg-gray-lite"
          : "section-container bg-apna-blue"
      }
    >
      <div className="section-title-cont">
        <hr className="section-title-line" />
        <h3
          className={mode === 'light' ? "section-title" : "section-title cl-white"}
        >
          Our Success
        </h3>
      </div>

      <div className="card-holder our-success-card-holder">
        {data.map((item) => {
          return (
            <div
              className="our-success-numbers-card"
              style={{ color: mode === 'light' ? "#FFAA46" : "white" }}
            >
              <h4 className="our-s-number">{item.number}</h4>
              <p className="our-s-name">{item.name}</p>
            </div>
          );
        })}
      </div>

      {mode === 'light' && (
        <div className="kno-more-btnn-cont">
          <a href="#11">
            <OrangeButtonLarge text={"Know More"} />
          </a>
        </div>
      )}
    </div>
  );
};

export default NumberStatsDisplay;
