module.exports.run = async (bot, message, args) => {
const Discord = require("discord.js");

 function makeid(length) {
   var result           = 'PREMIUM-';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
message.author.send(makeid(10));
message.channel.send("Sucessfully sent you a premium code!");
}
module.exports.help = {
	name: "generate",
	usage: "generate",
	description: "generator cmd",
	longdes: "generator cmd",
	mentionedperm: "DEVELOPER",
	category: "Utility"
};
