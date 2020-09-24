const fs = require('fs');
const Discord = require("discord.js");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const { call, prefix, token } = require("./config.json");


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log("혜성봇 켜졌습니다");
    client.user.setActivity("빛나기");
});
client.on('disconnect', () => {
    console.log(client.user.tag + " 퇴근합니다!");
});

client.on('message', (message) => {
    
    if(message.content === `${call}`) message.channel.send(`네 부르셨습니까? ${message.author.username}님?`);
    if(message.author.bot || !message.content.startsWith(prefix)) return; 
    const args = message.content.slice(prefix.length).trim().split('/ +/');
    const command = args.shift().toLowerCase();
    if(command === "안녕"){
        client.commands.get('hello').execute(message, args);
    }else if(command === "서버정보"){
        client.commends.get('serverInfo').execute(message, args);
    }else if(command === "내 정보"){
        client.commands.get('myInfo').execute(message, args);
        message.channel.send(`당신의 별명 : ${message.author.username}\n당신의 ID : ${message.author.id}`);
    }else if(command === "naga"){
        message.channel.get('NAGA').execute(message, args);
        if(!message.mentions.users.size){
            return message.reply("해당 유저가 태그 되지 않은것 같습니다.");
        }
        const taggeduser = message.mentions.users.first();
        message.channel.send(`${taggeduser.username}님을 진짜로 추방하겠습니까?`);
    }else if(command === '프사'){
        message.channel.get('profilePic').execute(message, args);
        if(!message.mentions.users.size){
            return message.channel.send(`프사인데요 <${message.author.displayAvatarURL({fomat : "png", dynamic: true})}>`)
        }else{
            const taggeduser = message.mentions.users.first();
            return message.channel.send(`${taggeduser.username}님의 프사인데요 <${taggeduser.displayAvatarURL({fomat : "png", dynamic: true})}>`)
        }
    }else{
        message.channel.send("없는 명령어입니다");
    }
});


client.login(token);
//https://discordapp.com/oauth2/authorize?client_id=756728393839411281&scope=bot&permissions=8