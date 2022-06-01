const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

module.exports = async (event, context) => {
if (context.params.event.content.startsWith(`${process.env.PREFIX}apicheck`)) {

  await lib.discord.channels['@0.0.3'].messages.create({
  channel_id: context.params.event.channel_id,
  content: ``,
  embed: {
    type: `rich`,
    title: `Currunt working api's for roblox update __version-758ce9d32bfd41b2__:`,
    description: `🔴 KRNL | (${process.env.vKRNL}) 05/25/2022, 2:17 PM 
🟢 Fluxus | (${process.env.vFLUXUS}) 06/01/2022, 3:31 PM
🟢 Oxygen | (${process.env.vOXYGEN}) 06/01/2022, 3:32 PM
🟢 WeAreDevs | (${process.env.vWRD}) 06/01/2022, 4:35 PM`,
    color: 16763904,
    footer: {
      text: `Powered by TRX • Timezone: EST`,
      icon_url: `https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png`,
    }}})}}