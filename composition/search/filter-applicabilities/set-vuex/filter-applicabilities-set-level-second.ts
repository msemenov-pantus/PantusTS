import { TypeApplicabilitiesFilterVuex } from "@/store/applicabilities/applicabilities-type";
import { TypeFilterApplicabilities } from "@/store/filter/applicabilities/filter-applicabilities-type";

import { computed, useContext } from "@nuxtjs/composition-api";
export const FilterApplicabilitiesSetAllSecond = (
  index: number,
  element: TypeApplicabilitiesFilterVuex,
  value: boolean,
  store: any
) => {
  const panel:TypeFilterApplicabilities =
    store.getters[
      "filter/applicabilities/filter-applicabilities-index/GetPanel"
    ][index];
  let newFilter: TypeFilterApplicabilities = {dataModel:[], selectedModel:[],selectedGenerations:[],dataGenerations:[],selectedMarka:[]};
  if (value) {
    // Добавлен фильтр
    newFilter = {
      selectedMarka: panel.selectedMarka,
      selectedModel: [element.id, ...panel.selectedModel],
      dataModel: panel.dataModel,
      selectedGenerations: panel.selectedGenerations,
      dataGenerations: [...element.children, ...panel.dataGenerations],
    };
  }
  else if (!value) {
    // удален фильтр;
    const indexSelectedModel = panel.selectedModel.indexOf(element.id);
    newFilter = {
      selectedMarka: panel.selectedMarka,
      dataGenerations: [],
      dataModel: [ ... panel.dataModel],
      selectedGenerations: [],
      selectedModel: [
        ...panel.selectedModel.slice(0, indexSelectedModel),
        ...panel.selectedModel.slice(
          indexSelectedModel + 1,
          panel.selectedModel.length
        ),
      ],
    };
    if(newFilter.selectedModel.length === 0 ){ // Выбранных фильтров нету
      newFilter.dataGenerations = [];
      newFilter.selectedGenerations = [];
    }
    else { // Выбранные фильтры есть
      //   panel.dataGenerations.forEach((dataset) =>{
      //     element.children.forEach((elem)=>{
      //     if(dataset.id !== elem.id){ //
      //       newFilter.dataGenerations.push(elem);
      //     }else { //
      //       return;
      //     }
      //     console.log(newFilter);
      //     console.log("data", dataset.id);
      //     console.log("elem", elem.id);
      //   })
      // })
    }
  }
  store.commit(
    "filter/applicabilities/filter-applicabilities-index/SetLinkPanel",
    {
      index,
      value: newFilter,
    }
  );
};
