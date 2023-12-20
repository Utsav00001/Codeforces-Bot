import { Client, Intents , MessageEmbed}  from 'discord.js';

import { REST }  from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const token = process.env['token']
const CLIENT_ID = process.env['client_id']
const GUILD_ID = process.env['guild_id']
// const fetch = require('node-fetch')


const commands = [{
  name: 'cfbot',
  description: 'Replies with yo!'
}]; 
console.log(CLIENT_ID,GUILD_ID)
const rest = new REST({ version: '9' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
