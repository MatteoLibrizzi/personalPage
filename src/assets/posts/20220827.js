const d=new Date("2022-08-27");
const m=d.getMonth()+1;
var addZero=m < 10;
const ms= (addZero ? '0' : null) + m.toString();
addZero=d.getDate()<10
var ds;
if(addZero)
    ds= '0'+d.getDate().toString();
else
    ds=d.getDate().toString();
const post20220827 = {
    key: 7,
    title: "Dream come true",
    date: d.getFullYear()+"-"+ms+"-"+ds,
    content: "It's weird, I have wanted this to be my life for so long, and when I got there, it took me a month to realize I'd made it.\nI was in Carcassone, in a hostel for the first time in a while, and I was having my daily dose of conversation with strangers. I had seen this guy on his computer with code on the screen. I went up to him, and we started chatting. When I told him about what I was doing he said: 'oh yeah, you are a digital nomad, I'm doing the same thing'. And that's when it hit me.\nI had been working part time and traveling (part time), which was almost exactly what I had envisioned as my dream life-style for the past 2 years.\nWhat made me so happy was that the achievement of my dream wasn't followed by the question... 'now what?'. I had been extremely happy for the past month, because the thing I was chasing was all I wanted it to be. It was exactly what I desired for my life.\nI am so grateful."
}
export default post20220827;