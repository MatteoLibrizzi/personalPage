const d = new Date('2022-09-05')
const m = d.getMonth() + 1
let addZero = m < 10
const ms = (addZero ? '0' : null) + m.toString()
addZero = d.getDate() < 10
let ds
if (addZero) { ds = '0' + d.getDate().toString() } else { ds = d.getDate().toString() }
const post20220905 = {
  key: 8,
  title: '2 years',
  date: d.getFullYear() + '-' + ms + '-' + ds,
  content: "As of today, monday 5th of september 2022, I have been sober for 2 years.\nI quit back then because I realized I struggled with balancing anything addictive in my life, and I still do, I think it's just a part of me I have to live with.\nI can tell you I am, and have been a much happier human being ever since I decided to quit.\nIt's not always comfortable. Sitting with a group of strangers who are all drinking and having to tell them: 'yeah I don't drink because I have an addictive personality', is no fun. I could lie, but that's no fun either.\nMost people just shrug their shoulders when I tell them, but occasionally they tell me about their own addiction, and that's always a very deep conversation, which I love.\nOnce someone told me he found me inspiring. He had been struggling with addiction for years, and had started traveling to try to escape it. It didn't take him long to realize that he was really trying to escape himself. We shared an incredible connection through a very profound conversation, so deep I got goosebumps while talking to him. A few minutes later he excused himself to the bathroom to do cocaine before heading out.\nI felt an extremely wide spectrum of emotions. But that night I learned about myself, and I understood how deep human connection can really be."
}
export default post20220905
