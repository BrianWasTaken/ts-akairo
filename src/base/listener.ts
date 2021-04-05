import {
	ListenerHandler as AkairoListenerHandler,
	Listener as AkairoListener,
	AkairoHandlerOptions,
	ListenerOptions,
	Category,
} from 'discord-akairo'
import { Collection } from 'discord.js'
import BotClient from './client'

export class Listener extends AkairoListener {
	handler!: ListenerHandler;
	client!: BotClient;
	constructor(id: string, options: ListenerOptions) {
		super(id, options);
	}
}

export class ListenerHandler extends AkairoListenerHandler {
	categories!: Collection<string, Category<string, Listener>>;
	modules!: Collection<string, Listener>;
	client!: BotClient;
	constructor(client: BotClient, options: AkairoHandlerOptions) {
		super(client, options);
	}
}