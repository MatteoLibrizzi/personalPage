import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Posts from '../../assets/posts/posts';
import { Link } from 'react-router-dom'

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
                {Posts.sort(post=>post.date).reverse().forEach(post=>console.log(post))}
                {Posts.sort((post1,post2)=>post1.date.localeCompare(post2.date)).reverse().map((post,index) => { 
                    const left = index % 2 === 0;
                    console.log(left)
                    return (
                    <div className="split-item">
                        <div className={left?"split-item-content center-content-mobile reveal-from-left":"split-item-content center-content-mobile reveal-from-right"} data-reveal-container=".split-item">
                            <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                            {post.date}
                            </div>
                            <h3 className="mt-0 mb-12">
                            {post.title}
                            </h3>
                            <p className="m-0">
                            {post.content.substring(0,300)}...
                            </p>
                            <Link to={post.date}>Keep reading</Link>
                        </div>
                        <div className={
                            classNames(
                            'split-item-image center-content-mobile reveal-from-bottom',
                            imageFill && 'split-item-image-fill'
                            )}
                            data-reveal-container=".split-item">
                            <Image
                            src={require('./../../assets/images/features-split-image-03.png')}
                            alt="Features split 03"
                            width={528}
                            height={396} />
                        </div>
                        </div>
                )})}
                </div>
            </div>
        </div>
    </section>
  );
}

PostSlides.propTypes = propTypes;
PostSlides.defaultProps = defaultProps;

export default PostSlides;
