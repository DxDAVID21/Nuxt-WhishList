import {ref, inject} from "vue";
import {jikan} from "@/api/jikan.js";


export function useAnimeDetail() {
  const anime = ref(null);
  const characters = ref([]);
  const staff = ref([]);
  const recommendations = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const video = ref(null);

  const globalLoading = inject("globalLoading");

  const wait = (ms) => new Promise((res) => setTimeout(res, ms));

  const fetchAnime = async (id) => {
    try {
      globalLoading.value = true;
      loading.value = true;
      error.value = null;

      // 1) Anime
      const animeRes = await jikan.anime(id);
      anime.value = animeRes.data.data;
      
      await wait(700);
      const videoRes = await jikan.video(id);
      video.value = videoRes.data.data;

      await wait(700); // evita el 429

      // 2) Characters
      const charRes = await jikan.characters(id);
      characters.value = charRes.data.data;

      await wait(700);

      // 3) Staff
      const staffRes = await jikan.staff(id);
      staff.value = staffRes.data.data;

      await wait(700);

      // 4) Recommendations
      const recRes = await jikan.recommendations(id);
      recommendations.value = recRes.data.data;
      
    } catch (err) {
      error.value = "Error fetching anime details";
      console.error(err);
    } finally {
      loading.value = false;
      globalLoading.value = false;
    }
  };
  return { anime, characters, staff, recommendations, video, loading, error, fetchAnime };
}