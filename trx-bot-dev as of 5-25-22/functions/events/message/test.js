const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

module.exports = async (event, context) => {
if (context.params.event.content.startsWith(`${process.env.PREFIX}test`)) {

  await lib.discord.channels['@0.0.3'].messages.create({
  channel_id: `${event.channel_id}`,
  content: ``,
  embed: {
    type: `rich`,
    title: `hmmmm`,
    description: `if you've found this your ok and weird`,
    color: 16763904,
    footer: {
      text: `Powered by TRX`,
      icon_url: `https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png`,
    }}})}}