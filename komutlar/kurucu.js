const Discord = require('discord.js');

let botid = ('783311891714801724') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} \n »Kral Bot Kurucum...`)
   .addField(`» Kurucum`, `[ »Kurucum ₵|・🔱 Emre / 30#1473 ]\n[Discord'uma Katılmayı Unutma](https://discord.gg/tTfnBdnH)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['owner','kurucukim'],
    kategori: 'kullanıcı',
  permLevel: 0,
};

exports.help = {
  name: 'kurucu',
  description: 'Kurucu komutudur botun kurucusu kim k-kurucu...!',
  usage: 'kurucu'
};
