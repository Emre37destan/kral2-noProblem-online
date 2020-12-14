const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("Bot yeniden başlatılıyor (10 Saniye Sonra Tekrar Dene)").then(msg => {
        console.log("[BOT]Yeniden başlatılıyor");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [1],
  permLevel: 3
};

exports.help = {
  name: 'yenile', 
  description: 'Botu yeniden başlatır',
  usage: 'yenile'
};
