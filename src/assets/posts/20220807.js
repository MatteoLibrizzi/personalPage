const d = new Date('2022-08-07')
const m = d.getMonth() + 1
let addZero = m < 10
const ms = (addZero ? '0' : null) + m.toString()
addZero = d.getDate() < 10
let ds
if (addZero) { ds = '0' + d.getDate().toString() } else { ds = d.getDate().toString() }

const post20220807 = {
	key: 4,
	title: 'Single Serving Friends',
	date: d.getFullYear() + '-' + ms + '-' + ds,
	content: 'I decided to write about this on one of my last nights in Paris. A beautiful girl named Jeanne had told all about her passion for techno. We had talked for hours about all sorts of things.\nAs I was riding the metro home I thought about how only a few days earlier, my discussion with Alexander had left me with a similar feeling, and just a few months back in Spain, when Emma had made me fall in love with her way of life, I felt the same way.\nAll of them and many more, had been my single serving friends. I bonded so much with them, and I will probably never see any of them again.\nThen I think about my long term friends, whom I share so many experiences with. Who I know so well I know how they will react to all the stories I tell them. Sometimes life with them gets difficult because when you know someone that well, you are familiar with their faults, and you just have to make peace with them. Still I need those relationships. Because life without them is just a series of short chapters you can\'t piece together in the book of your life.\nI\'m still looking for my way of balancing the two. Its hard to maintain the same contact with long term friends while solo traveling, I almost feel like I have to choose between the two.\nLife with single serving friends is so intense you can\'t help but being in love with life. And yet the only memories you are left with after a while, are the ones with your long term friends.\nAs always with life, the answer is neither one nor zero. Not black nor white. Guess I\'ll just have to keep looking for that shade of gray.'
}
export default post20220807
