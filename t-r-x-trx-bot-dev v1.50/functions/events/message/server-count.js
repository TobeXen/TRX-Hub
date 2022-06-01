// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

if (context.params.event.content.startsWith(`${process.env.PREFIX}servercount`)) {
  let servers = await lib.discord.guilds['@0.1.0'].list({
    limit: 100,
  });
  await lib.discord.channels['@0.1.2'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: ``,
    embed: {
      type: `rich`,
      title: `Server Count:`,
      description: `TRX Bot is currently in **${servers.length === 100 ? servers.length + '+' : servers.length}** servers`,
      url: `https://discord.com/oauth2/authorize?client_id=961425434392813578&scope=identify%20bot%20applications.commands&permissions=2146958591`,
      color: 16763904,
      }
  });
}