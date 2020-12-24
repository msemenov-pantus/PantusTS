import { TypeApplicabilitiesFilterVuex } from "@/store/applicabilities/applicabilities-type";
import { TypeFilterApplicabilities } from "@/store/filter/applicabilities/filter-applicabilities-type";

export const FilterApplicabilitiesSetAllFirst = (
  index: number,
  element: TypeApplicabilitiesFilterVuex,
  value: boolean,
  store: any
) => {
  // const  panel = store.getters["filter/applicabilities/filter-applicabilities-index/GetPanel"][index];
  const data: TypeFilterApplicabilities = {
    selectedMarka: [element.id],
    dataGenerations: [],
    dataModel: [...element.children],
    selectedGenerations: [],
    selectedModel: [],
  };
  store.commit(
    "filter/applicabilities/filter-applicabilities-index/SetLinkPanel",
    {
      index,
      value: data,
    }
  );
};
