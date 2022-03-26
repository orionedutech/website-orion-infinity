import "./aboutUs.css";
import { TextComponent } from "../../Sections";
import { textdata, teamdata } from "./data";
import {  AboutUsLeftData, AboutUsRightData } from "../../Sections";
import { Team } from "../../Sections-Dumb";

const AboutUs = () => {
  return (
    <>
      <div className="hero-csr">
        <div className="overlay-bg">
          <h1>About Us</h1>
          <h3>Driving Human Resources and Manpower Suceess in Middle-East</h3>
        </div>
      </div>
      <TextComponent
        title={"We offer efficient and potent HR solutions!"}
        mode={"light"}
        data={textdata}
        textTitle
        button
      />
       <AboutUsLeftData
        subTitle={'Our mission at Orion Infinity HR Solutions is to be the most preferred and reliable end-to-end HR solutions company focused on providing exceptional services, qualitative recruitment, and staffing with quick customer service.'}
        image={"bg-mission"}
        title={"Our Mission"}
        theme={'light'}
      />
      <AboutUsRightData
        subTitle={'To improve the well-being of our clients, partners, employees, and community. Orion Infinity HR Solutions envisions creating a holistic workforce solution for its clients that will help them cope with the changing global work culture.'}
        image={"bg-vision"}
        title={"Our Vision"}
        theme={'dark'}
      />
       <AboutUsLeftData
        subTitle={'Successfully offer multi-dimensional staffing solutions to our clients using our outstanding workforce skills. The overall objective is to provide an attuned approach from which both the employer and the candidate benefits.'}
        image={"bg-values"}
        title={"Our Values"}
        theme={'dark'}
      />
       
       <AboutUsRightData
        subTitle={'We keep ourselves extremely adept and thorough with the latest trends in the global workplace culture and constantly pursue developments in these fields. We dare to think out-of-the-box and innovate, evolving our system from time to time.'}
        image={"bg-innovation"}
        title={"Our Innovations"}
        theme={'light'}
      />
      <Team title={'Our Leadership'} data={teamdata}/>
    </>
  );
};

export default AboutUs;
