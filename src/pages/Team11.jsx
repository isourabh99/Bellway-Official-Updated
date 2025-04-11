import React from "react";
import Header from "../components/Header";
import team11header from "../assets/Team11/team11header.png";
import ProductBenefits from "../components/ProductBenefits";
import ScreenshotShowcase from "../components/ScreenshotShowcase";
import Team1 from "../assets/Team11/Team1.png";
import Team2 from "../assets/Team11/Team2.png";
import Team3 from "../assets/Team11/Team3.png";
import Team4 from "../assets/Team11/Team4.png";
import Team5 from "../assets/Team11/Team5.png";
import Team6 from "../assets/Team11/Team6.png";
import WhyChooseBellway from "../components/WhyChooseBellway";
import WhatWeDeliver from "../components/WhatWeDeliver";
import Testimonials from "../components/Testimonials";
import DeliverablesStackedScroll from "../components/DeliverablesStackedScroll";
import { Helmet } from "react-helmet";
const team11benefits = [
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
const images = [Team1, Team2, Team3, Team4, Team5, Team6];

function Team11() {
  return (
    <>
      <Helmet>
        <title>BELLWAY INFOTECH - Online Team 11 Innovating | App</title>
        <meta
          name="description"
          content="Bellway Infotech's Online Team 11 is dedicated to innovating with cutting-edge apps, paving the way for tomorrow's digital solutions. Discover our app development expertise, focused on providing future-proof, scalable, and user-friendly mobile solutions."
        />
        <meta
          name="keywords"
          content="online team, app development, innovative apps, cutting-edge technology, mobile app development, digital solutions, custom app development, scalable apps, mobile solutions, future-proof apps, tech innovation, mobile technology, digital transformation, user-friendly apps, app development expertise, mobile development company, custom app solutions, next-gen app development, mobile technology solutions"
        />
      </Helmet>
      <Header
        mediaSrc={team11header}
        title="TEAM 11"
        para1="Introducing Bellway Infotech's Online Team 11 – Shaping the Future of Gaming Apps
Online Team 11 is an innovative gaming app developed by Bellway Infotech, designed to deliver unmatched excitement and engagement to the gaming community. Our expert team of developers and designers has created a platform that merges cutting-edge technology with captivating gameplay. Whether you're an experienced gamer or a casual player, our app provides a distinctive and immersive gaming experience for everyone."
        demoLink={
          "https://play.google.com/store/apps/details?id=com.bellwayinfotech.urfine&hl=en_US"
        }
      />
      <ProductBenefits benefits={team11benefits} />
      <ScreenshotShowcase screenshots={images} />;
      <WhyChooseBellway heading="Why choose Team 11" />
      <WhatWeDeliver />
      <DeliverablesStackedScroll />
      <Testimonials />
    </>
  );
}

export default Team11;
