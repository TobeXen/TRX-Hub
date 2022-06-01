// A say command get your bot to say something right after you!
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const momenttz = require('moment-timezone');
let event = context.params.event;
if (event.content.startsWith(`${process.env.PREFIX}embed-say`)) {
  let text = event.content.split(` `);
  let suggestion = text.slice(1).join(` `);
  if (!suggestion) {
    await lib.discord.channels['@0.1.0'].messages.create({
      channel_id: event.channel_id,
      content: `What do you want me to say?`,
    });
  } else {
    await lib.discord.channels['@0.1.0'].messages.destroy({
      channel_id: event.channel_id,
      message_id: event.id,
    });
    let suggest = await lib.discord.channels['@0.1.0'].messages.create({
      channel_id: context.params.event.channel_id,
      content: ``,
      embed: {
        title: ` `,
        type: 'rich',
        color: 16763904,
        description: suggestion,
      },
    });
  }
const { guild_id, id, channel_id, timestamp, author } = event;
  const message = event.content.split(' ').slice(1).join(' ');
  await lib.discord.channels['@0.3.2'].messages.destroy({
    message_id: id, channel_id,
  });
  await lib.discord.channels['@0.3.2'].messages.create({
    channel_id, content: message,
  });
  let result = await lib.discord.guilds['@0.1.0'].retrieve({ guild_id });
  let date = momenttz(timestamp);
  let formattedTime = date.tz('US/Eastern').format('hh:mma z');
  console.log(formattedTime);
  let dateString = new Date().toLocaleString('en-GB', {
     timeZone: 'US/Eastern',
  });
  console.log(dateString);
  await lib.discord.channels['@0.3.2'].messages.create({
     channel_id: `${process.env.log_channel_id}`,
     content: '',
     tts: false,
     embeds: [{
       type: 'rich',
       title: '',
       description: `**<@!${author.id}>** just used the say command, here's what they said: **${message}**.Here's when they sent the message:${formattedTime}. In **${result.name}** Server`,
       color: 16763904,
      }],
  });
  }
