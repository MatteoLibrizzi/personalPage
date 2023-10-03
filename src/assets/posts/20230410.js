const d = new Date('2023-04-10')
const m = d.getMonth() + 1
let addZero = m < 10
const ms = (addZero ? '0' : '') + m.toString()
addZero = d.getDate() < 10
let ds
if (addZero) { ds = '0' + d.getDate().toString() } else { ds = d.getDate().toString() }
const post20230410 = {
  key: 23,
  title: 'Wait',
  date: d.getFullYear() + '-' + ms + '-' + ds,
  content: "I despise waiting.\nJust the thought of idly sitting for minutes, as my life's potential slowly drips out, gives me a crippling sense of anxiety, to which of course I attribute the constant state of fight or flight my mind is in all the time.\n.\nI definitely idealize this way of thinking.\nI find that most of my life's meaning comes from pursuing... something.\nYou aren't exactly chasing your dreams while waiting. You are just letting time go by, as your body ages, and you find yourself one step closer to death.\n.\nThis weekend I finally went on a solo trip again, Strasbourg welcomed me with two beautiful days of sun, her streets, sights, and people were as beautiful as I could've imagined.\nTo get there I made the conscious decision to spend over 10 hours in a bus.\nDuring this time I made an effort... to wait.\n I played some chess, improved a few of my playlists, took a little nap, slowly read a book, and listened to an inspiring podcast on AI, all of that, at a very slow pace.\n I gladly remember deciding not to bring either one of my laptops with me. I can't believe I even needed to make that choice.\nI still find myself getting stressed when the bus is in 8 minutes, and I have no way of occupying that time, but I'm improving.\nI'm trying really hard to relax as the sand in the hourglass of my life, slowly but surely falls, leaving the upper side\nempty."
}
export default post20230410
