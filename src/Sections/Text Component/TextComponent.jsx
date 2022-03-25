import "./textComponent.css";
import { OrangeButtonLarge } from "../../Components/Buttons";

const TextComponent = ({ title, mode, data, textTitle, button }) => {
  return (
    <div
      className={
        mode === "light"
          ? "section-container bg-gray-lite"
          : "section-container bg-apna-blue"
      }
    >
      <div className="section-title-cont">
        <hr className="section-title-line" />
        <h3
          className={
            mode === "light" ? "section-title" : "section-title cl-white"
          }
        >
          {title}
        </h3>
      </div>
      <div className="card-holder company-text-box ">
        {textTitle && (
          <h1
            className="titleDesc"
            style={{ color: mode === "light" ? "inherit" : "white" }}
          >
            {textTitle}
          </h1>
        )}
        {data.map((item) => {
          return (
            <p
              className="p-text comp-text "
              style={{ color: mode === "light" ? "#596875" : "white" }}
            >
              {item}
            </p>
          );
        })}
      </div>
      <div className="btn-cont-center" >
        <OrangeButtonLarge text="Let's Connect"/>
      </div>
    </div>
  );
};

export default TextComponent;
