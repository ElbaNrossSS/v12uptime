const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "info",

  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      
//.setURL("https://cdn.discordapp.com/avatars/968547953918754896/d9ec100563b170d8d45a39f06a309eb2.png?size=60")
      
    .setTitle(`Monitors`)
      .setDescription(`Merhabalar **${message.author.username}**, Monitors Botu Sahip Olduğu Özellikler Sayesinde Botlarınızı aktif tutmak için Tasarlanmış Bir Bottur!
Denemeye Ne Dersin? *`)
		.setColor(client.embedcolor)
	.setThumbnail(client.user.displayAvatarURL())
	.setFooter(client.user.username)
.setTimestamp()

      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Invite me!') 
      .setURL(`https://discord.com/api/oauth2/authorize?client_id=990377715012091914&permissions=8&scope=bot`);
    
       let button3 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('WebSite') 
     .setURL(`https://monitors-bot.glitch.me/`);
    
      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Official Server!') 
      .setURL(`https://discord.gg/Ph7gJKHr7B`);
    
let button4 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Oy Ver!') 
      .setURL(`https://top.gg/bot/990377715012091914/vote`);

      return message.channel.send(helpEmbed,{
        button: [button1,button2,button3,button4], 
      });

  },
};