<script setup>
import {onMounted, ref} from 'vue';
import { useRoute } from 'vue-router';
import { useAnimeDetail } from '@/composables/useAnimeDetail.js';
import { useFavoriteStore } from '@/stores/favoriteStore';

const activeTab = ref("characters");

const route = useRoute();
console.log("Route PARAMS:", route.params);

const favoriteStore = useFavoriteStore();

function toggleFav() {
  if (!anime.value) return;

  const id = anime.value.mal_id;
  if (favoriteStore.isFavorite(id)) {
    favoriteStore.removeFavorite(id);
  } else {
    favoriteStore.addFavorite(anime.value);
  }
}

const id = Number(route.params.id);
console.log("Anime Detail ID:", id);  

const { anime, characters, staff, recommendations, video, loading, error, fetchAnime } = useAnimeDetail();

onMounted(() => {
  fetchAnime(id);
});

</script>

<template>
  <div class="max-w-5xl max-auto p-6 text-white">
    <div v-if="loading" class="text-center text-xl py-10">Carregant...</div>
    <div v-if="error" class="text-red-400">{{ error }}</div>

    <div v-if="anime" class="space-y-8">
      <h1 class="text-4xl font-bold text-center text-gray-900 dark:text-white">{{ anime.title }}</h1>

      <div class="flex justify-center mt-2">
        <button
          @click="toggleFav"
          class="px-6 py-2 rounded-xl font-semibold transition-all shadow-lg"
          :class="favoriteStore.isFavorite(anime.mal_id)
            ? 'bg-red-600 hover:bg-red-700 text-white'
            : 'bg-indigo-600 hover:bg-indigo-700 text-white'"
        >
          {{ 
            favoriteStore.isFavorite(anime.mal_id)
            ? 'Treure de favorits'
            : 'Afegir a favorits'
          }}

        </button>

      </div>

      <div class="flex flex-col md:flex-row gap-6 bg-neutral-900 p-6 rounded-2xl shadow-lg">
        <img 
          :src="anime.images.jpg.image_url" 
          :alt="anime.title"
          class="w-full h-[360px] md:w-64 rounded-xl shadow-md object-cover" />

        <div class="flex-1 space-y-2 text-gray-300">
          <p><strong class="text-white">Type:</strong> {{ anime.type }}</p>
          <p><strong class="text-white">Episodes:</strong> {{ anime.episodes }}</p>
          <p><strong class="text-white">Status:</strong> {{ anime.status }}</p>
          <p><strong class="text-white">Aired:</strong> {{ anime.aired.string }}</p>
          <p><strong class="text-white">Score:</strong> ⭐ {{ anime.score }}</p>
          <div class="mt-4">
            <p class="font-semibold text-white mb-1">Synopsis</p>
            <p class="text-gray-300 leading-relaxed pr-2">{{ anime.synopsis }}</p>
          </div>
          
        </div>
      </div>

      <div
        v-if="video?.promo?.length" 
        class="bg-neutral-900 p-6 rounded-2xl shadow-lg"
      >
        <h2 class="text-2xl font-semibold mb-4">🎬 Tràiler</h2>
        <iframe
          :src="video.promo[0].trailer.embed_url" 
          class="w-full aspect-video rounded-xl"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          loading="lazy"
          allowfullscreen
        ></iframe>
      </div>

      <p v-else class="text-gray-400">Aquest anime no té tràiler disponible.</p>

      <div class="flex gap-4 border-b border-neutral-700 mt-10">
        <button 
          v-for="tab in ['characters', 'staff', 'recommendations']"
          :key="tab"
          @click="activeTab = tab" 
          class="pb-2 px-2 capitalize transition"
          :class="activeTab === tab
            ? 'border-b-2 border-indigo-500 text-gray-900 dark:text-white'
            : 'text-gray-400 hover:text-gray-700 dark:hover:text-white'"
        >
          {{ tab }}
        </button>
      </div>

      <section v-if="activeTab === 'characters'" class="mt-6">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <div 
            v-for="char in characters" 
            :key="char.character.mal_id" 
            class="bg-neutral-900 p-3 rounded-xl text-center hover:scale-105 transition cursor-pointer"
          >
            <img 
              :src="char.character.images.jpg.image_url" 
              :alt="char.character.name"
              class="rounded-lg w-full h-40 object-cover"
            />
            <p class="mt-2 text-sm text-gray-300">{{ char.character.name }}</p>
          </div>
        </div>
      </section>
      
      <section v-if="activeTab === 'staff'" class="mt-6">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <div 
            v-for="s in staff" 
            :key="s.person.mal_id" 
            class="bg-neutral-900 p-3 rounded-xl text-center"
          >
            <img 
              :src="s.person.images.jpg.image_url" 
              :alt="s.person.name" 
              class="rounded-xl w-full h-40 object-cover"
            />
            <p class="mt-2 text-sm text-gray-300">{{ s.person.name }}</p>
            <small class="text-gray-500 text-xs">{{ s.positions.join(', ') }}</small>
          </div>
        </div>
      </section>
      
      <section v-if="activeTab === 'recommendations'" class="mt-6">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <div
            v-for="rec in recommendations"
            :key="rec.entry.mal_id"
            class="bg-neutral-900 p-3 rounded-xl hover:scale-105 transition cursor-pointer"
            @click="$router.push(`/anime/${rec.entry.mal_id}`)"
          >
            <img 
              :src="rec.entry.images.jpg.image_url" 
              :alt="rec.entry.title" 
              class="rounded-xl w-full h-40 object-cover"
            />
            <p class="mt-2 text-sm text-gray-300">{{ rec.entry.title }}</p>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>