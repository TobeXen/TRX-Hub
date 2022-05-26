const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
module.exports = async (event, context) => {
  if (event.content.startsWith(`${process.env.PREFIX}roles`)) {
    let guild = await lib.discord.guilds['@0.0.6'].retrieve({
      guild_id: event.guild_id
    });
    let roles = await lib.discord.guilds['@0.0.6'].roles.list({
      guild_id: event.guild_id
    });
    let list = roles.sort((pA, pB) => {
      return pB.position > pA.position ? 1 : -1;
    }).map((role) => {
      if (role.name === '@everyone') {
        return '@everyone';
      }
      return `<@&${role.id}>`;
    }).join('\n');
    await lib.discord.channels['@0.0.6'].messages.create({
      channel_id: event.channel_id,
      content: ``,
      embed: {
        title: `${roles.length} roles:`,
        type: 'rich',
        color: 16763904,
        description: list
      }
    })
  }
}