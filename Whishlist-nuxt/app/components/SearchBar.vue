<script setup>
import {ref} from 'vue';

const searchQuery = ref('');

const emit = defineEmits(['search']);
function handleSearch() {
  emit('search', searchQuery.value);
}
</script>

<template>
  <form 
    @submit.prevent="handleSearch"
    class="w-full flex items-center gap-3 bg-neutral-900 p-4 rounded-xl shadow-lg max-w-xl mx-auto"
  >
    <input 
      v-model="searchQuery" 
      type="text"
      placeholder="Buscar..."
      class="flex-1 px-4 py-2 rounde-lg bg-neutral-800 text-white placeholder-gray-400 focus:outline-none
        focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />
    <button 
      type="submit"
      class="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-semibold"
    >
      Cercar
    </button>
  </form>
</template>
