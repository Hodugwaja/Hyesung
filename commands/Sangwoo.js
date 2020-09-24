const Discord = require("discord.js");

module.exports = {
    name : '상우봇',
    description : '상우봇 초대',
    execute(message, args){
        const SangWoo = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('상우봇입니다')
        .setURL('https://github.com/cropMr/Hyesung')
        .setAuthor('혜성봇#3150', 'https://imgur.com/Slc6oNo.jpg', 'https://discordapp.com/oauth2/authorize?client_id=756728393839411281&scope=bot&permissions=8')
        .setDescription(`${message.author.username}` + "님이 요청한 상우봇 조사결과서입니다")
        .setThumbnail("https://imgur.com/mLfdLu9.jpg")
        .addFields(
            { name: '설명', value: "모티브는 조상우, 현재 챗봇입니다.\n추후에 게임봇으로 될 예정입니다", inline: false},
            { name: '초대 URL', value: "https://discordapp.com/oauth2/authorize?client_id=756727028660699197&scope=bot&permissions=8", inline: false},
            { name : '팁' , value : "봇 초대는 서버 관리자만 가능한 일입니다"}
        )
        .setFooter('호두과자 #8981', 'https://imgur.com/DD3DQxx.jpg');

        message.channel.send(SangWoo);
    }
}
