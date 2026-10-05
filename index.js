const BOT_TOKEN = process.env.BOT_TOKEN;

// Пример на node-telegram-bot-api
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Вы написали: ${msg.text}`);
});
