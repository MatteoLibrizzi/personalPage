const d=new Date("2022-09-20");
const m=d.getMonth()+1;
var addZero=m < 10;
const ms= (addZero ? '0' : null) + m.toString();
addZero=d.getDate()<10
var ds;
if(addZero)
    ds= '0'+d.getDate().toString();
else
    ds=d.getDate().toString();
const post20220920 = {
    key: 9,
    title: "You are the most extroverted person of the group",
    date: d.getFullYear()+"-"+ms+"-"+ds,
    content: "When Dylay said this to me, I turned away, shocked.\nShe hesitantly said 'what?'. I told her about my history of insecurities and social anxiety that everybody that's been close to me at any point in my life know.\nBut as I was telling her, I realized that none of that mattered. I wasn't that person anymore, I had changed.\nI was incredibly happy in that moment cause I realized just how much I had changed over the past months, and I had done so in smooth, flowing, natural way. My own tattoo was even more meaningful, that's what I envisioned change to look like.\nI also realized how badly words like introverted and extroverted describe me.\nHow much simpler would the world be if everything was binary?\n1 or 0?\ntrue or false?\nFor the past 20 days I have been really enjoying life, getting to know everyone from the erasmus group, as well as some really cool french people.\nI guess tomorrow will finally mark the end of my vacation, but I am really excited for the lectures to start.\nI am really curious to see how the person I've become will deal with the academic workload, and the added difficulty of studying in a language just 6 months ago, I knew nothing about.\nThe future is exciting.",
}
export default post20220920;