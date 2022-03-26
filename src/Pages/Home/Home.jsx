/* eslint-disable */
import "./Home.css";
import { ButtonKnowMoreHero } from "../../Components/Buttons/Buttons";
import {
  GrayIcons,
  BlueIcons,
  FeaturedSection,
  TestimonialsSection,
  ContactSection,
  BigImageRight,
  FormsSection,
  NumberStatsDisplay
} from "../../Sections";
import { BigImageRightSection1 } from "../../Sections-Dumb";
import {
  homePageClientsAndPartners,
  testimonialsData,
  imageSectionData1,
  imageSectionData2,
  formsData,
  numbersData,
  staffingAndRecuritment,
  datawhyChoseInfinityHRSolution,
  dataThanksforLettingUsServeYou,
  dataSomeIndustryweExpertIn
  
} from "./data";

const Home = () => {
  return (
    <>
      <div className="home home-data-cont bg-home">
        <div className="home-data-subcont-right">
          <div className="inner-cont">
            <h2 className="hero-title-1">Orion Infinity HR Solutions</h2>
            <h1 className="hero-title-2">meets all your HR, Recruitment and Manpower Needs!</h1>
          </div>
          <a className="main-href" href="#9">
            <ButtonKnowMoreHero text={"Discover more"} lgtext />
          </a>
        </div>
      </div>
      <BigImageRightSection1
        subTitle={imageSectionData2.subTitle}
        image={"bg-two"}
        title={"Our Innovative Workforce Solutions"}
      />
      <BigImageRight
        subTitle={imageSectionData1.subTitle}
        image={"bg-one"}
        title={"End-To-End Human Resource Solutions"}
        btn
      />
     
      <BlueIcons dataIcons={staffingAndRecuritment} title={"Staffing & Recruitment"} />
      <FeaturedSection
        title={"Why Choose Orion Infinity HR Solutions?"}
        data={datawhyChoseInfinityHRSolution}
        subTitle={
          "Our global footprint and expertise is the differentiating factor for choosing us for your HR requirements."
        }
        alsoButton
      />

      <GrayIcons
        logos={dataThanksforLettingUsServeYou}
        title={"Thank you for letting us serve you!"}
      />
      <NumberStatsDisplay title={'Our Success'} data={numbersData} />

      <BlueIcons
        dataIcons={dataSomeIndustryweExpertIn}
        title={"Some of the industries we’re experts in"}
      />
      <FormsSection title={"Forms"} data={formsData} />


     </>
  );
};
export default Home;
