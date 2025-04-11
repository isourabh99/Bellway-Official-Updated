import React from 'react'
import Header from '../components/Header'
import mobileappdev from "../assets/mad.png";
import MobileAppServices from '../components/MobileAppServices';
import MobileAppServices2 from '../components/MobileAppServices2';
import ServicesTab from '../components/ServicesTab';
import { CiMobile3 } from "react-icons/ci";
import HomeSlider from '../components/HomeSlider';
import Faq from '../components/Faq';
import FaqMobileServices from "../data/faqmobileservices";
import { Helmet } from 'react-helmet';

function MobileAppDev() {
    const mobileAppTypes = [
      {
        name: "Flutter App",
        text: `Flutter is Google's open-source UI toolkit for crafting natively compiled applications for mobile, web, and desktop from a single codebase. It provides expressive and flexible UI components using widgets, enabling developers to build visually rich applications with fast rendering and smooth animations. Flutter apps offer near-native performance and allow rapid prototyping, making them ideal for MVPs, startups, and scalable enterprise apps. The hot reload feature boosts development speed, while the growing community and plugin ecosystem provide robust support for integrating APIs, Firebase, and platform-specific features.`,
      },
      {
        name: "React Native App",
        text: `React Native, developed by Meta (Facebook), enables developers to build mobile apps using JavaScript and the popular React framework. It allows writing a single codebase that works across both iOS and Android while offering near-native performance through native components. With an extensive library ecosystem, seamless integration with third-party plugins, and features like hot reloading, React Native is ideal for building high-performance apps rapidly. Businesses favor React Native for its efficiency, reduced development cost, and strong community support. It's well-suited for apps requiring fast updates, such as e-commerce, social media, and content-based platforms.`,
      },
      {
        name: "iOS App",
        text: `iOS app development focuses on creating applications exclusively for Apple’s iOS platform using Swift or Objective-C and the Xcode IDE. iOS apps benefit from Apple’s tightly integrated ecosystem, superior performance, and security standards. Developers leverage Apple’s native frameworks like UIKit, ARKit, Core ML, and SwiftUI to build powerful, sleek, and feature-rich applications. The iOS platform is known for its premium user base, high engagement rate, and better monetization options, making it ideal for enterprise apps, fintech, health tech, and lifestyle applications targeting iPhone, iPad, and Apple Watch users.`,
      },
      {
        name: "Android App",
        text: `Android development uses Java or Kotlin within the Android Studio environment to build applications for a wide range of Android devices. With over 70% global market share, Android offers unmatched reach and flexibility. Developers can harness tools like Jetpack, Room, Firebase, and Google Maps API to create scalable, feature-rich applications tailored for diverse screen sizes and hardware. Android apps are ideal for startups to large enterprises, particularly in industries like logistics, travel, education, and on-demand services. Its open-source nature enables extensive customization and integration with IoT, wearables, and custom hardware.`,
      },
      {
        name: "Cross Platform App",
        text: `Cross-platform app development allows a single codebase to run on multiple platforms, significantly reducing time and cost. Using frameworks like Flutter and React Native, developers build apps that deliver native-like performance while accelerating the release cycle. Cross-platform apps are excellent for startups, businesses with limited budgets, or companies looking to validate ideas quickly. These apps support smooth UI/UX across devices and are perfect for applications with shared functionality across platforms, such as booking apps, customer portals, content delivery platforms, and SaaS products.`,
      },
    ];

  return (
    <>
      <Helmet>
        <title>
          BELLWAY INFOTECH - Mobile Application Development | Service
        </title>
        <meta
          name="description"
          content="Discover Bellway Infotech's comprehensive mobile application development services. We specialize in creating high-performance, scalable, and user-friendly mobile apps for businesses across iOS and Android platforms."
        />
        <meta
          name="keywords"
          content="mobile application development, mobile app development services, iOS app development, Android app development, cross-platform mobile apps, mobile app design, custom mobile applications, app development for business, mobile app solutions, app development company, enterprise mobile apps, scalable mobile apps, mobile app developers, mobile app design and development, top mobile app development company, mobile application services, user-friendly mobile apps, high-performance mobile apps, app development for startups, business mobile apps, custom app development"
        />
      </Helmet>

      <Header
        title="Mobile Application Development"
        para1="At Bellway Infotech, we craft powerful and user-centric mobile applications that drive real results. Whether you're a startup looking to make a bold entrance or an established brand aiming to expand your digital reach, our team of seasoned developers is here to turn your ideas into beautifully designed, fully functional mobile solutions.

We specialize in building high-performance, scalable apps for both iOS and Android platforms—whether it's native, cross-platform, or hybrid. From strategy and design to development and post-launch support, we ensure every step aligns with your business objectives."
        mediaSrc={mobileappdev}
      />

      <MobileAppServices />
      <ServicesTab
        tabsData={mobileAppTypes}
        icon={CiMobile3}
        heading="Mobile App Development Services"
      />
      <MobileAppServices2 />
      <HomeSlider />
      <Faq
        data={FaqMobileServices}
        title="Frequently Asked Questions"
        accentColor="#D82C2C"
      />
    </>
  );
}

export default MobileAppDev