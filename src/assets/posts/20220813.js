const d=new Date("2022-08-13");
const m=d.getMonth()+1;
var addZero=m < 10;
const ms= (addZero ? '0' : null) + m.toString();
addZero=d.getDate()<10
var ds;
if(addZero)
    ds= '0'+d.getDate().toString();
else
    ds=d.getDate().toString();
const post20220813 = {
    key: 5,
    title: "A bike the road and I",
    date: d.getFullYear()+"-"+ms+"-"+ds,
    content: "Could easily be the title of a country song.\nFrench love bikes so much that everywhere I've been there was always a way to get one cheaply or even for free.\nThe first trip was with Claudio, who unwillingly accompanied me to Etretat, a very touristic but gorgeous place. We biked for 3 hours to get there, stayed a couple of hours, and came back.\nWhen Claudio left I went to Honfleur, crossing the Pont de Normandie. Got a couple of runner's high on the way, which was weird, I usually only get them when I run.\nHere in Caen I finally have a good bike, it's very light and allows me to go incredibly fast. Yesterday I went to Cabourg (60k). Today I followed 'la route verte suisse normande' and some more (50k). And tomorrow I'm going to bike for 80k passing all the biggest beaches of normandy, where the invasion of normandy happened.\nDoes it feel good all the time? Fuck no. I couldn't wait to be home on the way back today. But I just love spending time in a flow state. There is nothing more relaxing to me then doing a mindless activity for hours and hours, your mind goes all over the place. It provides a great excuse for introspection, which is very important to me.\nMost people can't stand the thought of being bythemselves in silence, they need to fill that void with music, podcasts, other people. I partly do what I do to try to distance myself as much as possible from that. Every human should be comfortable in their own headspace, but all this probably deserves another post.\nI have been meeting so many bike travelers the idea of doing it myself is starting to sound exciting. I'm writing it just to make it more real. How great would it be to cycle back from Paris to Palermo? I don't know if it will even be possible with my university and work schedule, but it's just an idea for the end of the semester.",
}
export default post20220813;