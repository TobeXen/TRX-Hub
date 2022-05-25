const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let messagePrompts = [
  'https://c.tenor.com/EfhPfbG0hnMAAAAM/slap-handa-seishuu.gif',
  'https://c.tenor.com/FJsjk_9b_XgAAAAM/anime-hit.gif',
  'https://c.tenor.com/wOCOTBGZJyEAAAAM/chikku-neesan-girl-hit-wall.gif',
  'https://c.tenor.com/zwDh3RLs1O8AAAAM/dandidave-pingpong.gif',
  'https://c.tenor.com/1hgUG2DpefkAAAAM/yuya-sakaki-yuzu-hiiragi.gif',
  'https://c.tenor.com/TTYSsgn_8esAAAAM/anime-drag.gif',
  'https://c.tenor.com/PQ_imJXimaMAAAAM/smack-tongue.gif',
  'https://c.tenor.com/hGclJ34JeSIAAAAM/one-punch.gif',
  'https://c.tenor.com/9C_NY-GObhUAAAAM/anime-muv-luv.gif',
  'https://c.tenor.com/dyp57YWeUY0AAAAM/oreimo-dumb.gif',
  'https://c.tenor.com/jgImPggI1ZMAAAAM/bakugo-anime-slap.gif',
  'https://c.tenor.com/h_qFkmXJnYQAAAAM/cat-attack.gif',
  'https://c.tenor.com/fz-V6dZ1PiQAAAAM/how-to-raise-a-boring-girlfriend-saenai.gif',
  'https://c.tenor.com/mDW_8w1yi90AAAAM/mad-anime.gif',
  'https://c.tenor.com/yBQeNxKbo20AAAAM/money-stare.gif',
  'https://c.tenor.com/Irk80uToJA0AAAAM/slap-anime.gif',
  'https://c.tenor.com/WcYvM-SqPkoAAAAM/baka-slap.gif',
  'https://c.tenor.com/0RUsQuQb0FAAAAAM/money-anime.gif',
  'https://c.tenor.com/gzxNd5-Jk4gAAAAM/atari-anime.gif',
  'https://c.tenor.com/klNTzZNDmEgAAAAM/slap-hit.gif',
  'https://c.tenor.com/2vgDx1DCgf8AAAAM/hunter-x-hunter-bisky.gif',
  'https://c.tenor.com/N9IPOYXJKmEAAAAM/killua-hunter-x-hunter.gif',
  'https://c.tenor.com/2pTVPsXlkWMAAAAM/hunter-x-hunter.gif',
];

let messageChoice = Math.floor(Math.random() * messagePrompts.length);
let message = messagePrompts[messageChoice];

module.exports = async (event, context) => {
  if (event.content.toLowerCase().startsWith(`${process.env.PREFIX}whack`)) {
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
        description: `<@${context.params.event.author.id}> whacked ${context.params.event.mentions[0].username}!! ah`,
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