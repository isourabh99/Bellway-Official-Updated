import React from "react";
import Header from "../components/Header";
import dailybillsheader from "../assets/DailyBills/dailybillsheader.png";
import ProductBenefits from "../components/ProductBenefits";
import ScreenshotShowcase from "../components/ScreenshotShowcase";
import bill1 from "../assets/DailyBills/bill1.png";
import bill2 from "../assets/DailyBills/bill2.png";
import bill3 from "../assets/DailyBills/bill3.png";
import bill4 from "../assets/DailyBills/bill4.png";
import bill5 from "../assets/DailyBills/bill5.png";
import bill6 from "../assets/DailyBills/bill6.png";

import WhyChooseBellway from "../components/WhyChooseBellway";
import WhatWeDeliver from "../components/WhatWeDeliver";
import Testimonials from "../components/Testimonials";
import DeliverablesStackedScroll from "../components/DeliverablesStackedScroll";
import { Helmet } from "react-helmet";
const dailybillsbenefit = [
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
const images = [bill1, bill2, bill3, bill4, bill5, bill6];

function Dailybills() {
  return (
    <>
      <Helmet>
        <title>BELLWAY INFOTECH | Billing Simplified Daily</title>
        <meta
          name="description"
          content="Bellway Infotech offers simplified daily billing solutions, ensuring efficiency and ease for your business operations. Streamline your processes with us today."
        />
        <meta
          name="keywords"
          content="daily billing solutions, billing automation, business billing system, simplified billing, billing software, payment solutions, invoice management, financial management, streamlining billing process, Bellway Infotech billing services, digital billing solutions, invoicing systems"
        />
      </Helmet>
      <Header
        mediaSrc={dailybillsheader}
        title="DAILY BILLS"
        para1="Effortless Daily Billing with Bellway Infotech
At Bellway Infotech, we recognize the challenges businesses face in managing day-to-day billing tasks. That’s why we’ve developed a smart and reliable billing app designed to simplify and streamline your operations—just like Khatabook or Vyapar, but tailored to your unique needs. Why choose our solution? Our advanced billing system automates routine tasks, reduces manual errors, and ensures smooth, efficient transactions. With a clean, user-friendly interface, your team can get started effortlessly. Plus, our real-time analytics and detailed reporting tools give you powerful insights into your billing activities, helping you stay informed and make confident, data-driven decisions every day."
        demoLink={
          "https://play.google.com/store/apps/details?id=com.daily.bills&hl=en_US"
        }
      />
      <ProductBenefits benefits={dailybillsbenefit} />
      <ScreenshotShowcase screenshots={images} />;
      <WhyChooseBellway heading="Why choose Daily Bills" />
      <WhatWeDeliver />
      <DeliverablesStackedScroll />
      <Testimonials />
    </>
  );
}

export default Dailybills;
