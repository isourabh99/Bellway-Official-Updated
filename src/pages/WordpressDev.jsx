import React from 'react'
import Header from '../components/Header'
import Faq from '../components/Faq';
import wordpressfaq from "../data/wordpressfaq";
import WordPressFeatures from '../components/WordPressFeatures';
import WordpressFeatures2 from '../components/WordpressFeatures2';
import { Helmet } from 'react-helmet';

function WordpressDev() {
  return (
    <>
      <Helmet>
        <title>BELLWAY INFOTECH - WordPress Development | Service</title>
        <meta
          name="description"
          content="Discover Bellway Infotech’s comprehensive WordPress development services. From custom theme creation to plugin integration, our team delivers tailored WordPress solutions to meet your business needs."
        />
        <meta
          name="keywords"
          content="WordPress development, WordPress services, custom WordPress themes, WordPress plugin integration, WordPress website development, responsive WordPress design, WordPress development agency, website design services, eCommerce WordPress development, WordPress SEO, WordPress support, custom WordPress solutions, WordPress optimization, WordPress development company, theme customization, website redesign, WordPress business solutions"
        />
      </Helmet>

      <Header
        mediaSrc="https://cdn.pixabay.com/video/2024/10/09/235585_tiny.mp4"
        mediaType="video"
        title="Wordpress Development"
        para1="From concept to launch, Bellway Infotech offers complete WordPress development services tailored to your needs.

Whether you’re looking to build a brand-new website or enhance your current one, Bellway Infotech's developers have the experience and expertise to bring your vision to life. As a leading WordPress development company in India, we provide high-quality services and ensure smooth coordination across all phases of development and deployment.From concept to launch, Bellway Infotech offers complete WordPress development services tailored to your needs.

"
      />
      <WordPressFeatures />
      <WordpressFeatures2 />

      <Faq
        data={wordpressfaq}
        title="Frequently Asked Questions"
        accentColor="#D82C2C"
      />
    </>
  );
}

export default WordpressDev