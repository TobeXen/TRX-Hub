// authenticates you with the API standard library
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let messageContent = [
  `You said **${context.params.event.content}**?`,
  '',
  `The latest roblox update was version-ab1db0c40dae4666 as of 5/25/22, 1:55 PM {EST} **no current release notes**`,
   ''
];

// Only respond to messages containing the word "hi", "hey", "hello", or "sup"
if (context.params.event.content.match(/\broblox update\b|\brobloxupdate\b|\broblox-update\b/i)) {
  await lib.discord.channels['@0.3.1'].messages.create({
    channel_id: context.params.event.channel_id,
    content: messageContent.join('\n'),
    message_reference: {
      message_id: context.params.event.id
    }
  });
}