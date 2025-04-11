import React from "react";
import Header from "../components/Header";
import bellstoreheader from "../assets/BellStore/bellstoreheader.png";
import ProductBenefits from "../components/ProductBenefits";
import ScreenshotShowcase from "../components/ScreenshotShowcase";
import bell1 from "../assets/BellStore/bell1.png";
import bell2 from "../assets/BellStore/bell2.png";
import bell3 from "../assets/BellStore/bell3.png";
import bell4 from "../assets/BellStore/bell4.png";
import bell5 from "../assets/BellStore/bell5.png";
import bell6 from "../assets/BellStore/bell6.png";
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
const images = [bell1, bell2, bell3, bell4, bell5, bell6];

function BellStore() {
  return (
    <>
      <Helmet>
        <title>
          BELLWAY INFOTECH Offers Top-Tier Online Bell Store Services.
        </title>
        <meta
          name="description"
          content="Bellway Infotech Offers Top-Tier Online Bell Store Services. Experience a seamless, user-friendly platform for all your needs. Shop smart, shop easy."
        />
        <meta
          name="keywords"
          content="online bell store, e-commerce bell platform, custom eCommerce solutions, digital product store, shop management system, Bellway Infotech store, online shopping platform, scalable eCommerce development, React eCommerce website, user-friendly online store, digital shop solutions, top online bell store services"
        />
      </Helmet>
      <Header
        mediaSrc={bellstoreheader}
        title="BELL STORE"
        para1=" Bell Store by Bellway Infotech – Redefining Your Grocery Shopping Experience
Say goodbye to long queues and crowded aisles. Welcome to a smarter way to shop!
Bellway Infotech’s Online Bell Store is crafted for your convenience, offering a smooth, stress-free, and intuitive shopping journey right from your fingertips."
        demoLink={
          "https://play.google.com/store/apps/details?id=com.bellwayinfotech.bellstore_user&hl=en_US"
        }
      />
      <ProductBenefits benefits={bellstorebenefits} />
      <ScreenshotShowcase screenshots={images} />;
      <WhyChooseBellway heading="Why choose Bell Store" />
      <WhatWeDeliver />
      <DeliverablesStackedScroll />
      <Testimonials />
    </>
  );
}

export default BellStore;
