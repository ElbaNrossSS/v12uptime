const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help-uptime",
  run: async (client, message, args) => {

    const DBL = require('dblapi.js')
    const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk5MDM3NzcxNTAxMjA5MTkxNCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjU3OTIzODY5fQ.gDSUNnBVpB8nHNsVxKUHgdPwupkSwwHxuq9R7iMjQO8', client)

    dbl.hasVoted(message.author.id).then(voted => {
      if (voted) {



        const help = new MessageEmbed()

          .addField('**__Uptimer Commands!__**', 'To use a command, use `-` followed by a command name. For example: `-ping`.')

          .addField("`monitor`", "Add Your Project To Monitor..", true)
          .addField("`remove`", "Remove Your Project From Monitor", true)
          .addField("`uptime`", "Shows the bot's uptime", true)
          .addField("`invite`", "İnvite me to your server", true)
          .addField("`stats`", "My total list", true)
          .addField("`total`", "Total list", true)

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
