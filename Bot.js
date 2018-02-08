const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('작동준비완료!');
  console.log('[BOT]MINION 실행중...');
  console.log('실행중...');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.on('message', message => {
  if (message.content === 'hello minion') {
    message.reply('hi');
  }
});

client.on('message', message => {
  if (message.content === '안녕?') {
    message.reply('안녕하세요');
  }
});

client.on('message', message => {
  if (message.content === '미니언') {
    message.reply('미니언히얼');
  }
});

client.on('message', message => {
  if (message.content === '두둥') {
    message.reply('탁!');
  }
});

client.on('message', message => {
  if (message.content === '시공조아') {
    message.reply('히오스조아');
  }
});

client.on('message', message => {
  if (message.content === 'MINION.help') {
      message.reply('\n[BOT]MINION.help2\n두둥\nhello minion\nping\n');


  }
});


client.on('message', message => {
  if (message.content === 'fuck you minion') {
      message.reply('(╯°□°）╯︵ ┻━┻');


  }
});


client.login('BOT_TOKEN');
