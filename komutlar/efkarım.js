const Discord = require("discord.js");

exports.run = (client, message) => {

const FwhyCode = Math.floor(Math.random() * 100) + 1;

return message.channel.send(`**Bakıyorum Da Dertlisiniz** \n**Efkarınız:** **%${FwhyCode}** **Efkar** `);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "efkarım",
  description: "UMqT | Efkarınızı Ölçer",
  usage: "efkarım bu gün"
};
