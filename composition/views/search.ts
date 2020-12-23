import { computed, useContext, useFetch } from "@nuxtjs/composition-api";

export function ApplicabilitiesFilterView() {
  const { store } = useContext();
  useFetch(async () => {
    await store.dispatch(
      "applicabilities/applicabilities-index/RequestApplicabilitiesFilter"
    );
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
