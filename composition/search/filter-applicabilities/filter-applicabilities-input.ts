import { computed, watch, useContext } from "@nuxtjs/composition-api";
import { TypeApplicabilitiesFilterVuex } from "~/store/applicabilities/applicabilities-type.ts";
export function FilterApplicabiliriesInput(
  props: { selected: number[]; dataset: TypeApplicabilitiesFilterVuex[] },
  fun: any
) {
  const { store } = useContext();
  const PanelAll = computed(() => {
    return store.getters[
      "filter/applicabilities/filter-applicabilities-index/GetPanel"
    ];
  });
  const SelectedNamePanel = computed(() => {
    const nameSelected: string[] = [];
    if (props.selected.length !== 0) {
      for (const keyData in props.dataset) {
        for (const keyId in props.selected) {
          if (props.dataset[keyData].id === props.selected[keyId]) {
            nameSelected.push(props.dataset[keyData].name);
          }
        }
      }
      return nameSelected;
    }
  });
  const ApplicabilitiesTopUl = (level: number) => {
    if (level !== 1) {
      fun(); // функция Не скрывать Select
    }
  };
  return { SelectedNamePanel, ApplicabilitiesTopUl };
}
