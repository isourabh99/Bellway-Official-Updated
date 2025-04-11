import React from "react";
import Header from "../components/Header";
import makeYourTripHeader from "../assets/MakeYourTrip/makeYourTripHeader.png";
import ProductBenefits from "../components/ProductBenefits";
import ScreenshotShowcase from "../components/ScreenshotShowcase";
import Trip1 from "../assets/MakeYourTrip/Trip1.png";
import Trip2 from "../assets/MakeYourTrip/Trip2.png";
import Trip3 from "../assets/MakeYourTrip/Trip3.png";
import Trip4 from "../assets/MakeYourTrip/Trip4.png";
import Trip5 from "../assets/MakeYourTrip/Trip5.png";
import Trip6 from "../assets/MakeYourTrip/Trip6.png";
import WhyChooseBellway from "../components/WhyChooseBellway";
import WhatWeDeliver from "../components/WhatWeDeliver";
import Testimonials from "../components/Testimonials";
import DeliverablesStackedScroll from "../components/DeliverablesStackedScroll";
import { Helmet } from "react-helmet";
const makeyourtipbenefits = [
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
const images = [Trip1, Trip2, Trip3, Trip4, Trip5, Trip6];

function MakeYourTrip() {
  return (
    <>
      <Helmet>
        <title>
          Effortless Booking With BELLWAY INFOTECH Online Make Your Trip
        </title>
        <meta
          name="description"
          content="Effortless booking with Bellway Infotech's online Make Your Trip service. Enjoy a seamless, user-friendly platform for all your travel planning, reservations, and itinerary management."
        />
        <meta
          name="keywords"
          content="online trip booking, travel booking platform, seamless travel reservations, online travel services, make your trip online, trip planning app, easy travel bookings, travel booking website, online travel booking system, flight and hotel booking, vacation booking app, travel management platform, holiday booking services, book travel online, user-friendly booking system, affordable travel packages, travel planning and reservations, booking a trip, travel booking service, flight booking system, hotel reservation service, best online travel booking platform"
        />
      </Helmet>
      <Header
        mediaSrc={makeYourTripHeader}
        title="MAKE YOUR TRIP"
        para1="Effortless Travel Planning with Bellway Infotech
Say goodbye to travel hassles! Bellway Infotech makes booking your next trip simple, smooth, and stress-free. With a user-friendly platform tailored to meet all your travel needs, planning your journey becomes a pleasure."
        demoLink="https://play.google.com/store/apps/details?id=com.foodo.customer"
      />
      <ProductBenefits benefits={makeyourtipbenefits} />
      <ScreenshotShowcase screenshots={images} />;
      <WhyChooseBellway heading="Why choose Make Your Trip" />
      <WhatWeDeliver />
      <DeliverablesStackedScroll />
      <Testimonials />
    </>
  );
}

export default MakeYourTrip;
