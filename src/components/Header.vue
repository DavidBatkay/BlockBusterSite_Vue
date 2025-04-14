<script setup>
import { useRouter } from "vue-router"
import { useUserStore } from "../stores/useUserStore.js"
const router = useRouter()
const store = useUserStore()

const navLinks = [
  { to: "/browse", fullText: "𝘽𝙍𝙊𝙒𝙎𝙀", shortText: "𝘽𝙍𝙊𝙒𝙎𝙀" },
  { to: "/subscription", fullText: "𝙎𝙐𝘽𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉", shortText: "𝙎𝙐𝘽𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉" },
  { to: "/nostalgiahub", fullText: "𝙉𝙊𝙎𝙏𝘼𝙇𝙂𝙄𝘼 𝙃𝙐𝘽", shortText: "𝙃𝙐𝘽" },
  { to: "/support", fullText: "𝙁𝘼𝙌 & 𝙎𝙐𝙋𝙋𝙊𝙍𝙏", shortText: "𝙁𝘼𝙌" }
]
const logout = () => {
  store.logOut()
  router.push("/")
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b bg-white shadow-md">
    <div class="container mx-auto flex items-center justify-between px-6 py-4">
      <!-- Logo -->
      <router-link to="/" class="mr-4 -ml-4 flex items-center">
        <img src="/logo.png" alt="Blockbuster Logo" class="h-14 w-auto object-contain" />
        <h1 class="hidden text-xl font-semibold lg:block">𝘽𝙡𝙤𝙘𝙠𝘽𝙪𝙨𝙩𝙚𝙧</h1>
      </router-link>

      <!-- Navigation Links -->
      <nav class="flex sm:space-x-0 md:space-x-3 xl:space-x-6">
        <router-link
          v-for="(link, index) in navLinks"
          :key="index"
          :to="link.to"
          class="rounded-md border-[3px] border-transparent from-blue-700 to-blue-400 p-1 text-xs font-bold text-blue-950 hover:border-yellow-300 hover:bg-gradient-to-t hover:text-yellow-300 md:text-sm xl:text-lg"
        >
          <span class="hidden sm:block">{{ link.fullText }}</span>
          <span class="block sm:hidden">{{ link.shortText }}</span>
        </router-link>
      </nav>

      <!-- User Actions -->
      <div
        class="-mr-4 ml-4 items-center sm:grid sm:grid-cols-1 sm:space-x-0 md:flex md:space-x-2 xl:space-x-4"
      >
        <template v-if="store.isLoggedIn">
          <!-- Profile Picture & Logout Button -->
          <router-link to="/myaccount" class="flex items-center space-x-2">
            <img
              :src="store.user.image"
              alt="User Avatar"
              class="h-8 w-8 rounded-full object-cover"
            />
          </router-link>
          <button @click="logout" class="text-sm text-red-600 hover:underline">Log Out</button>
        </template>

        <template v-if="!store.isLoggedIn">
          <!-- Login & Sign Up Buttons -->
          <router-link to="/login">
            <button class="text-sm text-blue-600 hover:underline">Log In</button>
          </router-link>
          <router-link
            to="/signup"
            class="rounded bg-gradient-to-t from-blue-700 to-blue-400 text-sm text-yellow-300 hover:from-blue-700 hover:to-blue-700 sm:p-0 xl:px-4 xl:py-2 xl:font-bold"
          >
            <span>Sign Up</span>
          </router-link>
        </template>
      </div>
    </div>
  </header>
</template>
