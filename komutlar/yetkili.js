const Discord = require("discord.js");

exports.run = async (client, message, params, args) => {
  const yardım = new Discord.RichEmbed()
    .setColor(0x36393e)
    .setAuthor(`Kral Bot`, client.user.avatarURL)
    .setDescription(
      "[Botu sunucuya ekle](https://discord.com/oauth2/authorize?client_id=783311891714801724&scope=bot&permissions=2147483647) | [Discord'uma Katıl](https://discord.gg/ftANtTCuQ2) | [Youtube](https://www.youtube.com/channel/UCVE9gvwcxhHndoRm4s3iVmw?view_as=subscriber)\n\n**Ping**: " +
        client.ping +
        "ms!\n\n"
    )
    .setThumbnail(client.user.avatarURL)
    .addField(
      `:white_small_square: |Kral-Emre \n :white_small_square:|Yetkili Komutlar`,
      `:white_small_square: | **k-yardım**:\n:white_small_square: | **k-destek**:\n:white_small_square: | **k-kurucu**:\n:white_small_square: | **k-kanal-ismi-değiş**:`
    )
    .setFooter(
      `${message.author.username} tarafından istendi.`,
      message.author.avatarURL
    );
  return message.channel.sendEmbed(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [
    "kurucu",
    "y",
    "k",
    "yetkili"
  ],
  permLevel: 0
};

exports.help = {
  name: "yetkili",
  description: "yetkili komutlar",
  usage: "yetkili"
};
