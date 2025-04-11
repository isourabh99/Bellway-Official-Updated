import React from "react";
import Header from "../components/Header";
import ServicesTab from "../components/ServicesTab";
import { TiSocialYoutube } from "react-icons/ti";
import Serve from "../components/Serve";
import HomeSlider from "../components/HomeSlider";
import Faq from "../components/Faq";
import FaqDigitalMarketing from "../data/faqdigitalmarketing";
import { Helmet } from "react-helmet";

function Digitalmarketing() {
    const DigitalMarketingData = [
      {
        name: "SEO",
        text: "Search Engine Optimization (SEO) involves strategically enhancing a website or online content to boost its visibility and ranking in search engine results pages (SERPs). Key features of SEO include keyword research to identify relevant search terms, on-page optimization such as improving meta tags and content quality, and off-page optimization involving backlinks from authoritative sites. Technical SEO focuses on improving site speed, mobile-friendliness, and overall user experience. Unique aspects of SEO also encompass local SEO to target geographic-specific searches and utilizing analytics to continuously refine strategies. Effective SEO helps attract organic traffic, increasing a website's reach and potential for conversions.",
      },
      {
        name: "Facebook Advertising ",
        text: "Facebook Advertising is a powerful digital marketing platform developed by Facebook that allows businesses to reach their target audience through highly targeted and engaging advertisements. This platform leverages Facebook’s extensive user data, enabling businesses to create ads that are tailored to specific demographics, interests, behaviors, and even locations. This precise targeting ensures that ads are shown to users who are most likely to be interested in the product or service being advertised, increasing the chances of conversion and maximizing the return on investment (ROI) for businesses.",
      },
      {
        name: "Google Ad's",
        text: "Google Ads, previously known as Google AdWords, is an online advertising platform created by Google. It enables businesses to display ads on Google's search engine results pages (SERPs), websites, YouTube, and other platforms within the Google Network. Key features include pay-per-click (PPC) advertising, where businesses only pay when users click on their ads, and extensive targeting options such as keywords, demographics, location, and device type. Google Ads also offers various ad formats, including text, display, video, and shopping ads. With comprehensive analytics and reporting tools, businesses can track and optimize their ad performance, making Google Ads a versatile and powerful tool for digital marketing.",
      },
      {
        name: "Email Marketing",
        text: "Email marketing is a highly effective digital marketing strategy that involves sending targeted emails to prospects and customers. Its main goals are to promote products or services, build relationships, and enhance customer loyalty. Key components include personalized content, segmented email lists, compelling subject lines, and clear calls-to-action. Strategies for success involve regular newsletters, promotional offers, and automated email campaigns such as welcome series, cart abandonment reminders, and post-purchase follow-ups. By leveraging analytics and A/B testing, businesses can continuously optimize their email marketing efforts, ensuring higher engagement rates and a stronger connection with their audience.",
      },
      {
        name: "SMO",
        text: "Social Media Optimization (SMO) is the process of enhancing a website and its content to encourage sharing and engagement across social media platforms. As a crucial aspect of digital marketing, SMO aims to generate publicity and drive traffic by creating engaging, shareable content. Key components include optimizing social media profiles, using relevant keywords, and integrating social sharing buttons. Effective strategies involve posting regularly, using visual content, interacting with followers, and leveraging analytics to measure performance. By fostering active social media presence and encouraging user participation, SMO helps increase brand awareness and reach a wider audience.",
      },
    ];
      const digitalMarketingSolutions = [
        {
          src: "https://lh3.googleusercontent.com/nupo3HWMIUeuul9r2IBSfpBo568bL-STG9nA71dUuW97DnhAXFgm2WWjczhTFqRHQZRf5VA-_PmxIZaIAXhOUrzfr5unPjFuW9za=w1200",
          alt: "Laravel",
          title: "Keyword planner",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/srcs?q=tbn:ANd9GcRZNDcc0OZ4X80cGb1fY-ajApTIll1f13jtow&s",
          alt: "Flutter",
          title: "Semrush",
        },
        {
          src: "https://static.vecteezy.com/system/resources/thumbnails/008/506/590/small_2x/3d-seo-search-engine-optimization-concept-3d-rendering-png.png",
          alt: "JavaScript",
          title: "seo optimer",
        },
        {
          src: "https://w7.pngwing.com/pngs/47/910/png-transparent-google-analytics-hd-logo-thumbnail.png",
          alt: "PHP",
          title: "Google Analytics (GA4)",
        },
        {
          src: "https://logowik.com/content/uploads/srcs/google-search-console4537.logowik.com.webp",
          alt: "Magneto",
          title: "Google Search Console",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/srcs?q=tbn:ANd9GcQDyCbxbpGPYSb74UDspcXFpT3GLtCW3uBDjQ&s",
          alt: "React",
          title: "Google Tag Manager",
        },
        {
          src: "https://e7.pngegg.com/pngimages/373/519/png-clipart-bing-ads-yahoo-search-bing-webmaster-tools-web-search-engine-nun-angle-bing-thumbnail.png",
          alt: "Python",
          title: "Microsoft Bing Webmaster ",
        },
        {
          src: "https://ps.w.org/schema/assets/icon-256x256.png?rev=1750173",
          alt: ".NET",
          title: "Schema Markup",
        },
        {
          src: "https://e7.pngegg.com/pngsrcs/322/408/png-clipart-orange-computer-icon-logo-blogger-computer-icons-google-website-blogger-logo-svg-icon-miscellaneous-text-thumbnail.png",
          alt: "Android App",
          title: "Blog Submission ",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/srcs?q=tbn:ANd9GcSGfRhffl9ZF7dvuEaGULvwiyUeexEVXGrQTQ&s",
          alt: "CRM",
          title: "Infographic Creation ",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/srcs?q=tbn:ANd9GcQPOAeej0zchqIX7-el2iL63jgPJq363TPVMA&s",
          alt: "Vue.js",
          title: "Infographics Submissions",
        },
        {
          src: "https://www.seocheckin.com/wp-content/uploads/2016/09/PDF-Submission-list.jpg",
          alt: "iOS",
          title: "PDF Submissions",
        },
      ];
  return (
    <>
      <Helmet>
        <title>
          BELLWAY INFOTECH - Digital Business Transformation | Service
        </title>
        <meta
          name="description"
          content="At Bellway Infotech, a digital transformation strategy is essential for modern businesses to innovate, streamline operations, and enhance customer experiences effectively."
        />
        <meta
          name="keywords"
          content="digital transformation, business transformation, digital strategy, business innovation, IT transformation, streamline operations, customer experience enhancement, business technology solutions, digital transformation services, enterprise digital solutions, Bellway Infotech digital services"
        />
      </Helmet>

      <Header
        title="Digital Marketing"
        mediaSrc="https://cdn.pixabay.com/video/2022/12/30/144763-785265042_large.mp4"
        mediaType="video"
        para1="At Bellway Infotech, our digital marketing services are crafted to boost your brand visibility, engage your target audience, and drive measurable results. We offer a strategic mix of search engine optimization (SEO), social media marketing, content creation, pay-per-click advertising (PPC), and email marketing. Our team analyzes your market and tailors campaigns to deliver impactful growth and ROI. Whether you’re looking to enhance brand awareness, increase leads, or engage with a specific audience segment, we bring expertise and creativity to elevate your brand’s online presence. Partner with us to transform your digital strategy and drive meaningful growth."
      />
      <ServicesTab
        tabsData={DigitalMarketingData}
        icon={TiSocialYoutube}
        heading="Digital Marketing "
      />
      <Serve
        heading="Solutions"
        description="Being a Mobile App development and web development company Bellway consistently acumen into latest Technologies for providing nothing less than best to our Clients and Prospects."
        industries={digitalMarketingSolutions}
      />
      <HomeSlider />
      <Faq
        data={FaqDigitalMarketing}
        title="Frequently Asked Questions"
        accentColor="#D82C2C"
      />
    </>
  );
}

export default Digitalmarketing;
