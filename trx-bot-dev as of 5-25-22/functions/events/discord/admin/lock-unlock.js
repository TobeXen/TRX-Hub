const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let message = context.params.event.content

if (message.startsWith(`${process.env.PREFIX}lock`)) {
  await lib.discord.channels['@0.1.1'].permissions.update({
    overwrite_id: `${context.params.event.guild_id}`,
    channel_id: `${context.params.event.channel_id}`,
    deny: `${1 << 10}`,
    type: 0
  });
  
  await lib.discord.channels['@0.1.1'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `**🔒 | Channel Locked**`
  });
}

if (message.startsWith(`${process.env.PREFIX}unlock`)) {
  await lib.discord.channels['@0.1.1'].permissions.update({
    overwrite_id: `${context.params.event.guild_id}`,
    channel_id: `${context.params.event.channel_id}`,
    allow: `${1 << 10}`,
    type: 0
  });
  
  await lib.discord.channels['@0.1.1'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `**🔓| Channel Unlocked**`
  });
}