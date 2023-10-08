import React, { useEffect, useState } from 'react'

// import sections
import PostMD from '../components/sections/postMD'
import postData from '../worker/post'
import API_URL from '../utils/constants'

// eslint-disable-next-line no-unused-vars
const Post = (...props) => {
	const [content, setContent] = useState('# ...Loading')

	const params = props[0].match.params
	console.log(params)
	const s3Key = params.title

	useEffect(() => {
		postData(API_URL + '/getPosts', { eventType: 'GetPostContent', s3Key })
			.then(async (res) => {
				if (res.ok) {
					const content = await res.text()
					setContent(content)
				} else {
					setContent('Something went wrong. Go back to the home page :)')
				}
			})
	}, [])

	return (
		<>
			<PostMD>{content}</PostMD>
		</>
	)
}

export default Post
