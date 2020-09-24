const Discord = require("discord.js");

module.exports = {
    name : '유저정보',
    description : '유저정보 출력',
    execute(message, args, tag){
        const serverInfo = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('혜성봇 조사 보고서')
        .setURL('https://github.com/cropMr/Hyesung')
        .setAuthor('혜성봇#3150', 'https://imgur.com/Slc6oNo.jpg', 'https://discordapp.com/oauth2/authorize?client_id=756728393839411281&scope=bot&permissions=8')
        .setDescription(`${message.author.username}` + "님이 요청한 서버조사 결과입니다")
        .setThumbnail(`<${tag.displayAvatarURL({fomat : "png", dynamic: true})}>`)
        .addFields(
            { name: '이름', value: `${tag.username}  `, inline: false},
            { name: '이름', value: `${tag.username}  `, inline: false},
        )
        .setFooter('호두과자 #8981', 'https://imgur.com/DD3DQxx.jpg');

        message.channel.send(serverInfo);
    }
}



const memberInfo = new Discord.MessageEmbed()
.setColor
