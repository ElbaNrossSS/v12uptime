const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "help-info",
run: async(client, message, args) => {

const DBL = require('dblapi.js')
  const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk5MDM3NzcxNTAxMjA5MTkxNCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjU3OTIzODY5fQ.gDSUNnBVpB8nHNsVxKUHgdPwupkSwwHxuq9R7iMjQO8', client)

  dbl.hasVoted(message.author.id).then(voted => {
    if(voted) {
	const help = new MessageEmbed()
.addField('**__Info Commands!__**','To use a command, use `-` followed by a command name. For example: `-ping`.')
.addField("`help`","Shows all available bot commands.",true)
.addField("`ping`","Ping lantency",true)
.addField("`uptime`","Shows the bot's uptime",true)
.addField("`invite`","İnvite me to your server",true)
.setThumbnail(client.user.displayAvatarURL())
		.setColor(client.embedcolor)
	.setFooter(client.user.username)
.setTimestamp()
	message.channel.send(help)
 message.channel.send("Verdiğiniz destekten dolayı teşekkür ederim <a:kalp:972144507523059772> ")
} else {
    message.channel.send("Bu komutu kullanabilmek için botumuza oy vermelisin! https://top.gg/bot/990377715012091914 \n `Onaylanması birkaç dakika sürebilir`")
  }
})
      
}
}
