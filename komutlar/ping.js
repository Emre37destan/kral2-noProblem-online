const Discord = require('discord.js');

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "Kral-Emre",
              icon_url: ""
            },
			    "thumbnail": {
				 "url": ""
			},
            title: "Ping Menüsü",
            description: `:ping_pong: [Pong](https://www.discordapp.com) : **${Math.round(client.ping)}** ms \nPingin Durumu :joy:`,
            fields: [
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "",
              text: "Kral-Emre'ye Aittir...! © Tüm Hakları Saklıdır...! "
            }
          }
        });
	    message.react("📝")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p', 'pong', 'uptime',],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun Pingini Gösterir !',
  usage: 'ping'
};
