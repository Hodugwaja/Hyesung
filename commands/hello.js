const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
    name : 'hello',
    description : '인사!',
    execute(message, args){
       return message.channel.send('안녕하십니까?' + message.author.username +"님")
    }
}