import { BotClientConstructor } from './base/client'
import { Command } from './base/command'
import { join } from 'path'

export default <BotClientConstructor> {
	listenerHandlerOptions: {
		directory: join(__dirname, 'listeners'),
	},
	commandHandlerOptions: {
		defaultCooldown: 3000,
		classToHandle: Command,
		directory: join(__dirname, 'commands'),
		prefix: 't!'
	},
	akairoOptions: {
		ownerID: []
	},
	clientOptions: {
		disableMentions: 'everyone',
		fetchAllMembers: false
	},
};