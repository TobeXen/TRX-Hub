// authenticates you with the API standard library
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let guilds = await lib.discord.guilds['@0.2.3'].list({
  limit: 100
});

lib.discord.users['@0.2.1'].me.status.update({
  activity_name: `TRX Hub 1.2.8`,
  activity_type: 'GAME',
  status: 'DND'
});

let channels = await lib.discord.guilds['@0.2.3'].channels.list({
  guild_id: guilds[0].id
});

let generalChannel = channels.find((channel) => {
  return channel.name === 'general';
});