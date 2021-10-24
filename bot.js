import { Client, Intents , MessageEmbed}  from 'discord.js';
import Discord from 'discord.js'
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
// import keepAlive from './server.js'
import fetch from "node-fetch";
const token = process.env['token'];
import terminalLink from 'terminal-link';
import QuickChart from 'quickchart-js';

const getData=async()=>{
  const priyanshu = await fetch('https://codeforces.com/api/user.status?handle=priyanshu619&from=1&count=100').then(response => response.json());
		const priyanshucp=priyanshu.result;
    var temp=0;
    // console.log(priyanshu);
    var seconds = new Date().getTime() / 1000;
console.log(seconds);
    priyanshucp.forEach(one=>{
      if(one.verdict==='OK' && one.creationTimeSeconds>=seconds-604800) temp++;
    })
    console.log(temp);
    // await interaction.reply(`Priyanshu : ${temp}`);
    const aditya = await fetch('https://codeforces.com/api/user.status?handle=apcc_25&from=1&count=50').then(response => response.json());
		const adityacp=aditya.result;
    var temp1=0;
    // console.log(aditya);
    var seconds = new Date().getTime() / 1000;
console.log(seconds);
    adityacp.forEach(one=>{
      if(one.verdict==='OK' && one.creationTimeSeconds>=seconds-604800) temp1++;
    })
    console.log(temp1);
    // await interaction.reply(`Priyanshu : ${temp}   Aditya : ${temp1}`);
    const unnati = await fetch('https://codeforces.com/api/user.status?handle=unnati19&from=1&count=50').then(response => response.json());
		const unnaticp=unnati.result;
    var temp2=0;
    // console.log(unnati);
    var seconds = new Date().getTime() / 1000;
console.log(seconds);
    unnaticp.forEach(one=>{
      if(one.verdict==='OK' && one.creationTimeSeconds>=seconds-604800) temp2++;
    })
    console.log(temp2);

    const sanjeev = await fetch('https://codeforces.com/api/user.status?handle=krsanjeev196&from=1&count=50').then(response => response.json());
		const sanjeevcp=sanjeev.result;
    var temp3=0;
    // console.log(sanjeev);
    var seconds = new Date().getTime() / 1000;
console.log(seconds);
    sanjeevcp.forEach(one=>{
      if(one.verdict==='OK' && one.creationTimeSeconds>=seconds-604800) temp3++;
    })
    console.log(temp3);

const ambuj = await fetch('https://codeforces.com/api/user.status?handle=ambuj6009&from=1&count=50').then(response => response.json());
		const ambujcp=ambuj.result;
    var temp4=0;
    // console.log(ambuj);
    var seconds = new Date().getTime() / 1000;
console.log(seconds);
    ambujcp.forEach(one=>{
      if(one.verdict==='OK' && one.creationTimeSeconds>=seconds-604800) temp4++;
    })
    console.log(temp4);

    const rudra = await fetch('https://codeforces.com/api/user.status?handle=rudra2901&from=1&count=50').then(response => response.json());
		const rudracp=rudra.result;
    var temp5=0;
    // console.log(rudra);
    var seconds = new Date().getTime() / 1000;
console.log(seconds);
    rudracp.forEach(one=>{
      if(one.verdict==='OK' && one.creationTimeSeconds>=seconds-604800) temp5++;
    })
    console.log(temp5);


    return [
temp,temp1,temp2,temp3,temp4,temp5
    ]
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('messageCreate',async message=>{
if(message.author.bot) return;
// console.log(message);

if(message.content!='cfbot') return;

const fulldata= await getData();


var temp=fulldata[0];
var temp1=fulldata[1];
var temp2=fulldata[2];
var temp3=fulldata[3];
var temp4=fulldata[4]; 
var temp5=fulldata[5];
const embed = new Discord.MessageEmbed().setTitle('CF sub count').setColor(0x3498DB)
embed.addField("Priyanshu", `[${temp}](https://codeforces.com/profile/priyanshu619)`,true).addField("Aditya",`[${temp1}](https://codeforces.com/profile/apcc_25)`,true)

embed.addField("Unnati", `[${temp2}](https://codeforces.com/profile/unnati19)`,true).addField("Sanjeev", `[${temp3}](https://codeforces.com/profile/krsanjeev196)`,true).addField("Ambuj", `[${temp4}](https://codeforces.com/profile/ambuj6009)`,true).addField("Rudra", `[${temp5}](https://codeforces.com/profile/rudra2901)`,true)



console.log(embed.title)
message.channel.send({ embeds: [embed] });

});






client.on('messageCreate',async message=>{
if(message.author.bot) return;
// console.log(message);

if(message.content!='cfrating') return;

const priyanshuUserData=await fetch('https://codeforces.com/api/user.info?handles=priyanshu619').then(response => response.json());
const priyanshuRating=priyanshuUserData.result[0].rating;
console.log(priyanshuRating);



const embed = new Discord.MessageEmbed().setTitle('CF Rating').setColor(0x3498DB)
embed.addField("Priyanshu", `[${priyanshuRating}](https://codeforces.com/profile/priyanshu619)`,true)
// .addField("Aditya",`[${temp1}](https://codeforces.com/profile/apcc_25)`,true)

// embed.addField("Unnati", `[${temp2}](https://codeforces.com/profile/unnati19)`,true).addField("Sanjeev", `[${temp3}](https://codeforces.com/profile/krsanjeev196)`,true).addField("Ambuj", `[${temp4}](https://codeforces.com/profile/ambuj6009)`,true).addField("Rudra", `[${temp5}](https://codeforces.com/profile/rudra2901)`,true)

message.channel.send({ embeds: [embed] });

});




client.on('messageCreate',async message=>{
if(message.author.bot) return;
// console.log(message);

if(!message.content.startsWith('cflastcontest')) return;
const contestID=message.content.split(' ')[1];
const priyanshuContestData=await fetch('https://codeforces.com/api/user.rating?handle=priyanshu619').then(response => response.json());
// console.log(priyanshuContestData);
const priyanshuContestRank=priyanshuContestData.result;
console.log(priyanshuContestRank[priyanshuContestRank.length-1].contestId);
console.log(contestID);
var priyanshuRank;
if(parseInt(priyanshuContestRank[priyanshuContestRank.length-1].contestId)===parseInt(contestID)){
 priyanshuRank=priyanshuContestRank[priyanshuContestRank.length-1].rank;
}else{
  priyanshuRank="NOT GIVEN"
}
console.log(priyanshuRank)



const embed = new Discord.MessageEmbed().setTitle(`CF Rank In Contest ${contestID}`).setColor(0x3498DB)
embed.addField("Priyanshu", `[${priyanshuRank}](https://codeforces.com/profile/priyanshu619)`,true)
// .addField("Aditya",`[${temp1}](https://codeforces.com/profile/apcc_25)`,true)

// embed.addField("Unnati", `[${temp2}](https://codeforces.com/profile/unnati19)`,true).addField("Sanjeev", `[${temp3}](https://codeforces.com/profile/krsanjeev196)`,true).addField("Ambuj", `[${temp4}](https://codeforces.com/profile/ambuj6009)`,true).addField("Rudra", `[${temp5}](https://codeforces.com/profile/rudra2901)`,true)

message.channel.send({ embeds: [embed] });

});





client.on('messageCreate',async message=>{
if(message.author.bot) return;
// console.log(message);

if(!message.content.startsWith('cfContest')) return;

// take contest id and find number of problem solved and standings in the contest
const contestID=message.content.split(' ')[1];


const priyanshuContestData=await fetch('https://codeforces.com/api/user.rating?handle=priyanshu619').then(response => response.json());
// console.log(priyanshuContestData);
const priyanshuContestRank=priyanshuContestData.result;
var priyanshuRank;

var f=0;
priyanshuContestRank.forEach(cur=>{
  if(parseInt(contestID)===parseInt(cur.contestId))
  {
    priyanshuRank=cur.rank;
    f=1;
    // break; 
  }
})
console.log(f);
if(f===0) priyanshuRank="NOT GIVEN";

console.log(priyanshuRank)


const embed = new Discord.MessageEmbed().setTitle(`CF Rank In Contest ${contestID}`).setColor(0x3498DB)
embed.addField("Priyanshu", `[${priyanshuRank}](https://codeforces.com/profile/priyanshu619)`,true)
// .addField("Aditya",`[${temp1}](https://codeforces.com/profile/apcc_25)`,true)

// embed.addField("Unnati", `[${temp2}](https://codeforces.com/profile/unnati19)`,true).addField("Sanjeev", `[${temp3}](https://codeforces.com/profile/krsanjeev196)`,true).addField("Ambuj", `[${temp4}](https://codeforces.com/profile/ambuj6009)`,true).addField("Rudra", `[${temp5}](https://codeforces.com/profile/rudra2901)`,true)

message.channel.send({ embeds: [embed] });
});






// client.on('messageCreate',async message=>{
// if(message.author.bot) return;
// // console.log(message);

// if(!message.content.startsWith('cfContest')) return;
// // number of contest given in last month
// });




client.on('messageCreate',async message=>{
if(message.author.bot) return;
// console.log(message);

if(message.content!='solvedDataPriyanshu') return;
// https://codeforces.com/api/user.status?handle=priyanshu619
// number of a,b,c,d,e,f solved in graph form

const priyanshuData=await fetch('https://codeforces.com/api/user.status?handle=priyanshu619').then(response => response.json());
const priyanshuQuestions=priyanshuData.result;
var a=0;
var b=0;
var c=0;
var d=0;
var e=0;
priyanshuQuestions.forEach(cur=>{
if(cur.problem.index==='A' && cur.verdict==='OK') a++;
else if(cur.problem.index==='B' && cur.verdict==='OK') b++;
else if(cur.problem.index==='C' && cur.verdict==='OK') c++;
else if(cur.problem.index==='D' && cur.verdict==='OK') d++;
else if(cur.problem.index==='E' && cur.verdict==='OK')e++; 
})
console.log(a,b,c,d,e);
console.log(a+b+c+d+e)

const chart = new QuickChart();
chart.setConfig({
  type: 'bar',
  data: { labels: ['E', 'D','C','B','A'], datasets: [{ label: 'Foo', data: [e,d,c,b,a] }] },
});
const url = await chart.getShortUrl();
message.channel.send(`Here's the chart you requested: ${url}`);

});








// keepAlive();
client.login(token);