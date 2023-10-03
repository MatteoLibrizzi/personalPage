const d = new Date('2023-07-19')
const m = d.getMonth() + 1
let addZero = m < 10
const ms = (addZero ? '0' : '') + m.toString()
addZero = d.getDate() < 10
let ds
if (addZero) { ds = '0' + d.getDate().toString() } else { ds = d.getDate().toString() }
const post20230719 = {
  key: 26,
  noPreview: 1,
  title: 'She comes from the east',
  date: d.getFullYear() + '-' + ms + '-' + ds,
  content: "She comes from the east\nLike the hot wind\nFrom a summer you miss\n.\nI see a child in her eyes\nBut from the strength of her hugs\nYou know the goodbyes\nShe's said in her life\n.\nShe comes from the east\nLike the sun at dawn\nOut of sight before you know\nAnd another day passed\nWhere our lips haven't touched\nYet."
}
export default post20230719
