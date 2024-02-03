import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Secimg from "../components/secimg";
import Offer from "../components/offer";

const About = () => {
  return (
    <div>
      <Navbar />
      <Secimg
        heading="WHAT'S DIFFERENT?"
        text="NOW YOU CAN CUSTOMISE YOUR FAVORITE BAKERIES & BEVERAGES AS PER your"
        text1="PREFERED INGREDIENTS & TOPPINGS !"
      />
      <Offer />
      <Footer />
    </div>
  );
};

export default About;
