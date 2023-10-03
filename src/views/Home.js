import React from 'react'
import { Redirect } from 'react-router-dom'
// import sections
import Hero from '../components/sections/Hero'
import FeaturesTiles from '../components/sections/FeaturesTiles'
import FeaturesSplit from '../components/sections/FeaturesSplit'

const Home = (...props) => {
  if (props[0].location.search === '?blog') { return <Redirect to="/blog" /> }

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
    </>
  )
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

export default Home
