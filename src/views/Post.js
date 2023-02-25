import React from 'react';

// import sections
import PostContent from '../components/sections/PostContent';

// eslint-disable-next-line no-unused-vars
const Post = (...props) => {
  const params = props[0].match.params;
  var post;
  
  try{
    post = require("../assets/posts/" + params.year + params.month + params.day+".js");
    console.log(post.default);
  }catch(e){
    console.log(e);
    post = {
      default: {
        title: "404 POST NOT FOUND",
        date: "",
        content: "Either you or I did something wrong\nGo to the home page and try again\nwww.matteolibrizzi.com"
      }
    }
  }

  return (
    <>
      <PostContent invertMobile topDivider imageFill className="illustration-section-02" post={post.default}/>
    </>
  );
}

export default Post;