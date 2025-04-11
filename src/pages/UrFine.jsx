import React from "react";
import Header from "../components/Header";
import urfineheader from "../assets/UrFine/urfineheader.png";
import ProductBenefits from "../components/ProductBenefits";
import ScreenshotShowcase from "../components/ScreenshotShowcase";
import Fine1 from "../assets/UrFine/Fine1.png";
import Fine2 from "../assets/UrFine/Fine2.png";
import Fine3 from "../assets/UrFine/Fine3.png";
import Fine4 from "../assets/UrFine/Fine4.png";
import Fine5 from "../assets/UrFine/Fine5.png";
import Fine6 from "../assets/UrFine/Fine6.png";
import WhyChooseBellway from "../components/WhyChooseBellway";
import WhatWeDeliver from "../components/WhatWeDeliver";
import Testimonials from "../components/Testimonials";
import DeliverablesStackedScroll from "../components/DeliverablesStackedScroll";
import { Helmet } from "react-helmet";
const bellstorebenefits = [
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
const images = [Fine1, Fine2, Fine3, Fine4, Fine5, Fine6];

function UrFine() {
  return (
    <>
      <Helmet>
        <title>
          BELLWAY INFOTECH - UR FINE Comprehensive Service Appointment
        </title>
        <meta
          name="description"
          content="Experience seamless scheduling with Bellway Infotech's UR Fine Comprehensive Service Appointment. Enjoy efficient, user-friendly service scheduling for all your needs, ensuring a smooth and hassle-free experience."
        />
        <meta
          name="keywords"
          content="service appointment, service scheduling, user-friendly service, seamless scheduling, efficient service appointment, online service scheduling, appointment management, service booking, comprehensive service solutions, appointment scheduling software, service appointment system, hassle-free scheduling, custom service appointments, scheduling platform, service optimization, business appointment management, customer service appointment"
        />
      </Helmet>
      <Header
        mediaSrc={urfineheader}
        title="UR FINE"
        para1="UR FINE by Bellway Infotech – Smart Healthcare Appointment Scheduling
Say goodbye to long waiting times and complicated booking systems. UR FINE, developed by Bellway Infotech, is a dedicated platform for doctor consultations and medical appointment scheduling—designed to make healthcare access easier, faster, and more convenient."
        demoLink={
          "https://play.google.com/store/apps/details?id=com.bellwayinfotech.urfine&hl=en_US"
        }
      />
      <ProductBenefits benefits={bellstorebenefits} />
      <ScreenshotShowcase screenshots={images} />;
      <WhyChooseBellway heading="Why choose Ur Fine" />
      <WhatWeDeliver />
      <DeliverablesStackedScroll />
      <Testimonials />
    </>
  );
}

export default UrFine;
