import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { SectionSplitProps } from '../../utils/SectionProps'
import SectionHeader from './partials/SectionHeader'
import postData from '../../worker/post'
import API_URL from '../../utils/constants'

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
  // TODO move posts and images to a new component where you pass the post data, so that the rendering can be done only when we have the data, and the list in the scrollreveal is filled
  const [postsMD, setPostsMD] = useState([])
  /*
  useEffect(() => {
    postData(API_URL+"/getPosts", {eventType: 'GetImagesKeys'})
    .then(async (res) => {
      if (res.ok) {
        const content = await res.text();
        console.log({content})
        const array = JSON.parse(content)
        console.log({array})
        setImagesKeys(array);
      } else {
        setImagesKeys([])
      }
    })
    .then(() => {
      console.log("Then")
      imagesKeys.forEach(async (key) => {
        postData(API_URL + "/getPosts", {eventType: 'GetImage', s3Key: key}).then(async (response) => {
          if (response.ok) {
            console.log("Successful", {response, key})
            const imageData = await response.blob()
            const keysToImagesCopy = Object.assign({}, keysToImages)
            keysToImagesCopy[key] = URL.createObjectURL(imageData)
            setKeysToImages(keysToImagesCopy)
          } else {
            console.log("Not successful", {response, key})
          }
        })
      })
    })
  }, [])

  console.log({keysToImages})

  console.log({imagesKeys})
  */
  useEffect(() => {
    postData(API_URL + '/getPosts', { eventType: 'GetPostsKeys' })
      .then(async (res) => {
        if (res.ok) {
          const content = await res.text()
          const array = JSON.parse(content)
          setPostsMD(array)
        } else {
          setPostsMD([])
        }
      })
  }, [])
  const postsData = postsMD.sort((p1, p2) => p1 < p2).map(post => {
    const date = post.split('__')[0]
    const title = post.split('__')[1].replaceAll('_', ' ')

    return { date, title, s3Key: post.toString() }
  })

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

  return (
    <section
      {...props}
      className={outerClasses}
    >

    <div className='container'>
            <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
                <div className={splitClasses}>
              {
                postsData.map((post, index) => {
                  return (
                    <div key={index}>
                      <h1>post</h1>
                    </div>
                  )
                })
              }
              </div>
            </div>
    </div>
    </section>
  )
}

PostSlides.propTypes = propTypes
PostSlides.defaultProps = defaultProps

export default PostSlides
