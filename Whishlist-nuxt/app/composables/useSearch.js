import { jikan } from "@/api/jikan.js";
import { useGlobalLoading } from "@/composables/useGlobalLoading";

export function useSearch() {
  const results = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const globalLoading = useGlobalLoading();

  const searchAnime = async (query) => {
    try{
      loading.value = true;
      globalLoading.value = true;
      error.value = null;
      const res = await jikan.search(query);
      results.value = res.data.data || [];
    } catch (err) {
      console.error(err);
      error.value = "Error fetching data";
    } finally {
      loading.value = false;
      globalLoading.value = false;
    }
  };

  return { results, loading, error, searchAnime};
}