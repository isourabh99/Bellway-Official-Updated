import React from "react";
import Header from "../components/Header";
import webdev from "../assets/webdev.png";
import WebAppServices from "../components/WebAppServices";
import WebAppServices2 from "../components/WebAppServices2";
import ServicesTab from "../components/ServicesTab";
import { FaGlobe } from "react-icons/fa";
import HomeSlider from "../components/HomeSlider";
import Faq from "../components/Faq";
import FaqWebDevSevices from "../data/faqwebdevservices";
import { Helmet } from "react-helmet";

function WebDevelopment() {
      const webDevTypes = [
        {
          name: "Laravel",
          text: "Laravel is a popular PHP framework designed for building modern web applications. It follows the MVC (Model-View-Controller) architectural pattern, promoting organized and maintainable code. Laravel offers a rich set of features, including an elegant ORM (Eloquent), a powerful templating engine (Blade), and a robust routing system. Its built-in tools for tasks like authentication, caching, and session management simplify common web development tasks. Laravel's extensive documentation and vibrant community make it a user-friendly and powerful framework for PHP developers.",
        },
        {
          name: "React",
          text: "React is a popular JavaScript library developed by Facebook for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components, making code more maintainable and scalable. React uses a virtual DOM to efficiently update and render components, enhancing performance. Its declarative approach makes it easy to understand and debug. The extensive ecosystem, including tools like Redux for state management and Next.js for server-side rendering, makes React a powerful choice for modern web development.",
        },
        {
          name: "Django",
          text: "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It follows the 'batteries-included' philosophy, providing a wide range of built-in features such as authentication, database ORM, and an admin panel. Django s robust security features, including protection against SQL injection, cross-site scripting, and cross-site request forgery, make it a preferred choice for building secure web applications. Its emphasis on reusability and the DRY (Don't Repeat Yourself) principle streamlines development, making Django ideal for both small and large-scale projects.",
        },
        {
          name: "Angular",
          text: "Angular is a comprehensive front-end framework developed by Google for building dynamic web applications. It uses TypeScript, a superset of JavaScript, which adds static typing and other features to enhance development. Angular offers a robust set of tools for building complex applications, including two-way data binding, dependency injection, and a modular architecture. Its powerful CLI simplifies project setup and development processes. Angular's strong community support and continuous updates make it a reliable framework for enterprise-level applications.",
        },
        {
          name: "Vue.js",
          text: "Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, meaning you can use as much or as little of the framework as you need. Vue.js is known for its simplicity and ease of integration with existing projects. It offers a reactive data binding system and a component-based architecture, making it easy to build complex applications. The official ecosystem, including tools like Vuex for state management and Vue Router for navigation, enhances its capabilities, making Vue.js a flexible and versatile choice for web development.",
        },
        {
          name: "Node.js",
          text: "Node.js is a powerful runtime environment that enables JavaScript to be used for backend development. Built on Chrome’s V8 JavaScript engine, it offers non-blocking, event-driven architecture, making it ideal for building scalable network applications. With Node.js, developers can use JavaScript across the entire development stack, promoting code reusability and efficiency. Its vast npm ecosystem provides a wide range of libraries and tools for everything from web frameworks like Express to real-time apps using Socket.io. Node.js is perfect for creating fast, data-intensive applications such as APIs, chat apps, and streaming services.",
        },
        {
          name: "WordPress",
          text: "WordPress is a widely-used open-source content management system (CMS) known for its flexibility and ease of use. It powers over 40% of websites on the internet, from simple blogs to complex eCommerce platforms. WordPress offers thousands of themes and plugins, allowing users to build and customize sites without extensive coding knowledge. Developers can also create custom themes and plugins to extend its functionality. With strong SEO capabilities, a vibrant community, and regular updates, WordPress remains a go-to solution for businesses and individuals looking to build robust, scalable, and user-friendly websites.",
        },
      ];
  return (
    <>
      <Helmet>
        <title>BELLWAY INFOTECH - Web Application Development | Service</title>
        <meta
          name="description"
          content="Discover Bellway Infotech’s comprehensive web application development services. From concept to deployment, our team delivers tailored, scalable, and secure web applications to enhance your business operations and user engagement."
        />
        <meta
          name="keywords"
          content="web application development, custom web apps, web development services, web app solutions, responsive web development, scalable web apps, secure web applications, business web solutions, web app development company, full-stack web development, front-end development, back-end development, web application design, digital solutions, business app development, web development agency, custom software development, enterprise web applications, app development services"
        />
      </Helmet>

      <Header
        mediaSrc={webdev}
        title="Web Application Development"
        para1="Our web development services encompass everything from sleek, responsive websites to robust web applications, meticulously crafted to perform flawlessly across all devices and screen sizes. Whether you're looking to launch a sophisticated corporate presence, an e-commerce platform, or a complex data-driven web app, our solutions are built to be fast, secure, and scalable."
      />
      <WebAppServices />
      <ServicesTab
        tabsData={webDevTypes}
        icon={FaGlobe}
        heading="Web Development Services"
      />
      <HomeSlider />
      <WebAppServices2 />
      <Faq
        data={FaqWebDevSevices}
        title="Frequently Asked Questions"
        accentColor="#D82C2C"
      />
    </>
  );
}

export default WebDevelopment;
