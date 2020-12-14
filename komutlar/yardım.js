const Discord = require("discord.js");

exports.run = async (client, message, params, args) => {
  const yardım = new Discord.RichEmbed()
    .setColor(0x36393e)
    .setAuthor(`Kral Bot`, client.user.avatarURL)
    .setDescription(
      "[Botu sunucuya ekle](https://discord.com/oauth2/authorize?client_id=783311891714801724&scope=bot&permissions=2147483647) | [Discord'uma Katılmayı Unutma](https://discord.gg/ftANtTCuQ2) | [Youtube](https://www.youtube.com/channel/UCVE9gvwcxhHndoRm4s3iVmw?view_as=subscriber)\n\n**Ping**: " +
        client.ping +
        "ms!\n\n"
    )
    .setThumbnail(client.user.avatarURL)
    .addField(
      `:white_small_square: |Kral-Emre \n :white_small_square:| Yardım`,
      `:white_small_square: | **k-eğlence: Sunucunuz için Eğlence Komutlarını Gösterir...!**\n:white_small_square: | **k-botkomutları: Sunucudaki Coğu Komutları Gösterir...!**\n:white_small_square: | **k-yetkili: Yetkili Komutlarını Gösterir..!**\n:white_small_square: | **k-destek: destek Nedir ? Bir Sorun olduğunda iletişime geçmeniz için sizlere verilen E-Posta...!**`
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
    "komut",
    "komutlar",
    "command",
    "yardım",
    "help",
    "halp",
    "y",
    "h",
    "commands"
  ],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "yardım",
  usage: "yardım"
};
