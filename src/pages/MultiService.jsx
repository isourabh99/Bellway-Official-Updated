import React from "react";
import Header from "../components/Header";
import multiserviceheader from "../assets/MultiService/multiserviceheader1.png";
import ProductBenefits from "../components/ProductBenefits";
import ScreenshotShowcase from "../components/ScreenshotShowcase";
import multi1 from "../assets/MultiService/multi1.png";
import multi2 from "../assets/MultiService/multi2.png";
import multi3 from "../assets/MultiService/multi3.png";
import multi4 from "../assets/MultiService/multi4.png";
import multi5 from "../assets/MultiService/multi5.png";
import multi6 from "../assets/MultiService/multi6.png";
import WhyChooseBellway from "../components/WhyChooseBellway";
import WhatWeDeliver from "../components/WhatWeDeliver";
import Testimonials from "../components/Testimonials";
import DeliverablesStackedScroll from "../components/DeliverablesStackedScroll";
import { Helmet } from "react-helmet";
const multiservicebenfits = [
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
const images = [multi1, multi2, multi3, multi4, multi5, multi6];

function MultiService() {
  return (
    <>
      <Helmet>
        <title>BELLWAY INFOTECH | Multi-service Solutions</title>
        <meta
          name="description"
          content="Bellway Infotech offers versatile multi-service solutions tailored to meet diverse business needs. Discover how we enhance your business operations with cutting-edge technology, IT services, and business automation. Streamline your processes today."
        />
        <meta
          name="keywords"
          content="multi-service solutions, business automation, IT solutions, business operations, IT services, enterprise solutions, digital transformation, software solutions, cloud services, technology consulting, business process optimization, technology-driven business solutions, scalable business solutions, business software, service integration, IT consulting services, custom IT solutions, business automation services"
        />
      </Helmet>
      <Header
        mediaSrc={multiserviceheader}
        title="MULTI SERVICE"
        para1=" All-in-One Home Service App by Bellway Infotech
Simplify Everyday Needs with a Single App

Bellway Infotech brings you a powerful, all-in-one solution that connects users with a wide range of on-demand home services—from plumbing and electrical work to cleaning, carpentry, appliance repair, and much more."
        demoLink="https://play.google.com/store/apps/details?id=com.foodo.customer"
      />
      <ProductBenefits benefits={multiservicebenfits} />
      <ScreenshotShowcase screenshots={images} />;
      <WhyChooseBellway heading="Why choose Multi Service" />
      <WhatWeDeliver />
      <DeliverablesStackedScroll />
      <Testimonials />
    </>
  );
}

export default MultiService;
