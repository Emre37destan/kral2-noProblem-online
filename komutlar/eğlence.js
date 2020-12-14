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
      `:white_small_square: |Kral-Emre \n :white_small_square:|Eğlence Komutları`,
      `:white_small_square: | **Prefix >[k-]< Eğlence Komut Kullanmadan İlk Prefix Ekleyiniz...!**:\n:white_small_square: |**>-|5dk|-|aduket|-|afk|-|ara155|-<**\n:white_small_square: |**>-|ascii|-|atam|-|atla|-|aşkımı|-<**\n:white_small_square: |**>-|ölç|-|balıktut|-|bjk|-|bira|-|ünlü|-<**\n:white_small_square: |**>-|deste|-|doğruluk|-|düello|-|efkarım|-|emojiler|-<**\n:white_small_square: |**>-|emojiyazı|-|espri|-|fbi|-|fb|-|gs|-<**\n:white_small_square: |**>-|haksızmıyım|-|hapishane|-|inek|-<**\n:white_small_square: |**>-|kafasalla|-|kafasınasık|-<**\n:white_small_square: |**>-|kahveısmarla|-|kapaklaflar|-<**\n:white_small_square: |**>-|korkut|-|mcbaşarım|-|mesajdöndür|-<**:`
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
    "ğ",
    "e",
    "eğlence"
  ],
  permLevel: 0
};

exports.help = {
  name: "eğlence",
  description: "eğlence komutları",
  usage: "eğlence"
};
