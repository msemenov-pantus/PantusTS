import { computed } from "@nuxtjs/composition-api";
import { TypeApplicabilitiesFilterVuex } from "@/store/applicabilities/applicabilities-type.ts";
export function FilterApplicabiliriesInput(
  selected: number[],
  data: TypeApplicabilitiesFilterVuex[],
  fun: any
) {
  const SelectedNamePanel = computed(() => {
    const nameSelected: string[] = [];
    if (selected.length !== 0) {
      for (const keyData in data) {
        for (const keyId in selected) {
          if (data[keyData].id === selected[keyId]) {
            nameSelected.push(data[keyData].name);
          }
        }
      }
      return nameSelected;
    } else {
      return [];
    }
  });
  const ApplicabilitiesTopUl = (level: number) => {
    if (level !== 1) {
      fun();
    }
  };
  return { SelectedNamePanel, ApplicabilitiesTopUl };
}
