const d = new Date('2022-10-30')
const m = d.getMonth() + 1
let addZero = m < 10
const ms = (addZero ? '0' : '') + m.toString()
addZero = d.getDate() < 10
let ds
if (addZero) { ds = '0' + d.getDate().toString() } else { ds = d.getDate().toString() }
const post20221030 = {
	key: 14,
	title: 'It\'s mostly luck',
	date: d.getFullYear() + '-' + ms + '-' + ds,
	content: 'What is?\nWell, if you ask me, just about everything.\n\nRecently I got some really good news, I mean the kind of news that makes you feel like you won the lottery.\nAfter five minutes of jumping around my room while laughing histerically, I talked to my brother over the phone, then I had a call with my parents.\nThen that high faded in the background. I still experience it now, almost 48 hours later, like a distant feeling that I can get back to whenever I want to, but I can also function without thinking about it.\nAfter some introspection I started wondering:\n    Why me?\n    Am I really THAT good?\nProbably not, and even if I was, I could come up with a million reason that could have made me fail somewhere along the way.\nBut I didn\'t. I took every necessary step, and was exactly in the right spot.\nI guess what I\'m trying to say is that I see how lucky I am, clearly. And I am grateful to be here, exactly where I am supposed to be.'
}
export default post20221030
