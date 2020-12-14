const Discord = require('discord.js');

let botid = ('783311891714801724') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} »Kral Hizmetinizde...`)
   .addField(`» E-Posta`, `[ »destan3673@hotmail.com ](»destan3673@hotmail.com/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'destek',
  description: 'Destek almak isteyenlere E-Posta sunup yardımcı olmak bir nevi...!',
  usage: 'destek'
};
