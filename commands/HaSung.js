const Discord = require("discord.js");

module.exports = {
    name : '하성봇',
    description : '하성봇 초대',
    execute(message, args){
        const JaeGyun = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('하성봇입니다')
        .setURL('https://github.com/cropMr/Hyesung')
        .setAuthor('혜성봇#3150', 'https://imgur.com/Slc6oNo.jpg', 'https://github.com/cropMr/Hyesung')
        .setDescription(`${message.author.username}` + "님이 요청한 재균봇 조사결과서입니다")
        .setThumbnail("https://imgur.com/3oH5jmK.jpg")
        .addFields(
            { name: '설명', value: "모티브는 김하성, 역할은 아직 안 정했습니다.\n그래도 초대 URL은 드릴게요...", inline: false},
            { name: '초대 URL', value: "https://discordapp.com/oauth2/authorize?client_id=707858144164053063&scope=bot&permissions=8", inline: false},
            { name : '팁' , value : "봇 초대는 서버 관리자만 가능한 일입니다"}
        )
        .setFooter('호두과자 #8981', 'https://imgur.com/DD3DQxx.jpg');

        message.channel.send(JaeGyun);
    }
}

