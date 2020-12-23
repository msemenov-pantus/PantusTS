import { useContext, computed, onMounted } from "@nuxtjs/composition-api";

export function FilterApplicabiliries() {
  const { store } = useContext();
  const Panel = computed(
    () =>
      store.getters[
        "filter/applicabilities/filter-applicabilities-index/GetPanel"
      ]
  );
  const AddCheckPanel = () => {
    if (Panel.value.length === 0) {
      store.commit(
        "filter/applicabilities/filter-applicabilities-index/SetNewPanel"
      );
    }
  };
  const AddPanel = () => {
    store.commit(
      "filter/applicabilities/filter-applicabilities-index/SetNewPanel"
    );
  };
  onMounted(AddCheckPanel);
  return { Panel, AddPanel };
}
export function FilterApplicabiliriesPanel() {
  const { store } = useContext();
  const PanelAll = computed(
    () =>
      store.getters[
        "filter/applicabilities/filter-applicabilities-index/GetPanel"
      ]
  );
  const ApplicabilitiesVuex = computed(
    () =>
      store.getters[
        "applicabilities/applicabilities-index/GetApplicabilitiesFilter"
      ]
  );
  const DeletePanel = (index: number) => {
    store.commit(
      "filter/applicabilities/filter-applicabilities-index/DeleteIndexPanel",
      index
    );
  };
  return { PanelAll, DeletePanel, ApplicabilitiesVuex };
}
