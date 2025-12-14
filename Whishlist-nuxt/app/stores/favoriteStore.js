import {defineStore} from 'pinia';

export const useFavoriteStore = defineStore('favoriteStore', {
  state: () => ({
    list: []
  }),

  persist: true,

  actions: {  
    addFavorite(anime) {
      if (!this.list.some(a => a.mal_id === anime.mal_id)) {
        this.list.push(anime);
      }
    },
    removeFavorite(id) {
      this.list = this.list.filter(
        a => a.mal_id !== id
      );
    },

    isFavorite(id) {
      return this.list.some(a => a.mal_id === id);
    }
  }
});

