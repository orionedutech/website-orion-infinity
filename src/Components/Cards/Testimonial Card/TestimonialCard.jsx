import "./testimonialCard.css";
// import { useState } from "react";

const TestimonialCard = ({
  image,
  name,
  title,
  company,
  description,
  star,
}) => {
  // const [readMore, setReadMore] = useState(false);

  return (
    <div className="card-landscape testimonial-card bg-white ">
      <div className="t-card-p1">
        <img className="avatar-img" src={image} alt="" />
        <div className="t-card-p1-sub1">
          <h5 className="" >{name}</h5>
          <p>{title} </p>
          <p>{company}</p>
        </div>
      </div>

      <div className="t-card-p2">
          <div className="quote-cont" >
          <i class="fas fa-quote-left"></i>
          </div>
          <div className="t-card-p2-sub1">
            <p className="desc p-text">{description}</p>
        </div>

        {/* <img className="testimonial-stars" src="https://res.cloudinary.com/learnhat/image/upload/v1638881385/lms-app/corporate%20alliance%20website/Group_3095_knfnen.png" alt={star} /> */}
      </div>
    </div>
  );
};

export default TestimonialCard;
