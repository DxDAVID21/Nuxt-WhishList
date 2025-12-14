<script setup>
import { useFavoriteStore } from "@/stores/favoriteStore";
import AnimeCard from "@/components/AnimeCard.vue";

const store = useFavoriteStore();
</script>

<template>
  <section class="max-w-5xl mx-auto px-4">
    <header class="mb-8">
      <h1 class="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">⭐ Favorits </h1>
      <p class="mt-2 text-gray-500 dark:text-gray-400">Els teus animes guardats</p>
    </header>

    <div v-if="store.list.length === 0" class="mt-16 text-center text-gray-400">
      <p class="text-lg">Encara no tens favorits</p>
      <p class="mt-1 text-sm">Explora animes i guarda els que t’agradin ✨</p>
    </div>

    <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      <AnimeCard
        v-for="anime in store.list"
        :key="anime.mal_id"
        :anime="anime"
      />
    </div>
  </section>
</template>
