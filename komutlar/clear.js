const Discord = require('discord.js');


exports.run = function(client, message) {
message.channel.bulkDelete(100);
message.channel.send("100 mesaj sildim.").then(msg => {
	msg.delete(1000)
})

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'clear', 
  description: 'Belirtilen miktarda mesaj siler',
  usage: 'clear'
};
