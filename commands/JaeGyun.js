const Discord = require("discord.js");

module.exports = {
    name : '재균봇',
    description : '재균봇 초대',
    execute(message, args){
        const JaeGyun = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('재균봇입니다')
        .setURL('https://github.com/cropMr/Hyesung')
        .setAuthor('혜성봇#3150', 'https://imgur.com/Slc6oNo.jpg', 'https://discordapp.com/oauth2/authorize?client_id=756728393839411281&scope=bot&permissions=8')
        .setDescription(`${message.author.username}` + "님이 요청한 재균봇 조사결과서입니다")
        .setThumbnail("https://imgur.com/bvKI7mO.jpg")
        .addFields(
            { name: '설명', value: "모티브는 황재균, 노래봇입니다.\n재균봇에게 노래불러달라고 하시죠.\n현재는 재생만 가능하지만 :(", inline: false},
            { name: '초대 URL', value: "https://discordapp.com/oauth2/authorize?client_id=756712318221549599&scope=bot&permissions=8", inline: false},
            { name : '팁' , value : "봇 초대는 서버 관리자만 가능한 일입니다"}
        )
        .setFooter('호두과자 #8981', 'https://imgur.com/DD3DQxx.jpg');

        message.channel.send(JaeGyun);
    }
}

