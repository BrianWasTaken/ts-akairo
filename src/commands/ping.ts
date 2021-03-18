import { Command } from '../base/command'
import { Message } from 'discord.js'

export default class PingCommand extends Command {
	constructor() {
		super('ping', {
			aliases: ['ping', 'pong'],
			channel: 'guild',
			cooldown: 5000,
			typing: true
		})
	}

	async exec(message: Message) {
		const { shard } = message.guild;
		const before = Date.now();
		const msg = await message.util.send('Pinging...');
		const diff = Date.now() - before;

		return await msg.edit(`**__:ping_pong: Pong!__**\n**Shard:** ${shard.ping}ms\n**Bot:** ${diff}ms`);
	}
}