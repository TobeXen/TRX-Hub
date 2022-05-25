const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let messagePrompts = [
  'https://c.tenor.com/sAKepudEgaAAAAAC/bankai-bleach.gif',
  'https://c.tenor.com/UPVOb9kg6SQAAAAd/anime-bleach.gif',
  'https://c.tenor.com/ukmiPAn5KT8AAAAd/ichigo-bleach.gif',
  'https://c.tenor.com/qsdqhlumpMYAAAAC/anime-bankai.gif',
  'https://c.tenor.com/xiYpkstw-_QAAAAd/bankai.gif',
  'https://c.tenor.com/rSbGnvoC59kAAAAC/toshiro-ice.gif',
  'https://c.tenor.com/TdhPUmsti28AAAAC/bankai-bleach.gif',
  'https://c.tenor.com/yMRpdoR-spMAAAAC/bankai-bleach.gif',
  'https://c.tenor.com/zyueNIJUmuMAAAAC/anime-bankai.gif',
  'https://c.tenor.com/-TKjm_MdZq4AAAAd/kenpachi-bleach.gif',
  'https://c.tenor.com/1VkPT5WgUJcAAAAC/bleach-bleach-anime.gif',
  'https://c.tenor.com/XVGhWO0LK10AAAAd/aizen-bleach.gif',
  'https://c.tenor.com/YRrBTVYWCLIAAAAC/bleach-kisuke.gif',
  'https://c.tenor.com/Kn1vuHbD7ZIAAAAd/bankai-sword.gif',
  'https://c.tenor.com/YJhw8X5C8s0AAAAC/komamura-bankai-bleach.gif',
];

let messageChoice = Math.floor(Math.random() * messagePrompts.length);
let message = messagePrompts[messageChoice];

module.exports = async (event, context) => {
  if (event.content.toLowerCase().startsWith(`${process.env.PREFIX}bankai`)) {
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
        description: `<@${context.params.event.author.id}> BANKAI!!!!! It's over ${context.params.event.mentions[0].username}`,
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