import { Bot } from 'grammy';

export interface BotServiceOptions {
  botToken: string;
}

export class BotService {

  readonly bot: Bot;

  constructor(protected options: BotServiceOptions) {
    this.bot = new Bot(options.botToken);
  }

  public init() {
    this.bot.command("whoiam", async (ctx) => {
      await ctx.reply(`You're ${ctx.from?.first_name} (id: ${ctx.message?.from?.id}) from Azure Functions v3`);
    });
  }
}
