<script setup>
import { useFavoriteStore } from "@/stores/favoriteStore";

const { anime } = defineProps({
  anime: {
    type: Object,
    required: true,
  },
});

const favoriteStore = useFavoriteStore();

function toggleFav() {
  const id = anime.mal_id;

  if (favoriteStore.isFavorite(id)) {
    favoriteStore.removeFavorite(id);
  } else {
    favoriteStore.addFavorite(anime);
  }
}

const go = () => {
  router.push(`/anime/${anime.mal_id}`);
}
</script>

<template>
  <article
    @click="go" 
    class="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300"
  >
    <div class="relative">
      <img 
        :src="anime.images.jpg.image_url" 
        :alt="anime.title"
        class="w-full h-60 object-cover group-hover:scale-105 transition" 
      />

      <span class="absolute top-2 right-2 px-2 py-1 rounded-lg text-xs font-semibold bg-black/60 text-white">⭐ {{ anime.score ?? "N/A"}}</span>
    </div>
    
    <div class="p-4">
      <h3 class="font-semibold text-lg line-clamp-1">{{ anime.title }}</h3>

      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ anime.type }} · {{ anime.episodes ?? "?" }} eps</p>
    </div>

    <button
      @click.stop="toggleFav"
      class="w-full py-2 font-semibold text-sm transition bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
      :class="{ 'text-red-500': favoriteStore.isFavorite(anime.mal_id) }"
    >
      {{ favoriteStore.isFavorite(anime.mal_id) ? '❤️ Eliminar de favorits' : '🤍 Afegir a favorits' }}
    </button>

    <slot name="actions" :anime="anime"></slot>
  </article>
</template>

