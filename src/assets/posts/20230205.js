const d = new Date('2023-02-05')
const m = d.getMonth() + 1
let addZero = m < 10
const ms = (addZero ? '0' : '') + m.toString()
addZero = d.getDate() < 10
let ds
if (addZero) { ds = '0' + d.getDate().toString() } else { ds = d.getDate().toString() }
const post20230205 = {
	key: 18,
	title: 'Distance',
	date: d.getFullYear() + '-' + ms + '-' + ds,
	content: 'This all came crashing down on me over the last few days.\nIf you’d like to think I’m a good person, then maybe you should read something else.\nWhile I was away from my family I met many people, some of them trusted me enough with their problems, even pretty serious ones.\nI like to think I was able to help them somehow.\nI was always able to keep some distance, for as much as I wanted to help them, they never became my problems, they never kept me awake at night.\nSince I’ve been back at my parent’s house, people close to me have trusted me with problems that I feel like have been snowballing for the past 6 months.\nI’m finding this emotional dependency to be too much.\nThe difference is that I haven’t been as good at taking a sufficient distance.\nThose problems really feel like they are mine.\nAs I was walking I was really sad, and this is the best I could come up with:\nI wish I could help my loved ones, I wish I could find a solution, so we would both be relieved.\nThe truth is that it is not always possible.\nSo over the next few days, I will still try to help, but I will do so from a bit further away.\nI will not make other people’s problems my own, not because I don’t care.\nBut because I need to take care of myself first.\nI know I will be more helpful if I have direction, meaning, and satisfaction.'
}
export default post20230205
