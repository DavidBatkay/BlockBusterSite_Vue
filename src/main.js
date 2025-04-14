import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

import { createPinia } from "pinia"
const pinia = createPinia()

import "bootstrap-icons/font/bootstrap-icons.css"

createApp(App).use(router).use(pinia).mount("#app")
