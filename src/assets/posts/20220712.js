const d=new Date("2022-7-12");
const m=d.getMonth()+1;
const addZero=m < 10;
const ms= (addZero ? '0' : null) + m.toString();
console.log("aaa"+ms);
const post20220712 = {
    key: 11,
    title: "Why ?",
    date: d.getFullYear()+"-"+ms+"-"+d.getDate(),
    content: "Why do I do what I do?\nI feel like that's the first question you should ask yourselves no matter what.\nI have an ordered set of priorities which allow me to 'easily' make major life decisions within a few minutes.\nThe first priority is: Life Experience That's what I chase.\nI'm at Palermo's airport, sitting in front of gate 15, the monitor says I'm going to Paris, so it must be true. This is not my first solo travel, but it will be the longest. I remember the fear of being alone the first time I jumped on a plane to Barcelona by myself.\nI still feel that fear but I've grown to be used to it. That fear is my compass, I believe it has and will guide me towards great life experiences, and that's the reason I follow it, that's my chase.\nThat's why.",
}
export default post20220712;