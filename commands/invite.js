const Discord = require("discord.js");

module.exports = {
    name : '초대',
    description : '혜성봇 초대',
    execute(message, args){
        const JaeGyun = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('혜성봇 초대 URL입니다')
        .setURL('https://github.com/cropMr/Hyesung')
        .setAuthor('혜성봇#3150', 'https://imgur.com/Slc6oNo.jpg', 'https://discordapp.com/oauth2/authorize?client_id=756728393839411281&scope=bot&permissions=8')
        .setDescription(`${message.author.username}` + "님이 요청한 혜성봇 초대장입니다")
        .setThumbnail("https://imgur.com/z6sW2hD.jpg")
        .addFields(
            { name: '설명', value: "모티브는 김혜성, 현재 관리봇으로 개발중입니다\n추후에는 관리봇을 다른 봇에게 넘겨주고 discord.js교육봇으롭 변경할 예정입니다", inline: false},
            { name: '초대 URL', value: "https://discordapp.com/oauth2/authorize?client_id=756728393839411281&scope=bot&permissions=8", inline: false},
            { name : '팁' , value : "봇 초대는 서버 관리자만 가능한 일입니다"}
        )
        .setFooter('호두과자 #8981', 'https://imgur.com/DD3DQxx.jpg');

        message.channel.send(JaeGyun);
    }
}

