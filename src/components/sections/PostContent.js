import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const PostContent = ({
  className,
  post,
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

  const sectionHeader = {
    title: post.title,
    paragraph: post.date,
  };

  const postContentLines = post.content.split("\n");

  return (
    <section
      {...props}
      className={outerClasses}
    >
        <div className="container">
            <div className={innerClasses}>
                <SectionHeader data={sectionHeader} className="center-content" />
                {postContentLines.map(line=>{
                    return (
                        <p>
                            {line}
                        </p>
                    )
                })}
            </div>
        </div>
    </section>
  );
}

PostContent.propTypes = propTypes;
PostContent.defaultProps = defaultProps;

export default PostContent;
