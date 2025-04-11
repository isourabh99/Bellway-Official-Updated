import React from "react";
import Header from "../components/Header";
import AboutUs from "../assets/foundation1.png";
import new2 from "../assets/new2.jpeg";
import new21 from "../assets/new1.jpeg";
import img18 from "../assets/img18.png";
import img16 from "../assets/img16.png";
// import ImageTextBlock from "../components/ImageTextBlock";
import DynamicAboutGrid from "../components/DynamicAboutGrid";
import FoundersSection from "../components/FoundersSection";
import founder1 from "../assets/mst.png";
import founder2 from "../assets/img14.png";
import { Helmet } from "react-helmet";


function About() {
  const founders = [
    {
      image: founder1,
      name: "Mohit Shrivastava",
      role: "CEO ",
    },
    {
      image: founder2,
      name: "Aakriti Shrivastava,",
      role: "CMO ",
    },
  ];
const descriptions = [
  "Founded in 2017, Bellway Infotech has rapidly emerged as a global leader in the IT services industry. Headquartered in Indore, with offices across Dewas and Bhopal.",
  "We specialize in cloud computing, web/app development, UI/UX design, digital marketing, and enterprise software for startups to Fortune companies.",
  "Our skilled team pushes boundaries to create bespoke digital products. At Bellway, collaboration and innovation drive everything we do.",
];


  const aboutContent = [
    {
      image: new2,
      heading:
        "Discover Bellway Infotech — Pioneering Innovation in Digital Excellence",
      description: `Discover Bellway Infotech — Pioneering Innovation in Digital Excellence"
        description="Step into the future with Bellway Infotech, a globally recognized leader in web and mobile app development. With over 15 years of experience delivering cutting-edge IT solutions, we empower businesses across industries to thrive in the digital age.
        At Bellway, we don't just build software — we craft scalable, high-performance solutions tailored to your exact business objectives. Our team of skilled developers, designers, and strategists work collaboratively to bring your vision to life, transforming ideas into seamless, intuitive digital products.
        From startups to enterprise-level organizations, we specialize in custom web and mobile application development, scalable cloud-based architectures, UI/UX design that resonates with users, and agile project management that ensures transparent communication throughout every phase.
        Join hundreds of global clients who rely on us to build future-ready solutions that drive measurable success, enhance customer experience, and future-proof their business.`,
    },
    {
      image: new21,
      heading: "Who We Are?",
      description: `Bellway Infotech is a top-rated website and mobile app development firm specializing in Android and iOS platforms, with over 200+ successful projects completed.
Our Approach : We follow a meticulous process throughout the entire mobile app development lifecycle, including design, development, testing, and deployment. We ensure high standards of quality at every stage, delivering apps that are functional, scalable, and user-friendly.

Our Mission : Our primary goal is to create digital products that foster interaction, drive business growth, and deliver measurable success. By working closely with our clients, we ensure that each app we develop meets the specific needs of the business.`,
    },
    {
      image: img18,
      heading: "Who We Can Help",
      description: `We have project advisors, project managers, project leaders, and analysts/programmers on our team.

All of our employees have professional qualifications in information technology or a related discipline, and the majority of them have extensive work experience on IT projects of all sizes, using various software tools on various hardware.

We have a team of highly trained professionals who handle customers with extreme sensitivity and responsiveness. We provide the best tools to support their job functions, resulting in efficient customer service to the greatest extent possible.`,
    },
    {
      image: img16,
      heading: "Our Team and Work Environment",
      description: `At Bellway Infotech, our team is composed of dedicated professionals who bring their best to every project. Each team member is an expert in their field, committed to delivering top-notch solutions that meet our clients' needs and exceed expectations.

To support our team’s productivity and comfort, each employee is provided with a personal laptop equipped with the latest technology to handle advanced applications seamlessly. Every employee also has their own private workspace, ensuring they can work without distractions and focus entirely on delivering excellence.`,
    },
  ];

  return (
    <>
      <Helmet>
        <title>BELLWAY INFOTECH - About </title>
        <meta
          name="description"
          content="Bellway Infotech is a leading app development company and web application development agency. Our experienced team delivers innovative solutions for mobile apps, business software, and enterprise applications tailored to your needs."
        />
        <meta
          name="keywords"
          content="app development company, web app development agency, software development business, mobile app development company near me, application company, mobile app agency, business software development, web application development agency, android app development near me, app development solutions, mobile app development company services, application team"
        />
      </Helmet>
      <Header
        title="About Us"
        para1="At Bellway Infotech, we are a dynamic team of innovators, problem-solvers, and tech enthusiasts committed to delivering exceptional software solutions. Founded with a vision to empower businesses through technology, we specialize in custom app development, web development, and digital transformation services. Our goal is simple: to help businesses thrive by creating user-friendly, scalable, and high-performance applications."
        mediaSrc={AboutUs}
      />

      <DynamicAboutGrid content={aboutContent} />
      <FoundersSection
        heading="Meet Our Founders"
        founders={founders}
        descriptions={descriptions}
      />
    </>
  );
}

export default About;
