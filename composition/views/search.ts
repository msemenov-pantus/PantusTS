import { computed, useContext, useFetch } from "@nuxtjs/composition-api";

export function ApplicabilitiesFilterView() {
  const { store, query } = useContext();
  useFetch(async () => {
    await store.dispatch(
      "applicabilities/applicabilities-index/RequestApplicabilitiesFilter"
    );
  });
}
export function ApplicabilitiesFilterForm() {
  const { store, query } = useContext();
  const ApplicabilitiesFilterVuex = computed(() => {
    return store.getters["applicabilities/applicabilities-index/GetApplicabilitiesFilter"];
  });
  return { ApplicabilitiesFilterVuex };
}
