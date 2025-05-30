import { WebSocketServer } from "ws"

const wss = new WebSocketServer({ port: 3001 })
const clients = []
wss.on("connection", ws => {
  console.log("New client connected")
  clients.push(ws)
  console.log(`Clients connected: ${clients.length}`)

  ws.on("message", function message(data) {
    clients.forEach(client => {
      client.send(data.toString())
    })
  })

  ws.on("close", ws => {
    console.log("Client disconnected: ", ws)
    clients.splice(clients.indexOf(ws), 1)
    console.log(`Clients connected: ${clients.length}`)
  })

  ws.onerror = function () {
    console.log("Some Error occurred")
  }
})
