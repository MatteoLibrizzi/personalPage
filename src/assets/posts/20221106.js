const d = new Date('2022-11-06')
const m = d.getMonth() + 1
let addZero = m < 10
const ms = (addZero ? '0' : '') + m.toString()
addZero = d.getDate() < 10
let ds
if (addZero) { ds = '0' + d.getDate().toString() } else { ds = d.getDate().toString() }
const post20221106 = {
  key: 15,
  title: 'Letter to my 22 years old self',
  date: d.getFullYear() + '-' + ms + '-' + ds,
  content: "Dear Matteo,\nI hope life has been treating you well.\nI'm writing you from a starbucks here in Paris, close to Centre Pompidou.\nAs you are reading, these words will probably feel like a distant, nostalgic memory. Especially if all the plans I made for the next year ended up working out.\nIf that's the case, congratulations!\nYou made it.\nYou have lived at the highest speed possible and have achieved everything I could dream of during the past few weeks.\nMy best and most hopeful guess is that you are reading this from Munich, where you recently started studying. You have managed to graduate in september despite all the hoops I made you jump through.\nThe job I made you take led you to grow into a new person, you might even feel like an adult, finally.\nOr maybe the next months in Paris will be enough to make you think of yourself as a grown up.\nRight now I feel like I know you. Especially because you are only a deterministic product of my plan.\nBut looking at my 20 years old self, makes me realize that the said feeling is nothing more than that:\nThis year will change you in ways I can not predict, and I find that incredibly exciting.\nPerhaps my plans haven't quite succeeded. Something might have made you change them, or maybe, somewhere along the way, you just failed.\nThat's perfectly fine, I realize how ambitious the schedule I made is.\nMy only wish to you is that wherever you are, and whatever you are doing, you still feel like you are making good use of the small amount of time we have.\nI know you will take care of yourself.\nBest of luck,\nMatteo"
}
export default post20221106
