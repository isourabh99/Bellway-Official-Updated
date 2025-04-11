import React from "react";
import Header from "../components/Header";
import homecheader from "../assets/HOmeC/homecheader.png";
import ProductBenefits from "../components/ProductBenefits";
import ScreenshotShowcase from "../components/ScreenshotShowcase";
import home1 from "../assets/HomeC/home1.png";
import home2 from "../assets/HomeC/home2.png";
import home3 from "../assets/HomeC/home3.png";
import home4 from "../assets/HomeC/home4.png";
import home5 from "../assets/HomeC/home5.png";
import home6 from "../assets/HomeC/home6.png";

import WhyChooseBellway from "../components/WhyChooseBellway";
import WhatWeDeliver from "../components/WhatWeDeliver";
import Testimonials from "../components/Testimonials";
import DeliverablesStackedScroll from "../components/DeliverablesStackedScroll";
import { Helmet } from "react-helmet";
const deliciousmealsbenefits = [
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
const images = [home1, home2, home3, home4, home5, home6];
function HomeC() {
  return (
    <>
      <Helmet>
        <title>BELLWAY INFOTECH | Best Website For House Rentals</title>
        <meta
          name="description"
          content="Bellway Infotech offers the best website for house rentals, providing a seamless experience to find your ideal home. Explore our listings and find your perfect rental property today."
        />
        <meta
          name="keywords"
          content="house rentals, rental properties, find a house for rent, rental homes, property rentals, real estate rental websites, rental listings, rental houses, apartments for rent, affordable rentals, rental home search, best house rental websites, property search, online rental listings, house rental services, home rental platform, house for rent, rental property search, rental properties in [your city], house rental solutions, home rental websites"
        />
      </Helmet>
      <Header
        mediaSrc={homecheader}
        title="HOME C"
        para1="Discover a World of Delicious Meals with Our Easy-to-Use Restaurant Search
At Bellway Infotech, we’re bringing the joy of dining right to your fingertips. Our platform allows you to effortlessly search for restaurants based on location, order processing options (such as Delivery, Pickup, and Table Booking), and your preferred category or distance. Whether you’re craving local favorites or exploring new cuisines, our intuitive system makes it simple to find the perfect spot. Browse detailed restaurant menus, place orders directly, and enjoy a seamless dining experience, all from the comfort of your home or on the go."
        demoLink={
          "https://play.google.com/store/apps/details?id=com.bellwayinfotech.deliciousmeal_delivery&hl=en_US"
        }
      />
      <ProductBenefits benefits={deliciousmealsbenefits} />
      <ScreenshotShowcase screenshots={images} />;
      <WhyChooseBellway heading="Why choose Home C" />
      <WhatWeDeliver />
      <DeliverablesStackedScroll />
      <Testimonials />
    </>
  );
}

export default HomeC;
