const d = new Date('2023-02-12')
const m = d.getMonth() + 1
let addZero = m < 10
const ms = (addZero ? '0' : '') + m.toString()
addZero = d.getDate() < 10
let ds
if (addZero) { ds = '0' + d.getDate().toString() } else { ds = d.getDate().toString() }
const post20230212 = {
  key: 19,
  title: 'Perspective',
  date: d.getFullYear() + '-' + ms + '-' + ds,
  content: 'One of my favorite paintings, in fact the only painting I ever put up on a wall, is “Lincoln in Dalivision” from Dalì. It is in a museum in Spain. I saw it when I visited Barcelona with my parents.\nThe reason I hung it on my wall is that I want to always be reminded to have perspective.\nIt’s hard to keep perspective. Especially if you focus on the task at hand, as you should.\nAny small problem with the current small thing you are doing, might feel very heavy. It is important to zoom out though.\nI’d like to remind the following to both you and myself: when you are upset about any given thing, try to outline the context, and then walk a few steps back.\nI might be really upset about my code not working after 3 hours of bashing my head against the keyboard, and the exam might be in 3 days, and if I don’t pass, who knows if I’ll graduate on time…\nBut look at what I built during the last year. Look at what I have planned for the next weeks and months. And remember the beautiful conversation you had with your friend today, what a deep connection!\nSurely that should weigh more on your emotional state than a missing semicolon.'
}
export default post20230212
