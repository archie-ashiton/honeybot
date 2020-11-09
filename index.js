const Discord = require('discord.js');
const bot = new Discord.Client();

function game1(){
  bot.user.setActivity('over honey', {type: 'WATCHING'});
  setTimeout(game2, 10000);
};

function game2(){
  bot.user.setActivity('honey tastes good', {type: 'PLAYING'});
  setTimeout(game1, 10000);
};

bot.on('ready', () =>{
    console.log('honey is online!');
    game1();
  });

  bot.login(process.env.token);