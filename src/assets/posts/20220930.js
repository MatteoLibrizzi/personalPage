const d=new Date("2022-09-30");
const m=d.getMonth()+1;
var addZero=m < 10;
const ms= (addZero ? '0' : null) + m.toString();
addZero=d.getDate()<10
var ds;
if(addZero)
    ds= '0'+d.getDate().toString();
else
    ds=d.getDate().toString();
const post20220930 = {
    key: 10,
    title: "Coincidences",
    date: d.getFullYear()+"-"+ms+"-"+ds,
    content: "'I don't believe in an higher power, but some of the things that happen to me really make me question that belief'\nThat's what I told one of my erasmus friends from South Africa while we were talking about god.\nAnd it's true, some things are just so perfect and too unlikely to attribute them to pure chance.\nTheo being my roommate is one of them.\nWe both quickly realized how much we had in common, and I definitely remember thinking how much potential this relationship had.\nAfter almost a month I can say with absolute certainty that I could not have been more right.\n\nSomeday I might start believing all those weird great things that happen to me are due to something bigger. For now I'm just amazed by the beauty of chaos.",
}
export default post20220930;