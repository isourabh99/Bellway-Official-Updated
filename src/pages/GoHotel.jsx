import React from "react";
import Header from "../components/Header";
import hotelbookingheader from "../assets/Hotel/hotelbookingheader.png";
import ProductBenefits from "../components/ProductBenefits";
import ScreenshotShowcase from "../components/ScreenshotShowcase";
import hotel1 from "../assets/Hotel/hotel1.png";
import hotel2 from "../assets/Hotel/hotel2.png";
import hotel3 from "../assets/Hotel/hotel3.png";
import hotel4 from "../assets/Hotel/hotel4.png";
import hotel5 from "../assets/Hotel/hotel5.png";
import hotel6 from "../assets/Hotel/hotel6.png";
import WhyChooseBellway from "../components/WhyChooseBellway";
import WhatWeDeliver from "../components/WhatWeDeliver";
import Testimonials from "../components/Testimonials";
import DeliverablesStackedScroll from "../components/DeliverablesStackedScroll";
import { Helmet } from "react-helmet";
const gohotel = [
  { heading: "Review and Ratings" },
  { heading: "Safety Measures" },
  { heading: "Contactless Delivery" },
  { heading: "Earning Page" },
  { heading: "Update Availability" },
  { heading: "Prescription Upload" },
  { heading: "Multiple Languages" },
  { heading: "Instant Pop-Up Notification" },
  { heading: "Filter Option" },
  { heading: "SEO Friendly" },
  { heading: "100% Customizable" },
  { heading: "Take Away or Delivery Option" },
];
const images = [hotel1, hotel2, hotel3, hotel4, hotel5, hotel6];

function GoHotel() {
  return (
    <>
      <Helmet>
        <title>BELLWAY INFOTECH | Multi-service Solutions</title>
        <meta
          name="description"
          content="Bellway Infotech offers versatile Go Hotel solutions tailored to meet diverse needs. Discover how we can enhance your business operations today."
        />
        <meta
          name="keywords"
          content="Bellway Infotech, multi-service solutions, Go Hotel software, business automation, tailored IT services, business operations, hospitality solutions, business process automation, IT service provider, software solutions for hospitality, hotel management system, hotel software solutions, business optimization services, technology for hospitality, cloud-based hotel software, hotel industry software, customized IT services, hospitality industry automation, Go Hotel app, business technology solutions"
        />
      </Helmet>
      <Header
        mediaSrc={hotelbookingheader}
        title="GO HOTEL"
        para1="Go Hotel is a cutting-edge hotel booking platform developed by Bellway Infotech, designed to make your stay planning fast, flexible, and seamless.Whether you're booking a quick city stay or planning a luxurious getaway, Go Hotel brings you the best stays at the best prices — all in one place."
        demoLink="https://play.google.com/store/apps/details?id=com.go.hotel"
      />
      <ProductBenefits benefits={gohotel} />
      <ScreenshotShowcase screenshots={images} />;
      <WhyChooseBellway heading="Why choose Go Hotel" />
      <WhatWeDeliver />
      <DeliverablesStackedScroll />
      <Testimonials />
    </>
  );
}

export default GoHotel;
