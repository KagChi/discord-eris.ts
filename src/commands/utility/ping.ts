module.exports = {
  name: "ping",
  description: "deskripsi command",
  alias: [],
  run: async (client, message, args) => {
    //code command
    client.createMessage(message.channel.id,"pong!")
  }
}