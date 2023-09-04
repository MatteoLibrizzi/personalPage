import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Posts from '../../assets/posts/posts';
import { Link } from 'react-router-dom'
import postData from '../../worker/post';
import API_URL from '../../utils/constants';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const PostSlides = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const [postsMD, setPostsMD] = useState([])

  useEffect(() => {
    postData(API_URL, {eventType: 'GetPostsKeys'})
    .then(async (res) => {
      if (res.ok) {
        const content = await res.text();
        const array = JSON.parse(content)
        setPostsMD(array);
      } else {
        setPostsMD([])
      }
    })
  }, [])


  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Blog',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
        <div className="container">
            <div className={innerClasses}>
                <SectionHeader data={sectionHeader} className="center-content" />
                <div className={splitClasses}>
                  {postsMD.map((post, index) => {
                    const left = index % 2 === 0;
                    const displayImg = false
                    return (
                      <div key={index} className="split-item">
                        <div className={left?"split-item-content center-content-mobile reveal-from-left":"split-item-content center-content-mobile reveal-from-right"} data-reveal-container=".split-item">
                        <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                            {"aaa"}
                            </div>
                          <h3 className="mt-0 mb-12">{"" + post}</h3>
                          <div>
                          <Link to={"/post/" + post}>Keep reading</Link>
                          </div>
                        </div>
                        <div className={
                            classNames(
                            'split-item-image center-content-mobile reveal-from-bottom',
                            imageFill && 'split-item-image-fill'
                            )}
                            data-reveal-container=".split-item">
                            { displayImg && <Image
                            alt={post.title + " - Image"}
                            width={528}
                            height={396} />
                }
                        </div>
                        </div>
                        
                    )

                  })}
                
                </div>
            </div>
        </div>
    </section>
  );
}

PostSlides.propTypes = propTypes;
PostSlides.defaultProps = defaultProps;

export default PostSlides;
