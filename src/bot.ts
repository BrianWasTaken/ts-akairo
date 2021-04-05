require('dotenv').config();
import BotClient from './base/client';
import config from './config';

const bot = new BotClient(config);
bot.login().then(() => {
	return console.log('Bot Initialised.');
});