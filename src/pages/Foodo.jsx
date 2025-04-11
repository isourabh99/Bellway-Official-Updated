import React from "react";
import Header from "../components/Header";
import foodoheader from "../assets/Foodo/foodoheader.png";
import ProductBenefits from "../components/ProductBenefits";
import ScreenshotShowcase from "../components/ScreenshotShowcase";
import foodo1 from "../assets/Foodo/foodo1.png";
import foodo2 from "../assets/Foodo/foodo2.png";
import foodo3 from "../assets/Foodo/foodo3.png";
import foodo4 from "../assets/Foodo/foodo4.png";
import foodo5 from "../assets/Foodo/foodo5.png";
import foodo6 from "../assets/Foodo/foodo6.png";
import WhyChooseBellway from "../components/WhyChooseBellway";
import WhatWeDeliver from "../components/WhatWeDeliver";
import Testimonials from "../components/Testimonials";
import DeliverablesStackedScroll from "../components/DeliverablesStackedScroll";
import { Helmet } from "react-helmet";
const foodeBenefits = [
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
const images = [foodo1, foodo2, foodo3, foodo4, foodo5, foodo6];

function Foodo() {
  return (
    <>
      <Helmet>
        <title>BELLWAY INFOTECH - Application For Foodo | Service</title>
        <meta
          name="description"
          content="Experience the best with Bellway Infotech's Foodo application service. Simplify your food ordering process with a seamless, user-friendly app. Shop now!"
        />
        <meta
          name="keywords"
          content="food delivery app, foodo application, online food ordering app, food delivery service, meal delivery app, restaurant app, mobile food ordering, seamless food delivery, foodo app features, mobile app for food delivery, food delivery solutions, food delivery technology, online food app development, custom food delivery app, digital food ordering system, mobile application for restaurants, food delivery service app, app for restaurant owners, foodo app services, on-demand food delivery app, food delivery platform, food delivery system, user-friendly food app, Bellway Infotech food app"
        />
      </Helmet>
      <Header
        mediaSrc={foodoheader}
        title="FOODO "
        para1="Foodo is a modern Zomato clone built to deliver seamless food ordering and delivery experiences for users, vendors, and delivery personnel. With a powerful admin panel, intuitive user apps, and real-time tracking, Foodo covers the entire food delivery ecosystem."
        demoLink="https://play.google.com/store/apps/details?id=com.foodo.customer"
      />
      <ProductBenefits benefits={foodeBenefits} />
      <ScreenshotShowcase screenshots={images} />;
      <WhyChooseBellway heading="Why choose Foodo" />
      <WhatWeDeliver />
      <DeliverablesStackedScroll />
      <Testimonials />
    </>
  );
}

export default Foodo;
