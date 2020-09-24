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
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    if(command === "서버정보"){
        message.channel.send({ embed: exampleEmbed });
        message.channel.send(`서버명 : ${message.guild.name}\n인원 : ${message.guild.memberCount}`);
    }else if(command === "내정보"){
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


const exampleEmbed = {
	color: 0x0099ff,
	title: '혜성봇 서버 조사 보고서',
	author: {
		name: '혜성봇#3150',
		icon_url: './혜성봇.jpg',
		url: 'https://discordapp.com/oauth2/authorize?client_id=756728393839411281&scope=bot&permissions=8',
	},
	description: 'Some description here',
	thumbnail: {
		url: 'https://i.imgur.com/wSTFkRM.png',
	},
	fields: [
		{
			name: 'Regular field title',
			value: 'Some value here',
		},
		{
			name: '\u200b',
			value: '\u200b',
			inline: false,
		},
		{
			name: 'Inline field title',
			value: 'Some value here',
			inline: true,
		},
		{
			name: 'Inline field title',
			value: 'Some value here',
			inline: true,
		},
		{
			name: 'Inline field title',
			value: 'Some value here',
			inline: true,
		},
	],
	image: {
		url: 'https://i.imgur.com/wSTFkRM.png',
	},
	timestamp: new Date(),
	footer: {
		text: 'develop by 호두과자#8981',
		icon_url: './호두과자.jpg',
	},
};

client.login(token);
//https://discordapp.com/oauth2/authorize?client_id=756728393839411281&scope=bot&permissions=8

