const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "help",
aliases:  "help",
     description: "Show help of bot",
run: async(client, message, args) => {
  
  const DBL = require('dblapi.js')
  const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk5MDM3NzcxNTAxMjA5MTkxNCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjU3OTIzODY5fQ.gDSUNnBVpB8nHNsVxKUHgdPwupkSwwHxuq9R7iMjQO8', client)

  dbl.hasVoted(message.author.id).then(voted => {
    if(voted) {

	const help = new MessageEmbed()
.addField('**Help Menu:**', `
\`\`\`fix
prefix: = Works with all single-character prefixes
\`\`\`
`)
.addField("__Announcement__\n","\n\n To check out a category, use command +help [category]")
.addField("__**Categories**__","Categories are listed below")
    
.addField(":loudspeaker: **İnfo**", " \n `help-info`", true)
     .addField("\u200b", "\u200b", true)
.addField(":clock: **Uptime**", " \n `help-uptime`", true)

    .addField('__**WebSite**__', `[**MonitorBot**](https://monitors-bot.glitch.me/)\n[**Discord**](https://discord.gg/aUdVEF6TDj)`)
.setFooter("Barış.#1458")

   /*
    .addField('test', `[deneme](https://discord.com)`)

addField('sa', `
\`\`\`fix
prefix: +
bla bla
\`\`\`
`)
  */
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
