const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let messagePrompts = [
  'https://cdn.weeb.sh/images/B1rZP6b-z.gif',
  'https://cdn.weeb.sh/images/B1-ND6WWM.gif',
  'https://cdn.weeb.sh/images/HJqSvaZ-f.gif',
  'https://cdn.weeb.sh/images/SJR-PpZbM.gif',
  'https://cdn.weeb.sh/images/BkdyPTZWz.gif',
  'https://cdn.weeb.sh/images/SJvGvT-bf.gif',
  'https://cdn.weeb.sh/images/BJg7wTbbM.gif',
  'https://cdn.weeb.sh/images/SyYbP6W-z.gif',
  'https://cdn.weeb.sh/images/HJfGPTWbf.gif',
  'https://cdn.weeb.sh/images/SkFLH129z.gif',
  'https://cdn.weeb.sh/images/SJAfH5TOz.gif',
  'https://cdn.weeb.sh/images/rJHLDT-Wz.gif',
];

let messageChoice = Math.floor(Math.random() * messagePrompts.length);
let message = messagePrompts[messageChoice];

module.exports = async (event, context) => {
  if (event.content.toLowerCase().startsWith(`${process.env.PREFIX}punch`)) {
    const args = event.content.split(' ').slice(1);
    console.log(args);
    if (!args.length || !event.mentions.length || !args[1]);
    let rateLimit = await lib.utils.kv['@0.1.16'].get({
      key: `.punch${context.params.event.author.id}`,
    });
    await lib.discord.channels['@0.0.3'].messages.create({
      channel_id: `${context.params.event.channel_id}`,
      content: '',
      embed: {
        title: ``,
        description: `<@${context.params.event.author.id}> punched ${context.params.event.mentions[0].username}!! OoF`,
        type: 'gifv',
        color: 16763904,
        image: {
          height: 297,
          width: 580,
          url: `${message}`,
        },
      },
    });
  }
};