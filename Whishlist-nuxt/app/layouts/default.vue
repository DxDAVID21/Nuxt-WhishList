<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  <header class="backdrop-blur-lg bg-white/70 dark:bg-gray-800/70 border-b border-gray-200 dark:border-gray-700/40 sticky top-0 z-50">
    <nav class="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
      <NuxtLink to="/" class="text-xl text-gray-900 dark:text-white font-bold tracking-wide hover:text-indigo-500 transition">
        WhishList
      </NuxtLink>

      <div class="flex items-center gap-5 text-sm font-medium">
        <NuxtLink to="/" class="hover:text-blue-500 transition">Home</NuxtLink>
        <NuxtLink to="/about" class="hover:text-blue-500 transition">About</NuxtLink>
        <NuxtLink to="/search" class="hover:text-blue-500 transition">Search</NuxtLink>
        <NuxtLink to="/ai" class="hover:text-blue-500 transition">IA</NuxtLink>
        <NuxtLink to="/favorites" class="hover:text-red-500 transition">Favorites</NuxtLink>
      </div>
    </nav>
  </header>

  <main class="max-w-5xl mx-auto px-4 py-6">
    <slot />
  </main>
  </div>
</template>