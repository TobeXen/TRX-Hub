// authenticates you with the API standard library
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

if (context.params.event.content.startsWith(`${process.env.PREFIX}ping`)) {
  let latency = new Date() - new Date(context.params.event.timestamp);
  await lib.discord.channels['@0.1.1'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `<@${context.params.event.author.id}> 👾 (Time Taken: 0.${latency}s)`,
  });
}
