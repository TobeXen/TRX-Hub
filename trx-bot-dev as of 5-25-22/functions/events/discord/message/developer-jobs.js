const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

module.exports = async (event, context) => {
if (context.params.event.content.startsWith(`${process.env.PREFIX}101010101010010010010`)) {

  await lib.discord.channels['@0.0.3'].messages.create({
  channel_id: `${event.channel_id}`,
  content: ``,
  embed: {
    type: `rich`,
    title: `Weekly jobs due by Wednesday`,
    description: `~Designers must have minor changes atleast
    ~Coders know what to do
    ~Supports gotta help atleast one person per week
    
    Done = 🟢  In Progress = 🟠 Haven't started = 🔴`,
    color: 16763904,
    footer: {
      text: `Powered by TRX`,
      icon_url: `https://cdn.discordapp.com/app-icons/961425434392813578/4a163647d88f3d9e1bd4e864e9701be0.png`,
    }}})}}