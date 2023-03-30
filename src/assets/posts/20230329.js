const d = new Date("2023-03-29");
const m = d.getMonth() + 1;
var addZero = m < 10;
const ms = (addZero ? '0' : '') + m.toString();
addZero = d.getDate() < 10
var ds;
if (addZero)
    ds = '0' + d.getDate().toString();
else
    ds = d.getDate().toString();
const post20230329 = {
    key: 22,
    title: "Life Experience",
    date: d.getFullYear() + "-" + ms + "-" + ds,
    content: "I was just talking on the phone to a dear friend, his name is Simone, he is really an exceptional human being. He just told me about a life changing experience he had.\nThe experience was so huge, and he is such a good storyteller that the experience moved me, despite being told over the phone.\nI felt the emotion in his voice, but mostly, I felt his wisdom.\nI felt the amount of thought he had dedicated to this particular experience, and I felt the change that brought had upon him.\nThis reminded me of the importance of learning from our own life experience. I say ‘our own’ because for as much as his story touched me, and taught me many things, I know I haven’t gotten as much out of it as he did, for obvious reasons.\nThat also led me to think about my own life experience.\nPeople are often surprised when I tell them I’m 21. Sometimes I am too.\nWhen I look back at my life so far I can not help but feel that it’s too much.\nI notice most people often go back to the same few stories, the ones that really made them. The ones that had a big impact on the people they are. I see the fullness of my life so far in the amount of lessons I learned about myself from such a broad range of experiences, and while I am grateful for it, I sometimes fear that it’s too much.\nI don’t know if I fear that the future will not be able to keep up to the same standard, or that I simply will not have enough space for all the memories that await me, and I will be forced to forget some things.\nI don’t want to forget.\nI wish I could keep all of it, and get more and more life experience.\nI wonder what adults do. Do they just erase old learnings? And as a consequence end up relearning the same things in a cycle over and over again?\nThat possibility scares me.\nI realize how silly this is. I’m very grateful for all that I’ve gotten to live so far, and I’m sure my mind will be able to keep the most important things from past experiences.\nIn the end no matter how complicated the experience, the things learned are usually pretty simple.\nNo matter how complicated the input, the output of the function will still be a finite number of values, kind of like a hash function.\nGiven the same input we will get the same output, but what I find most interesting is the collisions:\nThose weird and unlikely cases where a different input will produce the same output, just like a different experience can teach the same thing.\nThat is a funny thing that happens to me.\nWhenever I meet smart people and have good conversations with them, I find that the conclusions they arrived at, and the things they learned are usually pretty similar to the ones I learned, even though their experience, their input, was drastically different.\nOr maybe that’s just the reason why I consider them smart. Who knows.",
}
export default post20230329;