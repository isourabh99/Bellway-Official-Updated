import React from "react";
import Header from "../components/Header";
import movikatheader from "../assets/Movikat/movikatheader.png";
import ProductBenefits from "../components/ProductBenefits";
import ScreenshotShowcase from "../components/ScreenshotShowcase";
import Movie1 from "../assets/Movikat/Movie1.png";
import Movie2 from "../assets/Movikat/Movie2.png";
import Movie3 from "../assets/Movikat/Movie3.png";
import Movie4 from "../assets/Movikat/Movie4.png";
import Movie5 from "../assets/Movikat/Movie5.png";
import Movie6 from "../assets/Movikat/Movie6.png";
import WhyChooseBellway from "../components/WhyChooseBellway";
import WhatWeDeliver from "../components/WhatWeDeliver";
import Testimonials from "../components/Testimonials";
import DeliverablesStackedScroll from "../components/DeliverablesStackedScroll";
import { Helmet } from "react-helmet";
const movikatbenefits = [
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
const images = [Movie1, Movie2, Movie3, Movie4, Movie5, Movie6];

function Movikat() {
  return (
    <>
      <Helmet>
        <title>
          BELLWAY INFOTECH | Discover The Ultimate Movikat Innovating
        </title>
        <meta
          name="description"
          content="Bellway Infotech invites you to discover the ultimate movie-watching experience with Movikat, leading the way in cutting-edge technology solutions. Try it now and experience high-quality streaming with seamless navigation."
        />
        <meta
          name="keywords"
          content="movie-watching experience, Movikat, movie streaming service, cutting-edge technology, movie streaming platform, online movie watching, best movie streaming app, movie technology solutions, seamless movie navigation, high-quality streaming, online movie platform, innovative movie experience, watch movies online, video streaming technology, entertainment platform, movie app, movie discovery, movie streaming innovations, Movikat app, streaming services, entertainment technology solutions, movie-watching innovations"
        />
      </Helmet>
      <Header
        mediaSrc={movikatheader}
        title="MOVIKAT"
        para1="Welcome to Bellway Infotech – Introducing Movikat, Your Ultimate Destination for Movie Streaming
At Bellway Infotech, we’re redefining your movie-watching experience. With Movikat, our latest innovation, we offer you an unparalleled movie experience powered by the latest technology. Whether you're a casual viewer or a true film enthusiast, Movikat ensures a seamless, immersive journey for discovering, streaming, and enjoying movies like never before. Enjoy films in stunning HD and 4K resolution, with vibrant colors and crystal-clear graphics. Our advanced streaming technology guarantees smooth playback, even on slower connections. Explore an extensive collection of movies across various genres, including the latest blockbusters, timeless classics, and hidden gems."
        demoLink={
          "https://play.google.com/store/apps/details?id=com.cybenkotechnologies.movikat&hl=en_US"
        }
      />
      <ProductBenefits benefits={movikatbenefits} />
      <ScreenshotShowcase screenshots={images} />;
      <WhyChooseBellway heading="Why choose Movikat" />
      <WhatWeDeliver />
      <DeliverablesStackedScroll />
      <Testimonials />
    </>
  );
}

export default Movikat;
