import React from "react";
import PageTitle from "../components/PageTitle";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Value from "../components/Value";
import Testimonial from "../components/Testimonial";
import CTA from "../components/CTA";
import Partner from "../components/Partner";

const Home = () => {
  return (
    <div>
      <PageTitle title="Home" />
      <Hero />
      <Gallery />
      <Value />
      <Testimonial />
      <CTA />
      <Partner />
    </div>
  );
};

export default Home;
