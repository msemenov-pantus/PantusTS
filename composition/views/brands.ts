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
  useFetch(async () => {
    await store.dispatch("brands/RequestBrands");
  });
  const Brands = computed(() => {
    return store.getters["brands/GetPageBrands"](Page.value);
  });
  return { Brands };
}
