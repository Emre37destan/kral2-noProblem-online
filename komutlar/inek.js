const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazını Yaz');
  message.channel.sendCode("asciidoc", `
  < ${mesaj} >
  --------------------------
          \    ^__^
           \   (00)\_______
              (__)\       )--*
               🔔 ||----w||
                  ||     || `);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'inek',
  description: 'inek',
  usage: 'inek >Birşey Yaz<'
};
