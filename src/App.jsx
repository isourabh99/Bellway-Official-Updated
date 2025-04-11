import React from 'react'
import ScrollToTop from './hooks/ScrollToTop';
import { Route, Routes } from 'react-router-dom'
import useLenis from "./hooks/useLenis";
import Footer from "./components/Footer";
import NavTailwind from "./components/NavTailwind";

import Home from './pages/Home'
import About from './pages/About'
import Career from "./pages/Career";
import AI from './pages/AI';
import MobileAppDev from './pages/MobileAppDev';
import WebDevelopment from './pages/WebDevelopment';
import UIUX from './pages/UIUX';
import Digitalmarketing from './pages/Digitalmarketing';
import ErpServices from './pages/ErpServices';
import MvpDevelopment from './pages/MvpDevelopment';
import SaasDevelopment from './pages/SaasDevelopment';
import WordpressDev from './pages/WordpressDev';
import Contact from './pages/Contact';
import BellwayGrocery from "./pages/BellwayGrocery";
import Foodo from './pages/Foodo';
import FreshNred from './pages/FreshNred';
import MakeYourTrip from './pages/MakeYourTrip';
import GoHotel from './pages/GoHotel';
import MultiService from './pages/MultiService';
import BellStore from './pages/BellStore';
import UrFine from './pages/UrFine';
import Team11 from './pages/Team11';
import Movikat from './pages/Movikat';
import DeliciousMeals from './pages/DeliciousMeals';
import HomeC from './pages/HomeC';
import Dailybills from './pages/Dailybills';
import OurWork from './pages/OurWork';
import CaseStudyDetail from './components/CaseStudyDetail';
import useImagesLoaded from './hooks/useImagesLoaded';
import { AnimatePresence } from 'motion/react';
import Loader from './components/Loader';

const App = () => {
  useLenis(); 
   const imagesLoaded = useImagesLoaded();
  return (
      <AnimatePresence>
      {!imagesLoaded ? (
        <Loader />
      ) : (
    <div>
      <NavTailwind />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Career-with-us" element={<Career />} />
        <Route path="/artificial-intelligence" element={<AI />} />
        <Route
          path="/mobile-application-development"
          element={<MobileAppDev />}
        />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/ui-ux-design" element={<UIUX />} />
        <Route path="/digital-marketing" element={<Digitalmarketing />} />
        <Route path="/ERP-Services" element={<ErpServices />} />
        <Route path="/mvp-development" element={<MvpDevelopment />} />
        <Route path="/saas-development" element={<SaasDevelopment />} />
        <Route path="/wordpress" element={<WordpressDev />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bellway-grocery" element={<BellwayGrocery />} />
        <Route path="/foodo" element={<Foodo />} />
        <Route path="/fresh-n-red" element={<FreshNred />} />
        <Route path="/make-your-trip" element={<MakeYourTrip />} />
        <Route path="/go-hotel" element={<GoHotel />} />
        <Route path="/multi-service" element={<MultiService />} />
        <Route path="/bell-store" element={<BellStore />} />
        <Route path="/urfine" element={<UrFine />} />
        <Route path="/team11" element={<Team11 />} />
        <Route path="/movikat" element={<Movikat />} />
        <Route path="/delicious-meals" element={<DeliciousMeals />} />
        <Route path="/home-c" element={<HomeC />} />
        <Route path="/daily-bills" element={<Dailybills />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/case-study/:id" element={<CaseStudyDetail />} />
      </Routes>
      <Footer />
    </div>
        )} 
    </AnimatePresence>
  );
  
}

export default App