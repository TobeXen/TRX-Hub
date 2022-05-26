const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

module.exports = async (event, context) => {
if (context.params.event.content.startsWith(`${process.env.PREFIX}trxupdates`)) {

  await lib.discord.channels['@0.0.3'].messages.create({
  channel_id: `${event.channel_id}`,
  content: ``,
  embed: {
    type: `rich`,
    title: `Latest TRX Updates`,
    description: `__**Log 5/25/22**__
    ~ __TRX Executors updates:__ TRX Executor & TRX Executor APEX updated to latest roblox version, added customizing on APEX, fixed bugs
    ~ __TRX Ludicrous updates:__ *null*
    ~ __TRX Script/Script Hub updates:__ Old scripts replaced, optimized script`,
    color: 16763904,
    footer: {
      text: `Powered by TRX`,
      icon_url: `https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png`,
    }}})}}