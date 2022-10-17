const d=new Date("2022-10-16");
const m=d.getMonth()+1;
var addZero=m < 10;
const ms= (addZero ? '0' : '') + m.toString();
addZero=d.getDate()<10
var ds;
if(addZero)
    ds= '0'+d.getDate().toString();
else
    ds=d.getDate().toString();
const post20221016 = {
    key: 12,
    title: "No one owes you anything",
    date: d.getFullYear()+"-"+ms+"-"+ds,
    content: "That's something I've been telling myself often lately.\nI find that most of the times I'm upset, it is because a part of me feels like I'm owed.\nWheter that part of me is right or not is completely irrelevant. Especially because the person that might owe me is almost always going have, at least in part, a different opinion. So if I want to keep my piece of mind, I might as well operate under the assumption that I'm not owed at all.\n\nAll of this is not to say I don't ask for what I'm owed. I always ask. Even when I'm almost sure of the upcoming rejection. Even when I know I'm going to run into a solid no.\nThis is an example of 'double think'. Telling myself no one owes me anything gives me peace of mind, but it does not affect my actions.\nHope this makes sense to you, cheers.",
}
export default post20221016;