const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
let result = await lib.discord.users['@0.2.1'].me.status.update({
  activity_name: `TRX Hub 1.2.9 | release ${process.env.Versions}`,
  activity_type: 'GAME',
  status: 'DND'
});