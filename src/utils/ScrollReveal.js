import React, { useState, useEffect, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import { throttle } from 'lodash'

const ScrollReveal = React.forwardRef((props, ref) => {
	const [viewportHeight, setViewportheight] = useState(window.innerHeight)
	const [revealEl, setRevealel] = useState([])
	console.log({ revealEl })

	const checkComplete = () => {
		return (
			revealEl.length <=
			document.querySelectorAll('[class*=reveal-].is-revealed').length
		)
	}

	const elementIsVisible = (el, offset) => {
		return el.getBoundingClientRect().top <= viewportHeight - offset
	}

	const revealElements = () => {
		if (checkComplete()) return
		for (let i = 0; i < revealEl.length; i++) {
			console.log('Element ' + i)
			const el = revealEl[i]
			const revealDelay = el.getAttribute('data-reveal-delay')
			const revealOffset = el.getAttribute('data-reveal-offset')
				? el.getAttribute('data-reveal-offset')
				: '200'
			const listenedEl = el.getAttribute('data-reveal-container')
				? el.closest(el.getAttribute('data-reveal-container'))
				: el
			if (
				elementIsVisible(listenedEl, revealOffset) &&
				!el.classList.contains('is-revealed')
			) {
				console.log('Element visible and not revealed yet')
				if (revealDelay && revealDelay !== 0) {
					setTimeout(function () {
						el.classList.add('is-revealed')
					}, revealDelay)
				} else {
					el.classList.add('is-revealed')
				}
			}
		}
	}

	useImperativeHandle(ref, () => ({
		init() {
			setRevealel(document.querySelectorAll('[class*=reveal-]'))
		},
	}))

	useEffect(() => {
		if (typeof revealEl !== 'undefined' && revealEl.length > 0) {
			if (!checkComplete()) {
				window.addEventListener('scroll', handleScroll)
				window.addEventListener('resize', handleResize)
			}
			revealElements()
		}
		// eslint-disable-next-line 
	}, [revealEl])

	const handleListeners = () => {
		if (!checkComplete()) return
		console.log('Handling listeners')
		window.removeEventListener('scroll', handleScroll)
		window.removeEventListener('resize', handleResize)
	}

	const handleScroll = throttle(() => {
		handleListeners()
		revealElements()
	}, 30)

	const handleResize = throttle(() => {
		setViewportheight(window.innerHeight)
	}, 30)

	useEffect(() => {
		handleListeners()
		revealElements()
		// eslint-disable-next-line 
	}, [viewportHeight])

	return <>{props.children()}</>
})

ScrollReveal.propTypes = {
	children: PropTypes.func.isRequired,
}
ScrollReveal.displayName = 'ScrollReveal'

export default ScrollReveal
