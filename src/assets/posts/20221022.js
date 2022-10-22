const d=new Date("2022-10-22");
const m=d.getMonth()+1;
var addZero=m < 10;
const ms= (addZero ? '0' : '') + m.toString();
addZero=d.getDate()<10
var ds;
if(addZero)
    ds= '0'+d.getDate().toString();
else
    ds=d.getDate().toString();
const post20221022 = {
    key: 13,
    title: "21",
    date: d.getFullYear()+"-"+ms+"-"+ds,
    content: "I am obsessed with time\nWe all only have a finite number of years to live, and my birthday is always a reminder of how small that number is.\nI used to get overwhelmed by the shortness of life. But I haven't felt that way during the past months.\nI am using the little time I have, fully.\nI am doing exactly what I want to do with it.\nWhen I think about time now, I can't help but get a grin on my face.\nI am in control of my time.\nI am sitting in the driver's sear, and I am going so fucking fast.",
}
export default post20221022;