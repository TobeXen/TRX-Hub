// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.2.0'].messages.create({
  channel_id: `${context.params.event.system_channel_id}`,
  content: "TRX appreciates you inviting this bot, use ``t!help`` to see commands."
});