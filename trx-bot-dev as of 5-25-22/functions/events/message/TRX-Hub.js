// authenticates you with the API standard library
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let messageContent = [
  `You said **${context.params.event.content}**?`,
  '',
  "Current TRX Hub version is 1.2.8 as of 5/25/22 **Available on the website: https://bit.ly/3m98R3g** Status: ```TRX Executor:🟢 TRX Executor APEX:🟢 TRX Ludicrous:🟢```",
  ''
];

// Only respond to messages containing the word "hi", "hey", "hello", or "sup"
if (context.params.event.content.match(/\bTRX Hub\b/i)) {
  await lib.discord.channels['@0.3.1'].messages.create({
    channel_id: context.params.event.channel_id,
    content: messageContent.join('\n'),
    message_reference: {
      message_id: context.params.event.id
          }
        });
      }