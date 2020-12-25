import { TypeApplicabilitiesFilterVuex } from "@/store/applicabilities/applicabilities-type";
import { TypeFilterApplicabilities } from "@/store/filter/applicabilities/filter-applicabilities-type";

export const FilterApplicabilitiesSetAllThree = (
  index: number,
  element: TypeApplicabilitiesFilterVuex,
  value: boolean,
  store: any
) => {
  const  panel = store.getters["filter/applicabilities/filter-applicabilities-index/GetPanel"][index];
  let  newFilter:TypeFilterApplicabilities = {selectedMarka:[], dataGenerations:[],selectedGenerations:[], selectedModel:[], dataModel:[]};
  if (value){
    newFilter = {
      selectedMarka: panel.selectedMarka,
      dataGenerations: panel.dataGenerations,
      dataModel: panel.dataModel,
      selectedGenerations: [ ... panel.selectedGenerations, element.id],
      selectedModel: panel.selectedModel,
    };
  }else {
    console.log("value false");
    const indexSelectedGenerations = panel.selectedGenerations.indexOf(element.id);
    newFilter = {
      selectedMarka: panel.selectedMarka,
      dataGenerations: panel.dataGenerations,
      dataModel: panel.dataModel,
      selectedModel: panel.selectedModel,
      selectedGenerations: [
        ...panel.selectedGenerations.slice(0, indexSelectedGenerations),
        ...panel.selectedGenerations.slice(
          indexSelectedGenerations + 1,
          panel.selectedGenerations.length
        ),
      ],
    };
  }
  store.commit(
    "filter/applicabilities/filter-applicabilities-index/SetLinkPanel",
    {
      index,
      value: newFilter,
    }
  );
};
