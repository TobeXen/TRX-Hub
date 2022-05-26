const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

module.exports = async (event, context) => {
if (context.params.event.content.startsWith(`${process.env.PREFIX}apicheck`)) {

  await lib.discord.channels['@0.0.3'].messages.create({
  channel_id: context.params.event.channel_id,
  content: ``,
  embed: {
    type: `rich`,
    title: `Currunt working api's for roblox update __version-ab1db0c40dae4666__:`,
    description: `🟢 KRNL | (2013I) 05/25/2022, 2:17 PM 
🟢 Fluxus | (V7.2b033) 05/26/2022, 4:40 PM
🟢 Oxygen | (37) 05/26/2022, 4:34 PM
🟢 WeAreDevs | (3023) 05/25/2022, 3:22 PM`,
    color: 16763904,
    footer: {
      text: `Powered by TRX • Timezone: EST`,
      icon_url: `https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png`,
    }}})}}
