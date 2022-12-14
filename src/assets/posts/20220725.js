const d=new Date("2022-07-25");
const m=d.getMonth()+1;
var addZero=m < 10;
const ms= (addZero ? '0' : null) + m.toString();
addZero=d.getDate()<10
var ds;
if(addZero)
    ds= '0'+d.getDate().toString();
else
    ds=d.getDate().toString();
const post20220725 = {
    key: 3,
    title: "The stand-up comedy nights",
    date: d.getFullYear()+"-"+ms+"-"+ds,
    content: "I had walked past big and small, expensive, and very expensive cafés and bars before reaching my destination. There wasn't even a counter, just some tables on the side of a very rectangular room, and a door, possibly taking you to the kitchen. I sat down with the people from the meet-up and after chatting for sometime, the host, Anna, took us upstairs, where the show would be. Shaped exactly like the one downstairs, the room was tightly filled with rows of 3 chairs on each side.\nIt was my first comedy show, the first rows where empty, so I and two girls who I had met downstairs sat in the first row, I have mixed feelings about that decision.\nI did not know stand-up comedians interacted so much with the audience, it was more than enough to give me stage fright. So after an hour of extreme self-awareness, an hilarious show, and too many unfortunate answers to the teasing of the comedians, everyone got up and left.\nThe 3rd comedian, an extremely talented american, was hanging out by the stairs. I paid him some compliments about his show, and got to talking with the group. It was a group of 6 people, and we decided to look for a place to get something to drink.\nWe talked about all the things people talk about when they first meet, with some sparks of interesting conversation here and there. We all really enjoyed each other's company and agreed to see each other the night after, as Alexander was going to do another show.\nThe following night was also fun, I spent it with very different people. After the show the same things happened. I ended up sitting in front of, and next to, two ladies, both stand-up comedians, both somewhere between their late 30s and their early 40s. I liked neither of them. During the little time I got to spend with them, they complained for most of it, about various things. My opinion is that it's okay to dislike people, but that shouldn't prevent you from learning something out of them. You obviously can't do that if you let your dislike for them show too much.\nA very cool lesson I learned from those days is that you can make anything funny. Allow your mind to be free to create, or partially create funny stuff out of normal scenarios, and you never know what might come of it. Life also makes it pretty easy, I don't know about you but funny things happen to me all the time, you just need to see them from the right perspective.",
}
export default post20220725;