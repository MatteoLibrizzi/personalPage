const d = new Date('2023-08-01')
const m = d.getMonth() + 1
let addZero = m < 10
const ms = (addZero ? '0' : '') + m.toString()
addZero = d.getDate() < 10
let ds
if (addZero) { ds = '0' + d.getDate().toString() } else { ds = d.getDate().toString() }
const post20230801 = {
  key: 30,
  title: 'Nostalgic poem :c',
  noPreview: 1,
  date: d.getFullYear() + '-' + ms + '-' + ds,
  content: 'Those months\nJust a book\nFull of stories\n.\nHeld together\nAll those beautiful pages\nMixed and various\n.\nZealous I remain because\nAlthough the wind\nTook those pages away\n.\nThe wind itself\nWill bring them together\nOnce again'
}
export default post20230801
