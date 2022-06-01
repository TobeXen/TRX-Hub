const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
if (context.params.event.content.startsWith(`${process.env.PREFIX}invite`)) {
  let info = await lib.discord.users['@0.1.4'].me.list();
  let id = info.id;
  await lib.discord.channels['@0.1.1'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: '',
    tts: false,
    components: [
      {
        type: 1,
        components: [
          {
            style: 5,
            label: `Invite Link`,
            url: `https://discord.com/oauth2/authorize?client_id=${id}&scope=identify%20bot%20applications.commands&permissions=2146958591`,
            disabled: false,
            type: 2,
          },
        ],
      },
    ],
    embed: {
      type: 'rich',
      title: `Invite link`,
      description: `TRX appreciates you inviting this bot.`,
      color: 16763904,
    },
  });
}
