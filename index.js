const Discord = require('discord.js');
const bot = new Discord.Client();

function game1(){
  bot.user.setActivity('over honey', {type: 'WATCHING'});
};

bot.on('ready', () =>{
    console.log('honey is online!');
    game1();
  });

  bot.login(process.env.token);