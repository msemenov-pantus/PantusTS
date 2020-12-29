import { computed, useContext, useFetch } from "@nuxtjs/composition-api";

export function ApplicabilitiesFilterView() {
  const { store } = useContext();
  useFetch(async () => {
    await Promise.all([
      store.dispatch("applicabilities/applicabilities-index/RequestApplicabilitiesFilter"),
      store.dispatch("brands/brands-index/RequestBrands"),
    ]);
  });
}
export function ApplicabilitiesFilterForm() {
  const { store } = useContext();
  const ApplicabilitiesFilterVuex = computed(() => {
    return store.getters[
      "applicabilities/applicabilities-index/GetApplicabilitiesFilter"
    ];
  });
  return { ApplicabilitiesFilterVuex };
}
