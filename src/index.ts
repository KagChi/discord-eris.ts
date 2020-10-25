import { CommandClient } from "eris"
const client = new CommandClient("yOuR nIcE ToKen", {}, {
  prefix: "ma!"
}) //Disini kita akan menggunakan Token Bot kita
import { readdirSync } from "fs"
const commandFile = readdirSync("./dist/commands/").forEach(dir => {
  const commands = readdirSync(`./dist/commands/${dir}/`).filter(file => file.endsWith(".js"));
  
  for (let file of commands) {
            let pull = require(`./commands/${dir}/${file}`)
            client.registerCommand(pull.name, async (message, args) => pull.run(client, message, args), {
              aliases: pull.alias,
              description: pull.description
})
    }})


client.on('ready', () => {
  console.log("Bot siap untuk di gunakan") //dia akan memberitahu kita apabila botnya sudah siap di log
})

client.on('messageCreate', async (message) => {
 // if(message.content == "halo") {
  //  client.createMessage(message.channel.id, "Halo juga") //Bot akan merespon Halo Juga apa bila kamu bilang halo
 // }
})

client.connect()