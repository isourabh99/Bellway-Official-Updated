import React from "react";
import Header from "../components/Header";
import BellwayGroceryHeader from "../assets/BellwayGrocery/BellwayGroceryHeader.png";
import ProductBenefits from "../components/ProductBenefits";
import ScreenshotShowcase from "../components/ScreenshotShowcase";
import bellwaygrocery1 from "../assets/BellwayGrocery/bellwaygrocery1.png";
import bellwaygrocery2 from "../assets/BellwayGrocery/bellwaygrocery2.png";
import bellwaygrocery3 from "../assets/BellwayGrocery/bellwaygrocery3.png";
import bellwaygrocery4 from "../assets/BellwayGrocery/bellwaygrocery4.png";
import bellwaygrocery5 from "../assets/BellwayGrocery/bellwaygrocery5.png";
import bellwaygrocery6 from "../assets/BellwayGrocery/bellwaygrocery6.png";
import WhyChooseBellway from "../components/WhyChooseBellway";
import WhatWeDeliver from "../components/WhatWeDeliver";
import Testimonials from "../components/Testimonials";
import DeliverablesStackedScroll from "../components/DeliverablesStackedScroll";
import { Helmet } from "react-helmet";
const BellwayGroceryBenefits = [
  { heading: "Convenience" },
  { heading: "Saving Time" },
  { heading: "Secure Payments" },
  { heading: "Saving Money" },
  { heading: "Special Offers" },
  { heading: "Avoiding the Queue" },
  { heading: "Avoiding the Multiple Trips" },
  { heading: "No Unnecessary Items" },
  { heading: "Booking Popular Products" },
  { heading: "Easy Product & Price Comparisons" },
  { heading: "Finding Everything You Need" },
  { heading: "Buying in Bulk with Ease" },
];
const images = [
  bellwaygrocery1,
  bellwaygrocery2,
  bellwaygrocery3,
  bellwaygrocery4,
  bellwaygrocery5,
  bellwaygrocery6,
];

function BellwayGrocery() {
  return (
    <>
      <Helmet>
        <title>BELLWAY INFOTECH - Grocery Shopping Application | Service</title>
        <meta
          name="description"
          content="Discover Bellway Infotech top-rated grocery shopping app service! Simplify your shopping experience with advanced features and seamless user interface."
        />
        <meta
          name="keywords"
          content="grocery shopping app, grocery delivery app, online grocery store, mobile grocery shopping, grocery app development, eCommerce grocery app, grocery shopping mobile app, grocery app solutions, grocery app development company, grocery delivery service, digital grocery shopping platform, Bellway Infotech grocery app"
        />
      </Helmet>
      <Header
        mediaSrc={BellwayGroceryHeader}
        title="BELLWAY GROCERY"
        para1="Discover a Smarter Way to Satisfy Your Cravings — our application brings you a rich variety of cuisines, effortless ordering, and seamless delivery right to your door. With a sleek interface and real-time updates, getting your favorite food is now just a tap away!"
        demoLink="https://play.google.com/store/apps/details?id=com.b2bgrocery.user"
      />
      <ProductBenefits benefits={BellwayGroceryBenefits} />
      <ScreenshotShowcase screenshots={images} />;
      <WhyChooseBellway heading="Why choose Bellway Grocery" />
      <WhatWeDeliver />
      <DeliverablesStackedScroll />
      <Testimonials />
    </>
  );
}

export default BellwayGrocery;
