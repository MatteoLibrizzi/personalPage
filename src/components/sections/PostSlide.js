import React from 'react'
import classNames from 'classnames'
import Image from '../elements/Image'
import { Link } from 'react-router-dom'

const propTypes = {
}

const defaultProps = {
}

const PostSlide = ({
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
	// TODO move posts and images to a new component where you pass the post data, so that the rendering can be done only when we have the data, and the list in the scrollreveal is filled

	const outerClasses = classNames(
		'features-split section',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className
	)

	const innerClasses = classNames(
		'features-split-inner section-inner',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider'
	)

	const splitClasses = classNames(
		'split-wrap',
		invertMobile && 'invert-mobile',
		invertDesktop && 'invert-desktop',
		alignTop && 'align-top'
	)

	const sectionHeader = {
		title: 'Blog',
		paragraph: ''
	}

	const postsData = []
	return (
		<>

			{postsData.map((post, index) => {
				const { date, title, s3Key, imageData } = post

				/*
                    <div className="split-item">
                        <div className={left?"split-item-content center-content-mobile reveal-from-left":"split-item-content center-content-mobile reveal-from-right"} data-reveal-container=".split-item">
                            <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                            {post.date}
                            </div>
                            <h3 className="mt-0 mb-12">
                            {post.title}
                            </h3>
                            {
                              post.noPreview === 1 ?
                                <div>
                                  <Link to={"/post/" + dateArray[0] + "/" + dateArray[1] + "/" + dateArray[2]}>Click to read</Link>
                                </div>
                                  :
                                <div>
                                <p className="m-0">
                                {post.content.substring(0,300)}...
                                </p>
                                <Link to={"/post/" + dateArray[0] + "/" + dateArray[1] + "/" + dateArray[2]}>Keep reading</Link>
                                </div>
                            }
                          </div>
                        <div className={
                            classNames(
                            'split-item-image center-content-mobile reveal-from-bottom',
                            imageFill && 'split-item-image-fill'
                            )}
                            data-reveal-container=".split-item">
                            { displayImg && <Image
                            src={require('./../../assets/images/' + dateArray[0] + "-" + dateArray[1] + "-" + dateArray[2] + ".jpg")}
                            alt={post.title + " - Image"}
                            width={528}
                            height={396} />
                }
                        </div>
                        </div>
                    */

				return (
					<div key={index} className="split-item">
						<div className={'split-item-content center-content-mobile reveal-from-left'} data-reveal-container=".split-item">
							<div className="text-xxs text-color-primary fw-600 tt-u mb-8">
								{date}
							</div>
							<h3 className="mt-0 mb-12">{title}</h3>
							<div>
								<div>
									<Link to={'/post/' + s3Key}>Click to read</Link>
								</div>
							</div>
						</div>
						<div className={
							classNames(
								'split-item-image center-content-mobile reveal-from-bottom',
								imageFill && 'split-item-image-fill'
							)}
						data-reveal-container=".split-item">
							{imageData && <Image
								alt={post.title + ' - Image'}
								src={'data:image/jpeg;base64,' + imageData}
								width={528}
								height={396} />
							}
						</div>
					</div>

				)
			})}

		</>
	)
}

PostSlide.propTypes = propTypes
PostSlide.defaultProps = defaultProps

export default PostSlide
