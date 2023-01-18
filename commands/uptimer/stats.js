const { MessageEmbed } = require("discord.js");
const fs = require("fs");
const fetch = require("node-fetch");

module.exports = {
	name: "stats",
run: async(client, message, args) => {
	let data = JSON.parse(fs.readFileSync("./link.json", "utf8"));

    if (!data) return message.channel.send(client.emotes.error + " **Bir şeyler yanlış gitti...**");

    data = data.find(x => x.id === message.author.id);

    if (!data) {
      return message.channel.send(
        client.emotes.error + " İzleyecek siteniz yok, `-monitor` kullanın ve bir web sitesi ekleyin"
      );
    }

    let embed = new MessageEmbed()
      .setAuthor(`You have ${data.link.length} Website`, message.author.displayAvatarURL())
			.setThumbnail(message.author.displayAvatarURL())
      .setColor(client.embedcolor)
      .setDescription(
        `**• ${data.link.join(`\n• `)}**`
      );

    message.reply(client.emotes.yes+ " **Dm'lerini kontrol et**");
    message.author.send(embed).catch(err => {
      return message.channel.send(
        "DM'leriniz devre dışı, bu yüzden lütfen istatistikleri almak için etkinleştirin"
      );
    });
}
}