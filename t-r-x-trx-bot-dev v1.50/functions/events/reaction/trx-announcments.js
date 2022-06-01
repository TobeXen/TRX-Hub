// authenticates you with the API standard library
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let validMessage = '980203985698963486'; //Change this to match the message ID you want to track

let validRoles = {
  '🎉': '980202512189648946', // These need to be the role IDs from your server
  '🤔': '980202542564794418'
};

let validRole = validRoles[context.params.event.emoji.name];

if (context.params.event.message_id === validMessage && validRole) {
  await lib.discord.guilds['@0.1.0'].members.roles.update({
    role_id: `${validRole}`,
    user_id: `${context.params.event.user_id}`,
    guild_id: `${context.params.event.guild_id}`
  });
}