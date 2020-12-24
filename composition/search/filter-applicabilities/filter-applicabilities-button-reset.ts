import { useContext, computed } from "@nuxtjs/composition-api";

export function FilterApplicabiliriesButtonReset() {
  const { store } = useContext();
  const PanelAll = computed(
    () =>
      store.getters[
        "filter/applicabilities/filter-applicabilities-index/GetPanel"
      ]
  );
  const ResetPanel = () => {
    store.commit(
      "filter/applicabilities/filter-applicabilities-index/DeletePanel"
    );
  };
  return { PanelAll, ResetPanel };
}
