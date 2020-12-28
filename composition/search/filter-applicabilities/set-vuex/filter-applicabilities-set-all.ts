import { TypeApplicabilitiesFilterVuex } from "~/store/applicabilities/applicabilities-type";
import { FilterApplicabilitiesSetAllFirst } from "~/composition/search/filter-applicabilities/set-vuex/filter-applicabilities-set-level-first";
import { FilterApplicabilitiesSetAllSecond } from "~/composition/search/filter-applicabilities/set-vuex/filter-applicabilities-set-level-second";
import { FilterApplicabilitiesSetAllThree } from "@/composition/search/filter-applicabilities/set-vuex/filter-applicabilities-set-level-three";
export const FilterApplicabilitiesSetAll = (
  index: number,
  element: TypeApplicabilitiesFilterVuex,
  value: boolean,
  store: any
) => {
  if (element.level === 1) {
    FilterApplicabilitiesSetAllFirst(index, element, value, store);
  } else if (element.level === 2) {
    FilterApplicabilitiesSetAllSecond(index, element, value, store);
  } else if (element.level === 3) {
    FilterApplicabilitiesSetAllThree(index, element, value, store);
  }
};
