const url = import.meta.env.VITE_WS_BASE_URL
export const ws = new WebSocket(url)
import { useNewsStore } from "./stores/useNewsStore"
ws.onopen = ws => {
  console.log("Connected to server: ", ws)
}
ws.onmessage = data => {
  const store = useNewsStore()
  store.news = JSON.parse(data.data)
  //   console.log("Message from server: ", data.data)
}
