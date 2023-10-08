const d = new Date('2023-02-25')
const m = d.getMonth() + 1
let addZero = m < 10
const ms = (addZero ? '0' : '') + m.toString()
addZero = d.getDate() < 10
let ds
if (addZero) { ds = '0' + d.getDate().toString() } else { ds = d.getDate().toString() }
const post20230225 = {
	key: 21,
	title: 'Stream of consciousness',
	date: d.getFullYear() + '-' + ms + '-' + ds,
	content: 'In sports, most people make it as far as their genetics allow them.\nI might do well at a regional competition, but only be mediocre at a national one.\nAnyone who’s somewhat gifted in anything will have the experience of effortlessly succeeding, that is until their genetic talent runs out.\nYou keep succeeding until everyone you are comparing yourself to is just as talented as you are.\nYou keep succeeding until everyone you are comparing yourself to is just as talented as you are.\nThere is no way to know in what amount each one contributes.\nI met so many smart people this week and I really felt like I was in the right place.\nBut this thought hit me today.\nIt might very well be that this is as far as my talent will take me. I’ll just be in someone’s rearview mirror.\nI don’t necessarily have a problem with that.\nIt’s just something I’m preparing myself for.'
}
export default post20230225
