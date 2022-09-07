import React from 'react';
// import sections
import Cta from '../components/sections/Cta';
import PostSlides from '../components/sections/PostSlides';

const Blog = () => {

  return (
    <>
      <PostSlides invertMobile topDivider imageFill className="illustration-section-02" />
      <Cta split />
    </>
  );
}

export default Blog;