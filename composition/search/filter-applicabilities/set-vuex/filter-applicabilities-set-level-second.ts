import {TypeApplicabilitiesFilterVuex} from "@/store/applicabilities/applicabilities-type";
import {TypeFilterApplicabilities} from "@/store/filter/applicabilities/filter-applicabilities-type";

import {computed, useContext} from "@nuxtjs/composition-api";
export const FilterApplicabilitiesSetAllSecond= (index:number, element:TypeApplicabilitiesFilterVuex, value: boolean, store:any) =>{
  const panel = store.getters["filter/applicabilities/filter-applicabilities-index/GetPanel"][index];
  let  data:TypeFilterApplicabilities= {};
  if(value){ // Добавлен фильтр
    data = {
      selectedMarka: panel.selectedMarka,
      selectedModel:[ element.id, ... panel.selectedModel ],
      dataModel: panel.dataModel,
      selectedGenerations: panel.selectedGenerations,
      dataGenerations:  [... element.children, ...panel.dataGenerations ],
    };
  } else if(!value){ // Добавлен фильтр;
    const  indexSelectedModel = panel.selectedModel.indexOf(element.id);
    data = {
      selectedMarka: panel.selectedMarka,
      dataGenerations:[],
      dataModel: panel.dataModel,
      selectedGenerations: [],
      selectedModel:[ ... panel.selectedModel.slice(0, indexSelectedModel), ... panel.selectedModel.slice(indexSelectedModel+1 ,panel.selectedModel.length)]
    };
  }
  store.commit("filter/applicabilities/filter-applicabilities-index/SetLinkPanel", {
    index,
    value: data,
  });
}
