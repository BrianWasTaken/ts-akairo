import { 
	CommandHandlerOptions,
	AkairoHandlerOptions,
	AkairoOptions,
	AkairoClient,
} from 'discord-akairo'
import {
	CommandHandler,
	Command 
} from './command'
import {
	ListenerHandler,
	Listener
} from './listener'
import {
	ClientOptions
} from 'discord.js'

export interface BotClientConstructor {
	listenerHandlerOptions: AkairoHandlerOptions;
	commandHandlerOptions: CommandHandlerOptions;
	akairoOptions: AkairoOptions;
	clientOptions: ClientOptions;
}

export default class BotClient extends AkairoClient {
	listenerHandler: ListenerHandler;
	commandHandler: CommandHandler;
	constructor(args: BotClientConstructor) {
		super(args.akairoOptions, args.clientOptions);

		this.listenerHandler = new ListenerHandler(this, args.listenerHandlerOptions);
		this.commandHandler = new CommandHandler(this, args.commandHandlerOptions);
	}

	login(token?: string): Promise<string> {
		this.listenerHandler.loadAll();
		this.commandHandler.useListenerHandler(this.listenerHandler);
		this.commandHandler.loadAll();
		return super.login(token || process.env.DISCORD_TOKEN);
	}
}