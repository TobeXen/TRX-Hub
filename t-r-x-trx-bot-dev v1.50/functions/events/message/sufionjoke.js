const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

if (context.params.event.content.startsWith(`${process.env.PREFIX}sufionjoke`)) {

  const request = require('request');
  const options = {
    url: 'https://www.icanhazdadjoke.com/',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
    }
  };
  
  let jokeResponse = await new Promise((resolve, reject) => {
    request(options, function(err, res, body) {
      if (err) {
        return reject(err);
      }
      let json = JSON.parse(body);
      resolve(json);
    }); 
  });

  await lib.discord.channels['@0.2.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content: `${jokeResponse.joke}`,
  });
}
