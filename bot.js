import { Client, Intents , MessageEmbed}  from 'discord.js';
import Discord from 'discord.js'
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
// import keepAlive from './server.js'
import fetch from "node-fetch";
const token = process.env['token'];
import terminalLink from 'terminal-link';

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




// keepAlive();
client.login(token);