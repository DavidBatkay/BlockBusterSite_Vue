<template>
  <header class="sticky top-0 z-50 bg-white border-b shadow-md">
    <div class="container mx-auto flex items-center justify-between py-4 px-6">
      <router-link to="/" class="flex items-center mr-4 -ml-4">
        <img
          src="/logo.png"
          alt="Blockbuster Logo"
          class="h-14 w-auto object-contain"
        />
        <h1 class="text-xl font-semibold hidden lg:block">
          𝘽𝙡𝙤𝙘𝙠𝘽𝙪𝙨𝙩𝙚𝙧
        </h1></router-link
      >
      <nav class="flex xl:space-x-6 md:space-x-3 sm:space-x-0">
        <router-link
          to="/browse"
          class="text-blue-950 text-xs border-transparent border-[3px] hover:border-yellow-300 hover:text-yellow-300 font-bold p-1 rounded-md hover:bg-gradient-to-t from-blue-700 to-blue-400 xl:text-lg md:text-sm"
          >𝘽𝙍𝙊𝙒𝙎𝙀</router-link
        >
        <router-link
          to="/subscription"
          class="text-blue-950 text-xs border-transparent border-[3px] hover:border-yellow-300 hover:text-yellow-300 font-bold p-1 rounded-md hover:bg-gradient-to-t from-blue-700 to-blue-400 xl:text-lg md:text-sm"
          >𝙎𝙐𝘽𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉</router-link
        >
        <router-link
          to="/nostalgiahub"
          class="text-blue-950 text-xs border-transparent border-[3px] hover:border-yellow-300 hover:text-yellow-300 font-bold p-1 rounded-md hover:bg-gradient-to-t from-blue-700 to-blue-400 xl:text-lg md:text-sm"
        >
          <span class="hidden sm:block">𝙉𝙊𝙎𝙏𝘼𝙇𝙂𝙄𝘼 𝙃𝙐𝘽</span>
          <span class="block sm:hidden">𝙃𝙐𝘽</span></router-link
        >
        <router-link
          to="/support"
          class="text-blue-950 text-xs border-transparent border-[3px] hover:border-yellow-300 hover:text-yellow-300 font-bold p-1 rounded-md hover:bg-gradient-to-t from-blue-700 to-blue-400 xl:text-lg md:text-sm hover:bg-blue-700"
        >
          <span class="hidden sm:block">𝙁𝘼𝙌 & 𝙎𝙐𝙋𝙋𝙊𝙍𝙏</span>
          <span class="block sm:hidden">𝙁𝘼𝙌</span>
        </router-link>
      </nav>
      <div
        class="md:flex ml-4 -mr-4 items-center sm:grid sm:grid-cols-1 xl:space-x-4 md:space-x-2 sm:space-x-0"
      >
        <router-link to="/login">
          <button class="text-sm text-blue-600 hover:underline">Log In</button>
        </router-link>

        <router-link
          to="/signup"
          class="xl:px-4 xl:py-2 sm:p-0 bg-gradient-to-t xl:font-bold from-blue-700 to-blue-400 text-yellow-300 text-sm rounded hover:from-blue-700 hover:to-blue-700"
        >
          <span>Sign Up</span>
        </router-link>
      </div>
    </div>
  </header>
</template>
