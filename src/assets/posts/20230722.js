const d = new Date('2023-07-22')
const m = d.getMonth() + 1
let addZero = m < 10
const ms = (addZero ? '0' : '') + m.toString()
addZero = d.getDate() < 10
let ds
if (addZero) { ds = '0' + d.getDate().toString() } else { ds = d.getDate().toString() }
const post20230722 = {
	key: 27,
	title: 'Where are you from?',
	date: d.getFullYear() + '-' + ms + '-' + ds,
	content: 'Many times, in the history of the world, a boy, or a man, was going about his life.\nHe’d forgotten his age, for it didn’t matter to him how long he’d lived so far.\nHe’d found and then lost the meaning of life, so many times he stopped looking long ago.\nHe’d lost track of what he had seen, and what he hadn’t seen, because no man ever steps in the same river twice, so all the places felt new to him.\nHe’d loved so much, his heart had grown strong, and his mind had forgotten what hate felt like.\n.\nBut once upon a time, when a man was going about his life,\nA new friend asked:\nWhere are you from?\nThe man who’d forgotten, found, lost, and loved, thought deeply about the question.\nHe thought about his father and all the things he taught him.\nHe remembered his mother reading him a book.\nHe recalled the long afternoons of summer spent playing with his brother.\nHe looked back at the times he talked with his sister about life, and saw himself in her.\nHe called to mind the times his young sister felt lost, as young people often do, and asked for his advice.\nHe summoned up the memories of his old friends, now scattered around the world, and the life filling experiences that made him the man he was.\n.\nFinally he told his new friend:\nI come from an island\nAt the center of the world\nAn island where nothing ever changes\nFor better or for worse.\nWhere the beauty stays the same\nBut so does the ugliness around it.\n.\nAs a tear dropped from his cheek\nhe remembered his home\nand wondered \nif all the memories he’s carrying \nwill fit in it.'
}
export default post20230722
