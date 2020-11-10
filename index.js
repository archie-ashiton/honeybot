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

  bot.on('guildMemberAdd', member =>{
      const channel = member.guild.channels.cache.find(channel => channel.name === '╭・chat');
      const welcomeEmbed = {
          color: 0x2F3136,
          title: `**welcome ${member.displayName}**`,
          description: 'check out\n・<#775530074030997514>\n・<#775530144693616690>\n・<#775532056456855582>\n・<#775451538059034637>\nto get started <:honey_hj:775473481386950676> ',
          footer: {
              text: 'xoxo'
          },
          timestamp: new Date()
      };
      channel.send(`${member}`);
      channel.send({ embed: welcomeEmbed });
      
  });
  
  bot.on('guildMemberRemove', member =>{
      const channel = member.guild.channels.cache.find(channel => channel.name === '╭・chat');
      channel.send(`**${member.displayName}** just left the server, bye!<:honey_hj:775473481386950676>`);

  });

  bot.login(process.env.token);