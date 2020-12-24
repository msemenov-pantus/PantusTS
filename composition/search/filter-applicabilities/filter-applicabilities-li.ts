import { ref, useContext } from "@nuxtjs/composition-api";
import { TypeApplicabilitiesFilterVuex } from "~/store/applicabilities/applicabilities-type";
import { FilterApplicabilitiesSetAll } from "~/composition/search/filter-applicabilities/set-vuex/filter-applicabilities-set-all";

export function FilterApplicabiliriesLi(
  element: TypeApplicabilitiesFilterVuex,
  selected: number[]
) {
  const { store } = useContext();
  const selectedLi = ref(false);
  if (selected.length !== 0) {
    selected.forEach((dataset: any) => {
      if (element.id === dataset) {
        selectedLi.value = true;
      }
    });
  }
  const toggleLi = (indexPanel: number) => {
    selectedLi.value = !selectedLi.value;
    FilterApplicabilitiesSetAll(indexPanel, element, selectedLi.value, store);
  };

  return { selectedLi, toggleLi };
}
