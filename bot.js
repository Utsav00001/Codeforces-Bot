import { Client, Intents , MessageEmbed}  from 'discord.js';
import Discord from 'discord.js'
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
import keepAlive from './server.js'
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

if(!message.content.startsWith('cfRating')) return;

const embed = new Discord.MessageEmbed().setColor(0x3498DB).setTitle('CF Rating');
const data=message.content.split('-');
var f=0;
console.log(data);
data.forEach(async cur=>{
  if(f===0){
    f=f+1
  }
  else{
const priyanshuUserData=await fetch(`https://codeforces.com/api/user.info?handles=${cur}`).then(res => res.json());
const priyanshuRating=priyanshuUserData.result[0].rating;
console.log(priyanshuRating);
// embed.addField("Country", 'temp',false)

embed.addField(`${cur}`, `[${priyanshuRating}](https://codeforces.com/profile/${cur})`,false);

// message.channel.send({embeds: [embed]})


  }
})


setTimeout(function(){ message.channel.send({ embeds: [embed] }); }, 3000);
// message.channel.send({ embeds: [embed] });

});





client.on('messageCreate',async message=>{
if(message.author.bot) return;
// console.log(message);

if(!message.content.startsWith('cfContest')) return;

// take contest id and find number of problem solved and standings in the contest
const contestID=message.content.split('-')[1];
const data=message.content.split('-');
var temp=0;
const embed = new Discord.MessageEmbed().setTitle(`CF Rank In Contest ${contestID}`).setColor(0x3498DB)
data.forEach(async cur=>{
  if( temp===0 || temp===1)
  {
    temp=temp+1;
  }
  else{
const handle=cur;
const priyanshuContestData=await fetch(`https://codeforces.com/api/user.rating?handle=${handle}`).then(response => response.json());
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

embed.addField(`${handle}`, `[${priyanshuRank}](https://codeforces.com/profile/${handle})`,false)
  }
})



setTimeout(function(){ message.channel.send({ embeds: [embed] }); }, 3000);
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

if(!message.content.startsWith('problemsData')) return;
// https://codeforces.com/api/user.status?handle=priyanshu619
// number of a,b,c,d,e,f solved in graph form
const handle=message.content.split('-')[1];

const priyanshuData=await fetch(`https://codeforces.com/api/user.status?handle=${handle}`).then(response => response.json());
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




client.on('messageCreate',async message=>{
if(message.author.bot) return;
// console.log(message);

if(!message.content.startsWith('problemsRating')) return;
// https://codeforces.com/api/user.status?handle=priyanshu619
// number of a,b,c,d,e,f solved in graph form
const handle=message.content.split('-')[1];

const priyanshuData=await fetch(`https://codeforces.com/api/user.status?handle=${handle}`).then(response => response.json());
const priyanshuQuestions=priyanshuData.result;
var a800=0;
var a900=0;
var a1000=0;
var a1100=0;
var a1200=0;
var a1300=0;
var a1400=0;
var a1500=0;
var a1600=0;
var a1700=0;
var a1800=0;
var a1900=0;
var a2000=0;
priyanshuQuestions.forEach(cur=>{
if(cur.problem.rating===800 && cur.verdict==='OK') a800++;
else if(cur.problem.rating===900 && cur.verdict==='OK') a900++;
else if(cur.problem.rating===1000 && cur.verdict==='OK') a1000++;
else if(cur.problem.rating===1100 && cur.verdict==='OK') a1100++;
else if(cur.problem.rating===1200 && cur.verdict==='OK')a1200++; 
else if(cur.problem.rating===1300 && cur.verdict==='OK')a1300++; 
else if(cur.problem.rating===1400 && cur.verdict==='OK')a1400++; 
else if(cur.problem.rating===1500 && cur.verdict==='OK')a1500++; 
else if(cur.problem.rating===1600 && cur.verdict==='OK')a1600++; 
else if(cur.problem.rating===1700 && cur.verdict==='OK')a1700++; 
else if(cur.problem.rating===1800 && cur.verdict==='OK')a1800++;
else if(cur.problem.rating===1900 && cur.verdict==='OK')a1900++;
else if(cur.problem.rating===2000 && cur.verdict==='OK') a2000++;

})
// console.log(a,b,c,d,e);
// console.log(a+b+c+d+e)

const chart = new QuickChart();
chart.setConfig({
  type: 'bar',
  data: { labels: ['2000' , '1900' ,'1800','1700','1600','1500' , '1400','1300','1200', '1100','1000','900','800'], datasets: [{ label: 'Problems Solved', data: [a2000,a1900,a1800,a1700,a1600,a1500,a1400,a1300,a1200,a1100,a1000,a900,a800] }] },
});
const url = await chart.getShortUrl();
message.channel.send(`Here's the chart you requested: ${url}`);

});






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
  data: { labels: ['E', 'D','C','B','A'], datasets: [{ label: 'Problems Solved', data: [e,d,c,b,a] }] },
});
const url = await chart.getShortUrl();
message.channel.send(`Here's the chart you requested: ${url}`);

});





client.on('messageCreate',async message=>{
if(message.author.bot) return;
// console.log(message);

if(!message.content.startsWith('userInfo')) return;

const handle=message.content.split('-')[1];
const rANK_COLOR = {
    newbie: [128, 128, 128],
    pupil: [35, 145, 35],
    specialist: [37, 180, 171],
    expert: [0, 0, 255],
    candidate_master: [170, 0, 170],
    master: [255, 140, 0],
    international_master: [255, 140, 0],
    grandmaster: [255, 0, 0],
    international_grandmaster: [255, 0, 0],
    legendary_grandmaster: [255, 0, 0],
    headquarters: [0, 0, 0],
};
console.log(rANK_COLOR.newbie);

const priyanshuData=await fetch(`https://codeforces.com/api/user.info?handles=${handle}`).then(response => response.json());
const priyanshuInfo=priyanshuData.result[0];
// console.log(priyanshuInfo)
const temp=priyanshuInfo.rank;
console.log(temp); 
const color=rANK_COLOR[temp];
console.log(color)

function ColorToHex(color) {
  var hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function ConvertRGBtoHex(red, green, blue) {
  return "0x"+ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}
console.log(ConvertRGBtoHex(255, 100, 200));
const colorCode=ConvertRGBtoHex(color[0], color[1], color[2]);


const embed = new Discord.MessageEmbed().setColor(colorCode).setTitle(`${priyanshuInfo.firstName} ${priyanshuInfo.lastName}`)
embed
.setAuthor(`${priyanshuInfo.handle}`, `${priyanshuInfo.titlePhoto}`, `https://codeforces.com/profile/${priyanshuInfo.handle}`)
// .setImage(`${priyanshuInfo.titlePhoto}`)
// .addField("Name", `${priyanshuInfo.firstName} ${priyanshuInfo.lastName}`,false)
.addField("Rating", `${priyanshuInfo.rating}`,false)
.addField("Rank", `${priyanshuInfo.rank}`,false)
.addField("Country", `${priyanshuInfo.country}`,false)
.addField("City", `${priyanshuInfo.city}`,true)



const priyanshuq=await fetch(`https://codeforces.com/api/user.status?handle=${handle}`).then(response => response.json());
const priyanshuQuestions=priyanshuq.result;
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
  data: { labels: ['E', 'D','C','B','A'], datasets: [{ label: 'Problems Solved', data: [e,d,c,b,a] }] },
});
const url = await chart.getShortUrl();


message.channel.send({ embeds: [embed] });
message.channel.send(`${url}`);


});





client.on('messageCreate',async message=>{
if(message.author.bot) return;
// console.log(message);

if(message.content!='upcomingContests') return;


const contests=await fetch('https://codeforces.com/api/contest.list?gym=false').then(res=>res.json()) 
const contestData=contests.result;
var ans=[];
var f=0;
contestData.forEach(cur=>{
  if(cur.relativeTimeSeconds<0){
ans.push({"name":cur.name,"time":cur.relativeTimeSeconds});
  } 
  else return;
})
// console.log(ans);
ans.reverse();

const embed = new Discord.MessageEmbed().setColor(0x3498DB).setTitle('Upcoming Contests');
embed.setThumbnail('https://codeforces.org/s/29643/images/codeforces-logo-with-telegram.png')

ans.forEach(cur=>{
var d = new Date(Date.now() +Math.abs(cur.time)*1000);
var ti=d.toString().slice(0,24);
embed.addField(`${cur.name}`,`${ti}`,false)

})


message.channel.send({ embeds: [embed] });

});




client.on('messageCreate',async message=>{
if(message.author.bot) return;
// console.log(message);

if(message.content!='runningContests') return;


const contests=await fetch('https://codeforces.com/api/contest.list?gym=false').then(res=>res.json()) 
const contestData=contests.result;
var ans=[];
var f=0;
contestData.forEach(cur=>{
  if(cur.relativeTimeSeconds>0){
  if((cur.durationSeconds-cur.relativeTimeSeconds)>0){
ans.push({"name":cur.name,"time":cur.relativeTimeSeconds});
f=1;
  } 
  }
  else return;
})
// console.log(ans);
// ans.reverse();
const embed = new Discord.MessageEmbed().setColor(0x3498DB).setTitle('Running Contests');
embed.setThumbnail('https://codeforces.org/s/29643/images/codeforces-logo-with-telegram.png')
if(f===1){
  console.log("1")

ans.forEach(cur=>{
var d = new Date(Date.now()-cur.time*1000);
console.log(d);
var ti=d.toString().slice(0,24);
console.log(ti);
embed.addField(`${cur.name}`,`${ti}`,false)

})
}
else{ console.log("0");
embed.addField('NO Contest is Running','_',false)
}



message.channel.send({ embeds: [embed] });

});








keepAlive();
client.login(token);