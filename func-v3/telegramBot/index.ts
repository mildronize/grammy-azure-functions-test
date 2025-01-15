import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const telegramBot: AzureFunction = async function (
  context: Context,
  request: HttpRequest,
): Promise<void> {
  context.res = {
    status: 200,
    body: 'Hello from telegramBot!',
  };
};

export default telegramBot;
