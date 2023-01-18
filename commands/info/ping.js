module.exports = {
	name: "ping",
    aliases: ["ping"],
  description: "ping",
	run: async(client, message, args) => {
message.channel.send(`**Ping:** \`${client.ws.ping} ms\``)
}
}