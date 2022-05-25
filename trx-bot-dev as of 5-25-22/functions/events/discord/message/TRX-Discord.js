// authenticates you with the API standard library
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let messageContent = [
  `You said **${context.params.event.content}**?`,
  '',
  `TRX Discord link: https://discord.gg/yjfUcT4PVp`,
  ''
];

// Only respond to messages containing the word "hi", "hey", "hello", or "sup"
if (context.params.event.content.match(/\bTRX Discord\b|\bTRX Server\b/i)) {
  await lib.discord.channels['@0.3.1'].messages.create({
    channel_id: context.params.event.channel_id,
        content: messageContent.join('\n'),
        message_reference: {
          message_id: context.params.event.id
        }
      });
    }
