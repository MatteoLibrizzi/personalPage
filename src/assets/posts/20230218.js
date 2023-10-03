const d = new Date('2023-02-18')
const m = d.getMonth() + 1
let addZero = m < 10
const ms = (addZero ? '0' : '') + m.toString()
addZero = d.getDate() < 10
let ds
if (addZero) { ds = '0' + d.getDate().toString() } else { ds = d.getDate().toString() }
const post20230218 = {
  key: 20,
  title: 'Moving to Luxembourg',
  date: d.getFullYear() + '-' + ms + '-' + ds,
  content: 'So it’s 11pm. I just came back from my routine night walk. And I’m yawning as my body asks for rest after a long day which took me from Palermo to Luxembourg.\nThat’s right, it finally happened. On monday I will start working at Amazon here in Luxembourg. Multiple times I said that something had “made it real” for me. Like signing the contract, or getting the housing money. But I have to say I was wrong, it wasn’t real until I actually went to the airport and got on the plane.\nDuring the day I felt a very broad spectrum of emotions.\nAt first it was fear.\nIt’s always fear at the beginning for me. At first it was really unpleasant, then I remembered that a few months ago I was always reminding myself to follow my fears…\nI’m still scared.\nI’m scared of being lonely.\nI’m scared I won’t be good enough.\nI’m scared I will not like my life.\n.\nAs I was walking among those modern buildings in Kirchberg, some of which will be my place of work for some time, I was excited. I also found some comfort.\nFirstly, from how cool the offices looked. My mouth was drooling as I looked inside through the windows of the first floors, and saw big whiteboards, standing desks with multiple monitors, and ping pong tables.\nBut mostly I found comfort in surrendering control.\nI find comfort from remembering that I can’t know the future, but I know that whatever comes I’ll do my best.\nSome rational part of my brain reminded me that I’m not in any danger, I’m exactly where I should be under every point of view, and really the worst that could happen would still be pretty fucking awesome. A few months ago I would not have believed where I am right now.\nLife is good.'
}
export default post20230218
