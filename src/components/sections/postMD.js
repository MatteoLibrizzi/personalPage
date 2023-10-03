import React from 'react'
import ReactMarkdown from 'react-markdown'

const PostMD = ({ children }) => {
  return (
    <>
        <div className="container">
            <section className='features-split section illustration-section-02'>
                <div className='center-content'>
                  <div className="markdown-content">
                    <ReactMarkdown>{children}</ReactMarkdown>
                  </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default PostMD
