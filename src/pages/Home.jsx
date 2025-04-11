import React from "react";
// import HeaderSection from "../components/HeaderSection";
import video2 from "../assets/video2.mp4";
// import heroImage from "../assets/hero-image.jpg";
import Header from "../components/Header";
import WhyBellway from "../components/WhyBellway";
import BellwayServices from "../components/BellwayServices";
import Serve from "../components/Serve";
import SDLC from "../components/SDLC";
import HomeSlider from "../components/HomeSlider";
import industriesList from "../data/industriesList";
import solutionslist from "../data/solutionslist";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import faq1 from "../data/faq1";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bellway Infotech - Web & App Development Company in India</title>
        <meta
          name="description"
          content="Bellway Infotech offers IT services, mobile app development, web development, AI solutions, and digital marketing. As one of the top mobile app development companies in India and the USA, we specialize in creating custom mobile applications for businesses, advanced AI app development services, e-commerce solutions, and more."
        />
        <meta
          name="keywords"
          content="IT services, app development, web development, digital marketing, mobile app development company, top mobile app developers in India, mobile development company in USA, mobile app development for business, mobile application software, AI app development, AI solutions, e-commerce app development, app development for businesses, custom app development, mobile app development services, IT consulting, software development company, digital marketing services, app design and development, cloud app development, enterprise mobile apps"
        />
      </Helmet>

      <Header
        title="Custom App Development Company"
        para1="We have developed over 500+ Android and iOS-based mobile"
        para2="At Bellway Infotech, we specialize in custom app development solutions that are designed to solve your unique business challenges. Whether you're looking to build a mobile app, web application, or enterprise-level solution, our expert developers work closely with you to create a product that meets your exact specifications and delivers a seamless user experience."
        mediaType="video"
        mediaSrc={video2}
      />
      <WhyBellway />
      <BellwayServices />
      <Serve
        heading="Industries We Serve"
        description="Being a mobile app development company, we have been fortunate in serving clients from different industries. Here is the list of all industries for whom we have provided Mobile app development service."
        industries={industriesList}
      />
      <SDLC />
      <HomeSlider />
      <Serve
        heading="Solutions"
        description="Being a Mobile App development and web development company Bellway consistently acumen into latest Technologies for providing nothing less than best to our Clients and Prospects."
        industries={solutionslist}
      />
      <Testimonials />
      <Faq
        data={faq1}
        title="Frequently Asked Questions"
        accentColor="#D82C2C"
      />
    </>
  );
};

export default Home;
