const fs = require('fs');
const Discord = require("discord.js");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const { call, prefix, token } = require("./config.json");
const { Server } = require('http');
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
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    if(command == "도움말"){
        message.author.send("규카츠 먹고 싶다");
    }
    if(command === "유저정보"){
        if(!message.mentions.users.size){
            return message.reply("이 명령어는 유저를 태그해야 할것 같습니다.");
        }
        const taggeduser = message.mentions.users.first();
        client.commands.get(command).execute(message, args, taggeduser);
        message.channel.send(`당신의 별명 : ${message.author.username}\n당신의 ID : ${message.author.id}`);
    }else if(command === "naga"){
        if(!message.mentions.users.size){
            return message.reply("해당 유저가 태그 되지 않은것 같습니다.");
        }
        const taggeduser = message.mentions.users.first();
        message.channel.send(`${taggeduser.username}님을 진짜로 추방하겠습니까?`);
    }else if(command === '프사'){
        if(!message.mentions.users.size){
            return message.channel.send(`프사인데요 <${message.author.displayAvatarURL({fomat : "png", dynamic: true})}>`)
        }else{
            const taggeduser = message.mentions.users.first();
            return message.channel.send(`${taggeduser.username}님의 프사인데요 <${taggeduser.displayAvatarURL({fomat : "png", dynamic: true})}>`)
        }
    }else{ 
        if(!client.commands.has(command)) return;
        try{
            client.commands.get(command).execute(message, args);
        }catch(error){
            console.log(error);
            message.reply("흠... 명령어를 잘못 입력된것 같습니다");
        }
    }
});


client.login(token);
//https://discordapp.com/oauth2/authorize?client_id=756728393839411281&scope=bot&permissions=8

