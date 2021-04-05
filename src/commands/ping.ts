import { Message, Guild } from 'discord.js'
import { Command } from '../base/command'

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
		const { shard } = message.guild as Guild;
		const before = Date.now();
		const msg = await message.channel.send('Pinging...');
		const diff = Date.now() - before;

		return await msg.edit(`**__:ping_pong: Pong!__**\n**Shard:** ${shard.ping}ms\n**Bot:** ${diff}ms`);
	}
}