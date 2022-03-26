import "./featuredSection.css";
import {CourseCard} from '../../Components/Cards';
import { OrangeButtonLarge } from "../../Components/Buttons";
const FeaturedSection = ({ title, data, subTitle, alsoButton }) => {
  return (
    <div className="section-container bg-gray-lite">
      <div className="section-title-cont">
        <hr className="section-title-line" />
        <h3 className="section-title">{title}</h3>
      </div>
      {subTitle && <p className="section-sub-title p-text" >{subTitle}</p> }
      <div className="card-holder">
        {data.map((item) => {
          return (
            <CourseCard img={item.image} name={item.name} desc={item.desc} />
          );
        })}
      </div>
      {/* <div className="playStoreBtnCont">
        <a
          className="playStoreLargeButton"
          href="https://play.google.com/store/apps/details?id=com.learnhath.OrionEdutech"
          target="_blank"
          rel="noreferrer"
        >
          Let’s Schedule a Meeting
        </a>
      </div> */}
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

export default FeaturedSection;
