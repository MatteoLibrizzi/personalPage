import React from 'react';
import { Redirect } from 'react-router-dom'
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Cta from '../components/sections/Cta';
import Markdown from './Markdown'

const Home = (...props) => {

  if (props[0].location.search === "?blog")
    return <Redirect to="/blog" />

  return (
    <>
      <Markdown>Hello</Markdown>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Cta split />
    </>
  );
}

/*
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
    </>
*/

export default Home;