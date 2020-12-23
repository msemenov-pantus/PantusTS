import { computed, useContext, useFetch } from "@nuxtjs/composition-api";

export function ApplicabilitiesView() {
  const { store } = useContext();
  const ApplicabilitiesVuex = computed(() => {
    return store.getters[
      "applicabilities/applicabilities-index/GetApplicabilities"
    ];
  });
  useFetch(async () => {
    await store.dispatch(
      "applicabilities/applicabilities-index/RequestApplicabilities"
    );
  });
  return { ApplicabilitiesVuex };
}
