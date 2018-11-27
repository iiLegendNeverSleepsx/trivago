const Discord = require("discord.js");
const fs = require("fs"); 
module.exports.run = async (bot, client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Invalid permissions! You must be a server admin to use this command!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
	if (!wUser) return message.reply("that member can't be found!");
	let reaso = args.shift();
	let reason = args.join(" ");
	if (!reason) message.reply("Command required to run!");
 
const command = reason;
  
  
  const MessageCreator = require('../resources/mc.js');
  
  const m = new MessageCreator.Creator(message, client);
	
  m.reply = function(cont) { this.message.channel.send(m.author + ", " + cont) };
  
  m.setAuthor(wUser.user.tag)
  m.setContent(command)
  
  const rc = command.split(" ");
  const cf = require(`./${rc[0]}`);
  if (!cf) message.reply("That is not a valid command!");
  
  
  rc.shift();
  cf.run(client, client, m, rc);
}

module.exports.help = {
	name: "sudo",
	usage: "sudo <user> <command> [args]",
	description: "Force commands on a user",
	longdes: "Forces a user to run a specific command.",
	mentionedperm: "Developer",
  category: "Utility"
}