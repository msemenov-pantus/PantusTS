import { computed, useContext, useFetch } from "@nuxtjs/composition-api";

export function PopularView() {
  const { store } = useContext();
  const PopularVuex = computed(() => {
    return store.getters["products/products-index/GetProductPopular"];
  });
  useFetch(async () => {
    await store.dispatch("products/products-index/RequestProductPopular");
  });
  return { PopularVuex };
}
