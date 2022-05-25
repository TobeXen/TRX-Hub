const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

module.exports = async (event, context) => {
if (context.params.event.content.startsWith(`${process.env.PREFIX}apicheck`)) {

  await lib.discord.channels['@0.0.3'].messages.create({
  channel_id: context.params.event.channel_id,
  content: ``,
  embed: {
    type: `rich`,
    title: `Currunt working api's for roblox update __version-be28386f4d684da5__:`,
    description: `🟢 KRNL | (2013H) 05/18/2022, 9:13 PM 
🟢 Fluxus | (V7.2b031) 05/21/2022, 3:32 AM
🟢 Oxygen | (35) 05/19/2022, 1:35 PM
🟢 WeAreDevs | (3022) 05/19/2022, 1:37 PM`,
    color: 16763904,
    footer: {
      text: `Powered by TRX • Timezone: EST`,
      icon_url: `https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png`,
    }}})}}