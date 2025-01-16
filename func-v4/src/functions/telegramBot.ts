import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { Bot, webhookCallback } from 'grammy';

/**
 * Initialize the bot
 */
if (!process.env.BOT_TOKEN) {
    throw new Error("BOT_TOKEN is not defined")
}
const bot = new Bot(process.env.BOT_TOKEN);
bot.command("whoiam", async (ctx) => {
    await ctx.reply(`You're ${ctx.from?.first_name} (id: ${ctx.message?.from?.id}) from Azure Functions v4`);
});

app.http('telegramBot', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: (request, context) => webhookCallback(bot, "azure-v4")(request, context)
});
