import { TypeApplicabilitiesFilterVuex } from "@/store/applicabilities/applicabilities-type";
import { TypeFilterApplicabilities } from "@/store/filter/applicabilities/filter-applicabilities-type";

export const FilterApplicabilitiesSetAllFirst = (
  index: number,
  element: TypeApplicabilitiesFilterVuex,
  value: boolean,
  store: any
) => {
  const IndexApplicabilities = store.getters[
    "applicabilities/applicabilities-index/GetApplicabilitiesFilter"
  ].findIndex((elem: any) => elem.id === element.id);
  store.commit(
    "applicabilities/applicabilities-index/SetApplicabilitiesFilterTopSelect",
    IndexApplicabilities
  );
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
