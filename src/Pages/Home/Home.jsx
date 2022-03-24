import "./Home.css";
import { ButtonKnowMoreHero } from "../../Components/Buttons/Buttons";
import { GrayIcons, BlueIcons, FeaturedSection, TestimonialsSection, ContactSection } from "../../Sections";
import {
  homePageClientsAndPartners,
  keysector_icons,
  featuredCourses,
  testimonialsData,
  contact_data
} from "./data";

const Home = () => {
  return (
    <>
      <div className="home home-data-cont bg-home">
        <div className="home-data-subcont-right">
          <div className="inner-cont">
            <h2 className="hero-title-1">Orion Infinity HR Solutions</h2>
            <h1 className="hero-title-2">meets all your HR needs!</h1>
          </div>
          <a className="main-href" href="#9">
            <ButtonKnowMoreHero text={"Discover nore"} lgtext />
          </a>
        </div>
      </div>

      <BlueIcons dataIcons={keysector_icons} title={"Staffing & Recruitment"} />

      <FeaturedSection
        title={"Why Choose Orion Infinity HR Solutions?"}
        data={featuredCourses}
        subTitle={
          "Our global footprint and expertise is the differentiating factor for choosing us for your HR requirements."
        }
        alsoButton
      />

      <GrayIcons
        logos={homePageClientsAndPartners}
        title={"Thank you for letting us serve you!"}
        
      />
      <TestimonialsSection data={testimonialsData} title={"What do our happy Clients say?"} />
      <BlueIcons dataIcons={keysector_icons} title={"Some of the industries we’re experts in"} />
      <ContactSection data={contact_data} title={"Contact"} />

      {/* <FocusAreaSection />
      <OurSuccess/>
      
      */}
    </>
  );
};
export default Home;
