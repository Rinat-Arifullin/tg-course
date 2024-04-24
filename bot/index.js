const TelegramBot = require('node-telegram-bot-api');

const token = '7184413608:AAEHCQlDP_0xggkSjjs1yIZi_L0DedFgoHI';

const bot = new TelegramBot(token, {polling: true});

const webAppUrl = 'https://tg-course.vercel.app/';

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;

  const text = msg.text;

  if(text === '/start'){
      await bot.sendMessage(chatId, 'Received your message', {
        reply_markup: {
            inline_keyboard: [
                [{text: 'Сделать заказ',web_app: {url:webAppUrl}}]
            ]
        }
      });
  }
});