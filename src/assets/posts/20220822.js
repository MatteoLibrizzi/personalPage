const d=new Date("2022-08-22");
const m=d.getMonth()+1;
var addZero=m < 10;
const ms= (addZero ? '0' : null) + m.toString();
addZero=d.getDate()<10
var ds;
if(addZero)
    ds= '0'+d.getDate().toString();
else
    ds=d.getDate().toString();
const post20220822 = {
    key: 6,
    title: "A habitless time",
    date: d.getFullYear()+"-"+ms+"-"+ds,
    content: "Habits are, in my experience, the only way to achieve anything meaningful, period.\nMotivation and discipline are bullshit, they light a very intense fire, but that doesn't last. Habits on the other hand, slowly but surely get you closer and closer to the goal, like a drop of water digging into stone.\nI unconsciously realized that a long time ago, and have been applying that knowledge to just about anything. Habits are the reason I am the student, athlete, developer, polyglot, and the person I am today.\nI'm pretty good at building habit, and that's all I do.\nBut I believe we should accept and welcome change, a life filled with habits provides little to no new experiences, or room for deep personal growth. Which is why I'm taking this break. Allowing myself to live in a habitless time.\nI wake up in a different place every few days, and I have no idea what I'm going to do with the day. My only obligation is to work for a few hours every day, but other than that, I don't have a clue.\nI don't know when I'm going to eat, I don't know when I'm going to sleep, I don't know when I'm going to workout, sometimes I don't even know if I'll do those things, and that's okay.\nSometimes life gets exhausting, and you need some time to do the exact opposite of what you are used to. Honestly I miss spending all day studying, only to break to go to the gym, then study more, and then go to bed to do it all over again. But I will give myself 10 more days to really crave that routine, so when I get back to it, I will enjoy it much more.\nSalut from Toulouse",
}
export default post20220822;