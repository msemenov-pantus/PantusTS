import { computed, useContext, useFetch } from "@nuxtjs/composition-api";

export function BrandsView() {
  const { store, query } = useContext();
  const Page = computed(() => {
    if (query.value.page === undefined) {
      return 1;
    } else {
      return query.value.page;
    }
  });
  const BrandsVuex = computed(() => {
    return store.getters["brands/brands-index/GetPageBrands"](Page.value);
  });
  useFetch(async () => {
    await store.dispatch("brands/brands-index/RequestBrands");
  });
  return { BrandsVuex };
}
