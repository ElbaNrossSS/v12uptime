const client = require("../index");
const fs = require("fs");
const fetch = require("node-fetch");

let count = 0;
let invcount = 0;
let user = 0;
let rounds = 0;
let sunucu = 0;
client.on('ready', () => {
  setInterval(function() {
    var sunucu = client.guilds.cache.size.toLocaleString()
    var uye = client.guilds.cache
      .reduce((a, b) => a + b.memberCount, 0)
      .toLocaleString()
    let database = JSON.parse(fs.readFileSync("./link.json", "utf8"));
    count = 0;
    invcount = 0;
    user = database.length;
    rounds++;

    database.forEach(m => {
      m.link.forEach(s => {
        count++;

        fetch(s).catch(err => {
          invcount++;
        });
      });
    });
    client.user.setActivity(`${count} Project | Guilds ${sunucu} `, { type: "STREAMING", url: "https://www.twitch.tv/elbanross" });
  }, 38000)
}
);
