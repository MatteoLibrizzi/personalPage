const d=new Date("2022-07-17");
const m=d.getMonth()+1;
var addZero=m < 10;
const ms= (addZero ? '0' : null) + m.toString();
addZero=d.getDate()<10
var ds;
if(addZero)
    ds= '0'+d.getDate().toString();
else
    ds=d.getDate().toString();
const post20220717 = {
    key: 2,
    title: "Small Paris",
    date: d.getFullYear()+"-"+ms+"-"+ds,
    content: "I was walking around Paris on a friday night. It was roughly 8pm. As the sun was setting, the air became clearer, giving the view from Pont de la Tournelle a dreamy look one can only hope to see with its own eyes.\nI kept walking for 10 minutes when I heard a voice calling my name. It was this Tunisian guy I met at a picnic 2 nights before, he was the organizer, and had made me feel very welcome. I'd later be reminded of his name: Mohamed. He was hanging out with two women, one of whom I had met at the picnic.\nThe world is so random, but somethings seem just too unlikely to be plain and simple coincidences.\nWe talked for a while, Mohamed was very smoothly trying to create simple conversations that could include me and my terrible french, then they told me they were going to go dance, and I was welcome to join.\nI normally dislike discos, so the question as to whether I was going to pay some crazy amount for the entrance to a parisian discotheque popped in my mind, I quickly the decided I wasn't going to, had that been the case.\nIt took a couple of minutes of walking to reach the place. The big crowd of people was the first thing I noticed. There was a semicircle of steps interrupted by the river. There was a lot of flat space inside the semicircle, not that you could see it, the dancing crowd was making good use of it. That place was made to allow boats to tie up, but thanks to its structure the acoustic was amazing. That beautiful dancing mass made the original goal seem worthless.\nWe walked past the first dancing semicircle. And stopped at the next one. They were playing salsa music. Mohamed indulged me to find a girl to dance with. I asked a tall blonde girl, she hesitantly said yes. I was awful, but she carried me through a dance. As I was going back to where the others were sitting, a girl asked me if I wanted to dance, that was a first.\nThis game of asking and dancing went on for a couple of hours, with a couple of rejection in between, I could not have cared less.\nAt some point I stopped, and stepped out of the semicircle to look around. It had gotten dark. I looked down at the dance floor, and saw this unique body of people, united in this rhythm that went 'uno dos tres ... uno dos tres', you couldn't help but feel the energy it radiated. Out of the blue, an incredible high of positive emotions, I chuckled as I kept looking at that moving body.\nWalking around I noticed there four semicircles in total, all of them were being put to use.\nI was hesitant to leave, similar to surfing, before going out of the water, you always want one last wave. I danced once more, and said goodbye, 'Je pars, bonne nuit'. I walked to the metro as a huge yellow moon rose from behind notre dame.\nI really want to learn to dance.",
}
export default post20220717;