import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { webhookCallback } from 'grammy';
import { BotService } from '../src/services/bot.service';

if (!process.env.BOT_TOKEN) {
  throw new Error("BOT_TOKEN is not defined")
}
const botService = new BotService({
  botToken: process.env.BOT_TOKEN,
});
botService.init();

const telegramBot: AzureFunction = async function (
  context: Context,
  request: HttpRequest,
): Promise<void> {
  await webhookCallback(botService.bot, "azure")(context as any, request);
};

export default telegramBot;
