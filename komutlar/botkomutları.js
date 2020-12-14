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
      `:white_small_square: |Kral-Emre \n :white_small_square:|Bot Komutları`,
      `:white_small_square: | **Prefix >[k-]< Bot Komut Kullanmadan İlk Prefix Ekleyiniz...!**:\n:white_small_square: |**>-|ailemiz|-|avatar|-|ban|-<**\n:white_small_square: |**>-|başvuru|-|bilgi|-|botdurum|-<**\n:white_small_square: |**>-|botkontrol|-|clear|-|davet|-|duyuru|-|havadurumu|-<**\n:white_small_square: |**>-|herkesedm|-|hesapla|-|kick|-|kullanıcıbilgim|-|çek|-<**\n:white_small_square: |**>-|otorolsıfırla|-|otorolmesajkapat|-|ping|-|reboot|-|tarama|-|rolinfo|-<**\n:white_small_square: |**>-|roller|-|yavaş-mod|-|sunucu|-|sunucuresmi|-|sunucutanıt|-<**\n:white_small_square: |**>-|sustur|-|temizle|-|top10|-|unban|-|uyar|-**<\n:white_small_square: |**>-|yazı-kanal-aç|-|yenile|-|yetkilerim|-|öneri|-|şifre|-<**:`
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
    "botcommand",
    "b",
    "bot"
  ],
  permLevel: 0
};

exports.help = {
  name: "botkomutları",
  description: "botkomutları komutunu gösterir...!",
  usage: "botkomutları"
};
