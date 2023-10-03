import React from 'react'
import ReactMarkdown from 'react-markdown'

const MarkdownRenderer = ({ children }) => {
  return (
    <div className="markdown-content">
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  )
}

export default MarkdownRenderer
