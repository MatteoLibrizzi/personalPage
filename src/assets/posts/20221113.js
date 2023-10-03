const d = new Date('2022-11-13')
const m = d.getMonth() + 1
let addZero = m < 10
const ms = (addZero ? '0' : '') + m.toString()
addZero = d.getDate() < 10
let ds
if (addZero) { ds = '0' + d.getDate().toString() } else { ds = d.getDate().toString() }
const post20221113 = {
  key: 16,
  title: 'The Hunt',
  date: d.getFullYear() + '-' + ms + '-' + ds,
  content: 'It was early morning.\nI looked up at the sky. Based on the light, and my phone, I would have guessed it was around 7.23am.\nThat’s when my friend Deb and I decided to go in.\nThere were tall trees all around us. The dropping vines and the thickets made that wilderness feel very dense.\nWe quickly caught up to where we were the day before. Last time we had to abort the mission. We had a very long day and it was very hard to focus. I remember feeling my eyelid wanting to drop as my brain was desperately trying to think past the obvious.\nI was feeling refreshed thanks to a good night of sleep. The same couldn’t be said for Deb. She was barely executing orders, without putting any thought into her actions.\nWe weren’t quite sure what we were looking for. But we knew something was wrong. As the villagers had reported, something in the environment wasn’t quite where it was supposed to be, Deb and I had seen strange behaviors in the trees with our own eyes.\nWe were scouting for abnormalities, but it was hard to find any within the thickness of the forest.\nMy most powerful tool was a magnifying glass able to recognize visual patterns in an area. Of course in order to put it to good use I had to know what to look for.\nDespite her sleepiness, Deb was more prepared. She had a box full of tools. Her favorites were her traps. She could set them up and they would detect any movement in the vicinity, emitting a powerful signal that would stop whatever was moving and let it free according to commands. She called them breakpoints.\nI asked her to set up one near an interesting bush, but after some waiting we had to accept that nothing was happening there.\nWe kept walking through the forest for what felt like an eternity, I was getting hungry and Deb was complaining about her feet hurting. As the forest grew darker, our sights became shorter, yet I spotted something interesting. A pattern that would repeat every few trees. I used my magnifying glass to find an isolated and very odd-looking set of trees. That might have been exactly what Deb and I were looking for.\nDeb set up a trap in the center of them, and we walked far away so as not to disturb the environment, and let it act normally. How can you study the natural behavior of something if your presence itself affects its environment? Well that’s why we were using Deb’s breakpoints.\nIt only took a few minutes. The trap had been triggered, but as we were getting closer to it, Deb pressed play by mistake, freeing whatever had activated it. Just as that happened something ran past us. It happened really quickly, I barely noticed it, but my instincts immediately told me what to do. I knew exactly where to set up the next traps. I felt as though whatever it was, wanted to find me as much as I wanted to find it. It was coming towards me, scaredly, and wanted me to take the initiative.\nDeb looked puzzled as I confidently set up 3 traps. She had seen this before. My hunting instincts at play. A few seconds had passed when the first breakpoint was triggered… Just as I suspected, but I was only looking at a symptom of the problem. I pressed play immediately, and the second trap was triggered. Deb turned around running towards her trap, she wanted to analyze it, but I already knew what I was looking at, I wasted no time and pressed play. I knew the third breakpoint was going to answer all of our questions. Surely enough it was triggered.\nLike a dream you can’t quite remember the cause of the problems had been elusive, but had now revealed itself:\nAn undefined variable.\nOne of the fields encoded in a jwt object was not populated, meaning that when the app tried to read it, all it got was a simple but troublesome undefined value. This caused a function to return a wrong boolean value, and a condition to be true, redirecting the execution flow somewhere else, and therefore loading the wrong page.\nThere was my bug, the hunt was over.\nI sat back on my chair and looked at the screen with a newly found clarity.\nAll was quiet around me. Since I last looked at it, the sky had gotten brighter.\nThe first rays of sun forcing themselves into the room made me look outside.\nI stood up, and looking at that evil line of code I finally said:\nI see you.'
}
export default post20221113
