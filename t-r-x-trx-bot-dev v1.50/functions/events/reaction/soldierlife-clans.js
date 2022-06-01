// authenticates you with the API standard library
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let validMessage = '980222121731063879'; //Change this to match the message ID you want to track

let validRoles = {
  '🌑': '980208750583488553', //Kakashi
  '🔥': '933474950130581524', //Uchiha
  '😵‍💫': '965932493335330826', //Uzumaki
  '🪵': '965818789058986014', //Senju
  '🙏': '970492239530848277', //Otsutsuki
  '👏': '970492235638530150' //Hyuga
};

let validRole = validRoles[context.params.event.emoji.name];

if (context.params.event.message_id === validMessage && validRole) {
  await lib.discord.guilds['@0.1.0'].members.roles.update({
    role_id: `${validRole}`,
    user_id: `${context.params.event.user_id}`,
    guild_id: `${context.params.event.guild_id}`
  });
}