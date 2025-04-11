import React from "react";
import Header from "../components/Header";
import deliciousmealsheader from "../assets/DeliciousMeals/deliciousmealsheader.png";
import ProductBenefits from "../components/ProductBenefits";
import ScreenshotShowcase from "../components/ScreenshotShowcase";
import Delicious1 from "../assets/DeliciousMeals/Delicious1.png";
import Delicious2 from "../assets/DeliciousMeals/Delicious2.png";
import Delicious3 from "../assets/DeliciousMeals/Delicious3.png";
import Delicious4 from "../assets/DeliciousMeals/Delicious4.png";
import Delicious5 from "../assets/DeliciousMeals/Delicious5.png";
import Delicious6 from "../assets/DeliciousMeals/Delicious6.png";

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
const images = [
  Delicious1,
  Delicious2,
  Delicious3,
  Delicious4,
  Delicious5,
  Delicious6,
];

function DeliciousMeals() {
  return (
    <>
      <Helmet>
        <title>
          BELLWAY INFOTECH | Most Delicious Meal Delivery Excellence
        </title>
        <meta
          name="description"
          content="Experience the Most Delicious Meal Delivery Excellence with Bellway Infotech. Indulge in culinary perfection and enjoy a seamless food delivery experience. Shop Now!"
        />
        <meta
          name="keywords"
          content="meal delivery service, food delivery, delicious meals, culinary excellence, meal delivery app, food delivery solutions, Bellway Infotech meal delivery, gourmet food delivery, meal delivery app, fresh meal delivery, on-demand food delivery, food delivery technology"
        />
      </Helmet>
      <Header
        mediaSrc={deliciousmealsheader}
        title="DELICIOUS MEAL"
        para1="Discover a World of Delicious Meals with Our Easy-to-Use Restaurant Search
At Bellway Infotech, we’re bringing the joy of dining right to your fingertips. Our platform allows you to effortlessly search for restaurants based on location, order processing options (such as Delivery, Pickup, and Table Booking), and your preferred category or distance. Whether you’re craving local favorites or exploring new cuisines, our intuitive system makes it simple to find the perfect spot. Browse detailed restaurant menus, place orders directly, and enjoy a seamless dining experience, all from the comfort of your home or on the go."
        demoLink={
          "https://play.google.com/store/apps/details?id=com.bellwayinfotech.deliciousmeal_delivery&hl=en_US"
        }
      />
      <ProductBenefits benefits={deliciousmealsbenefits} />
      <ScreenshotShowcase screenshots={images} />;
      <WhyChooseBellway heading="Why choose Delicious Meals" />
      <WhatWeDeliver />
      <DeliverablesStackedScroll />
      <Testimonials />
    </>
  );
}

export default DeliciousMeals;
