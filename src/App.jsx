import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Features/Navbar/Navbar";
import Header from "./component/Features/Header/Header";
import Footer from "./component/Features/Footer/Footer";
import Service from "./component/Features/services/Service";
import Query from "./component/Features/Footer/Query";
import PricingPage from "./component/Features/price/PricingPage/PricingPage";
import AboutPage from "./component/Features/AboutUs/AboutPage";
import PortfolioPage from "./component/Features/PortfolioPage/Landing";
import WebsiteDetail from "./component/Features/services/pages/websitePage/WebsiteDetail";
import GoogleList from "./component/Features/services/pages/GoogleList/LandingPage";
import DigitalMarket from "./component/Features/services/pages/DigitalMarket/LandingPage";
import LogoDesign from "./component/Features/services/pages/LogoDesign/LogoDesign";
import Portfolio from "./component/Features/portfolio/Landing";
import GoogleAdsPage from "./component/Features/price/Price";
import ContactPage from "./component/Features/ContactPage/ContactPage";
import Demo from "./component/Features/portfolio/Portfolio";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Service />
              <GoogleAdsPage />
              <Portfolio />
              <Query/>
            </>
          }
        />
        <Route path="/pricing" element={<PricingPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/portfolio" element={<PortfolioPage/>} />
        <Route path="/website" element={<WebsiteDetail />} />
        <Route path="/digital" element={<DigitalMarket />} />
        <Route path="/listing" element={<GoogleList />} />
        <Route path="/logo" element={<LogoDesign/>} />
        <Route path="/buy" element={<GoogleAdsPage/>} />
        {/* <Route path="/demo" element={<Demo/>} /> */}
      </Routes>
      <Footer />
    </Router>

  );
}