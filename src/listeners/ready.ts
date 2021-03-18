import { Listener } from '../base/listener'
import { Message } from 'discord.js'

export default class ReadyListener extends Listener {
	constructor() {
		super('ready', {
			emitter: 'client',
			event: 'ready',
			type: 'once'
		})
	}

	exec() {
		return console.log(`${this.client.user.tag} is ready!`)
	}
}