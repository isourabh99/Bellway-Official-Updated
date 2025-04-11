import React from "react";
import Header from "../components/Header";
import freshNredHeader from "../assets/FreshNred/freshNredHeader.jpg";
import ProductBenefits from "../components/ProductBenefits";
import ScreenshotShowcase from "../components/ScreenshotShowcase";
import fresh1 from "../assets/FreshNred/fresh1.png";
import fresh2 from "../assets/FreshNred/fresh2.png";
import fresh3 from "../assets/FreshNred/fresh3.png";
import fresh4 from "../assets/FreshNred/fresh4.png";
import fresh5 from "../assets/FreshNred/fresh5.png";
import fresh6 from "../assets/FreshNred/fresh6.png";
import WhyChooseBellway from "../components/WhyChooseBellway";
import WhatWeDeliver from "../components/WhatWeDeliver";
import Testimonials from "../components/Testimonials";
import DeliverablesStackedScroll from "../components/DeliverablesStackedScroll";
import { Helmet } from "react-helmet";
const freshnredbenefits = [
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
const images = [fresh1, fresh2, fresh3, fresh4, fresh5, fresh6];

function FreshNred() {
  return (
    <>
      <Helmet>
        <title>
          Give The Best Service With BELLWAY INFOTECH Fresh Delivery Apps
        </title>
        <meta
          name="description"
          content="Give the best service with Bellway Infotech's fresh delivery apps. Enjoy seamless service, easy navigation, and quick deliveries for a hassle-free experience."
        />
        <meta
          name="keywords"
          content="fresh delivery apps, delivery service app, mobile delivery app, food delivery app, on-demand delivery, quick delivery service, delivery app development, fresh goods delivery, Bellway Infotech delivery apps, seamless delivery experience, mobile app for deliveries, on-demand service apps, user-friendly delivery apps, efficient delivery solutions, real-time delivery tracking, delivery system app, logistics app development, fresh products delivery, local delivery solutions, e-commerce delivery apps, app for delivery businesses, on-demand logistics, delivery technology solutions"
        />
      </Helmet>
      <Header
        mediaSrc={freshNredHeader}
        title="FRESH N RED "
        para1="Foodo is a modern Zomato clone built to deliver seamless food ordering and delivery experiences for users, vendors, and delivery personnel. With a powerful admin panel, intuitive user apps, and real-time tracking, Foodo covers the entire food delivery ecosystem."
        demoLink="https://play.google.com/store/apps/details?id=com.foodo.customer"
      />
      <ProductBenefits benefits={freshnredbenefits} />
      <ScreenshotShowcase screenshots={images} />;
      <WhyChooseBellway heading="Why choose Fresh n Red" />
      <WhatWeDeliver />
      <DeliverablesStackedScroll />
      <Testimonials />
    </>
  );
}

export default FreshNred;
