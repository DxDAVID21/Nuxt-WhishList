<script setup>
import { useSearch } from "@/composables/useSearch.js";
import SearchBar from "../components/SearchBar.vue";
import AnimeCard from "../components/AnimeCard.vue";

const { results, loading, error, searchAnime } = useSearch();


</script>

<template>
  <section class="max-w-5xl mx-auto px-4">
    <header class="mb-8">
      <h1 class="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">Buscar Anime</h1>
      <p class="mt-2 text-gray-500 dark:text-gray-400">Descobreix nous animes i afegeix-los a favorits</p>
    </header>
    <SearchBar @search="searchAnime"/>

    <p v-if="loading" class="mt-6 text-center text-indigo-400 animate-pulse">🔍 Cercant animes...</p>
  
    <p v-if="error" class="mt-6 text-center text-red-400">{{ error }}</p>

    <div 
      v-if="results.length" 
      class="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
    >
      <AnimeCard v-for="anime in results" :key="anime.mal_id" :anime="anime"/>
    </div>

    <div
      v-if="!loading && results.length === 0" 
      class="mt-16 text-center text-gray-400"
    >
      ✨ Escriu alguna cosa per començar la cerca
    </div>
  </section>
</template>

