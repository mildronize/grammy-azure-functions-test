import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { Bot, webhookCallback } from 'grammy';

/**
 * Initialize the bot
 */
if (!process.env.BOT_TOKEN) {
  throw new Error("BOT_TOKEN is not defined")
}
const bot = new Bot(process.env.BOT_TOKEN);
bot.command("whoiam", async (ctx) => {
  await ctx.reply(`You're ${ctx.from?.first_name} (id: ${ctx.message?.from?.id}) from Azure Functions v3`);
});

/**
 * Setup Webhook Endpoint for the bot
 * @param context 
 * @param request 
 */
const telegramBot: AzureFunction = async function (
  context: Context,
  request: HttpRequest,
): Promise<void> {
  await webhookCallback(bot, "azure")(context, request);
};

export default telegramBot;
