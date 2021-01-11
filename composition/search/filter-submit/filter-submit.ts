import { useContext , computed } from "@nuxtjs/composition-api";
import { CategoriesCheckedTrue } from "~/composition/search/filter-categories/filter-categories-checked-true";
import { ApplicabilitiesCheckedTrue } from "~/composition/search/filter-applicabilities/filter-appicabilites-checked-true";
import { ApplicabilitiesFilterForm } from "@/composition/views/search";
export function FilterSubmit() {
  const { store } = useContext();
  const CategoriesVuex = ApplicabilitiesFilterForm().CategoriesFilterVuex;
  const PanelApplicabilities = computed(() => {
    return store.getters["filter/applicabilities/filter-applicabilities-index/GetPanel"];
  });
  const FilterSubmit = () =>{
    CategoriesCheckedTrue(store).CategoriesCheckedTrueAll(CategoriesVuex.value);
    ApplicabilitiesCheckedTrue(store).ApplicabilitiesCheckedTrueAll(PanelApplicabilities.value);
  }
  return { FilterSubmit }
}
