const {
  SlashCommandBuilder,
  CommandInteraction
} = require("discord.js");

const createEmbed = require("../../Tools/Embed.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("untimeout")
    .setDescription("removes timeout from an already timed out member.")
	  
	.addUserOption(option => 
		option.setName('member')
		.setDescription("The member to be timed out.")
		.setRequired(true)),
	/**
   *
   * @param {CommandInteraction} interaction
   */
  async execute(interaction) {
	  const user = interaction.options.getUser('member');
	  const member = await interaction.guild.members
		  .fetch(user.id)
		  .catch(console.error)
	  
	  try {
		  await member.timeout(null);
		  
		  	interaction.reply({
			  embeds: [createEmbed(`${user.tag} has been untimed out!`, "UNTIMEOUT!!!","","don\'t be like them in the first place!")]
		  })
	  } catch(e) {
		  interaction.reply({
			  embeds: [createEmbed(`${user.tag} couldn't be untimed out!`, "Untimeout Error!!!","",":/")]
		  })
	  }
  },
};
