const d = new Date('2023-01-12')
const m = d.getMonth() + 1
let addZero = m < 10
const ms = (addZero ? '0' : '') + m.toString()
addZero = d.getDate() < 10
let ds
if (addZero) { ds = '0' + d.getDate().toString() } else { ds = d.getDate().toString() }
const post20230112 = {
	key: 17,
	title: 'Poem to my erasmus friends',
	date: d.getFullYear() + '-' + ms + '-' + ds,
	noPreview: 1,
	content: 'It\'s time to leave\njust September we planted seeds\nthey grew\nwith the fall of the leaves.\n-\nAs time went on\nin Paris arrived the snow\none by one they started to go\nback someplace they call home.\n-\nThough we won\'t say "bonjour" anymore\nI know that all over the world\nonly a plane away\nI will have a place to stay.\n-\nAs long as we are all\nLost on a planet so small\nI see no reason to not\ngive each other a call.'
}
export default post20230112
