import React, { useState } from "react";

import LocateUs from "../components/LocateUs";
import { Helmet } from "react-helmet";

import ContactCardUnified from "./ContactCardUnified";

function Contact() {
  return (
    <>
      <Helmet>
        <title>BELLWAY INFOTECH - Contact Us</title>
        <meta
          name="description"
          content="For any query or inquiry regarding our Web & App Development or their uses, please feel free to contact us directly. We are just an email away at info@bellwayinfotech.com."
        />
        <meta
          name="keywords"
          content="contact Bellway Infotech, web development inquiries, app development inquiries, contact for web development, contact for app development, software development contact, digital marketing contact, IT service inquiries, Bellway Infotech contact email, reach us Bellway Infotech, business inquiries Bellway Infotech"
        />
      </Helmet>


      <ContactCardUnified />
      <LocateUs />
   
      
    </>
  );
}

export default Contact;
