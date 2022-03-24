import "./CourseCard.css";
// import { WhiteButton, OrangeButton } from "../..";
// import { OrangeButtonLarge } from "../../buttons/Buttons";

 const CourseCard = ({ img, name, desc }) => {
  return (
    <div className="card course-card-cont">
      <img className="course-card-img" src={img} alt="" />
      <h4 className="course-card-name card-sub-title">{name}</h4>
      <div className="sub-check">
        <p className="course-card-desc p-text">{desc}</p>
        <div className="button-cont">
          {/* <a
            href="https://app.orionedutech.in/"
            target="_blank"
            rel="noreferrer"
          >
            <WhiteButton text="Preview" />
          </a> */}
          {/* <a className="btnCnt"
            href="https://app.orionedutech.in/"
            target="_blank"
            rel="noreferrer"
          >
            View Course
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default CourseCard
