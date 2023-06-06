const d = new Date("2023-06-06");
const m = d.getMonth() + 1;
var addZero = m < 10;
const ms = (addZero ? '0' : '') + m.toString();
addZero = d.getDate() < 10
var ds;
if (addZero)
    ds = '0' + d.getDate().toString();
else
    ds = d.getDate().toString();
const post20230606 = {
    key: 24,
    title: "My lack of balance",
    date: d.getFullYear() + "-" + ms + "-" + ds,
    content: "I am an addict.\nIt’s just part of who I am. But I wear it on my sleeve, the lower part to be exact.\nBecause of this I talk to people about their addictions quite often.\nWhether it’s alcohol, drugs, food, smoking, or social media I find that lots of people can relate.\nI am not a guru of any kind, I don’t know how to make people get their addiction under control, all I can do is hear their experience, and tell them mine.\n.\nAs a kid I felt different, I’m not sure if I really was, but I felt ashamed of that.\nI just wanted to belong, and be like everyone else.\nNow I don’t feel like that as much, I’m proud of what makes me different from most people.\nI’m proud to tell them I don’t drink, because I have an addictive personality. And that is often the first thing they learn about me, because I meet new people in bars.\nI’m proud to tell them I’m not on instagram, because I used to spend too much time on it, when they ask me to keep in touch. So I give them my number.\nI’m proud of many other things that allow me to stay in control of my addictive personality.\n.\nA friend of mine called recently and amongst other things we talked about the human tendency towards addiction.\nI struggled to figure out what worked for me, but then as we talked the answer came almost naturally.\nI realized the only reason I was able to quit my addictive behaviors was to be proud of them.\nTo be proud of my addictions, and be proud of my fight against them.\nBelieve me, most people will understand what you are talking about, and those that don’t simply have not explored themselves deep enough.",
}
export default post20230606;