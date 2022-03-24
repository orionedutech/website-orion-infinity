import "./testimonialsSection.css";
import { TestimonialCard } from "../../Components/Cards";
const TestimonialsSection = ({title, data}) => {
  return (
    <div className="section-container bg-apna-blue">
      <div className="section-title-cont">
          <hr className="section-title-line cl-white" />
          <h3 className="section-title cl-white">{title}</h3>
        </div>
      <div className="card-holder">
        {data.map((item) => {
          return (
            <TestimonialCard
              image={item.image}
              name={item.name}
              title={item.title}
              company={item.company}
              description={item.description}
              start={item.star}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialsSection;
