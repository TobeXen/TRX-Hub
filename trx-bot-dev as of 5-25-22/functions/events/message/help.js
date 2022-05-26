const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

module.exports = async (event, context) => {
if (context.params.event.content.startsWith(`${process.env.PREFIX}help`)) {

  await lib.discord.channels['@0.0.3'].messages.create({
  channel_id: `${event.channel_id}`,
  content: ``,
  embed: {
    type: `rich`,
    title: `Here are all of the commands`,
    description: `**Commands** ~
    **t!bankai** - summons a bankai
    **t!punch** - punches your target
    **t!roles** - lets you see all of the roles in the server
    **t!slap** - slaps your target
    **t!sufionjoke** - you can hear all of sufion's corny jokes
    **t!whack** - whacks your target
    **t!trxupdates**- lets you know all of the recent updates
    **t!tictactoe or t!ttt** - you can play tictactoe with anyone
    **t!membercount** - shows you how many people are in the server
    **t!servercount** - shows you how many servers the TRX bot is in
    **t!afk** - make sure that the server knows that your afk
    **t!invite** - makes it so you can invite the TRX bot to any server
    **t!roles** - tells you all of the current roles in the server
    **t!apicheck** - shows the current api's status in TRX Hub
    **t!{API}-apicheck** - show more information of selected api
    **t!say** - repeats your message as the bot
    *you can say TRX Discord, TRX Hub, Roblox Update without prefix*`,
    color:16763904,
    footer: {
      text: `Powered by TRX`,
      icon_url: `https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png`,
    }}})}}