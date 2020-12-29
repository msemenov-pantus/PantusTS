import { computed, useContext, useFetch } from "@nuxtjs/composition-api";

export function CategoriesView() {
  const { store } = useContext();
  const CategoriesVuex = computed(() => {
    return store.getters["categories/categories-index/GetCategories"];
  });
  useFetch(async () => {
    await store.dispatch("categories/categories-index/RequestCategories");
  });
  return { CategoriesVuex };
}
