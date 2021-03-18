import { 
	CommandHandler as AkairoCommandHandler, 
	Command as AkairoCommand, 
	CommandHandlerOptions,
	CommandOptions, 
	Category
} from 'discord-akairo'
import { 
	Collection, 
	Message 
} from 'discord.js'
import BotClient from './client'

export class Command extends AkairoCommand {
	client: BotClient;
	constructor(id: string, options: CommandOptions) {
		super(id, options);
	}
}

export class CommandHandler extends AkairoCommandHandler {
	categories: Collection<string, Category<string, Command>>;
	modules: Collection<string, Command>;
	client: BotClient;
	constructor(client: BotClient, options: CommandHandlerOptions) {
		super(client, options);
	}
}