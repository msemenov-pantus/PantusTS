import {   TypeFilterApplicabilities } from "~/store/filter/applicabilities/filter-applicabilities-type";
export function ApplicabilitiesCheckedTrue(store:any) {
  const ApplicabilitiesCheckedTrue = (dataset:number[]) =>{
    dataset.forEach(id =>{
      store.commit("filter/product/filter-product-index/PushApplicabilitiesChecked", id);
    })
  }
  const ApplicabilitiesCheckedTrueAll = (dataset:TypeFilterApplicabilities[]) =>{
    store.commit("filter/product/filter-product-index/OnlyResetApplicabilities");
    dataset.forEach(data =>{
      ApplicabilitiesCheckedTrue(data.selectedMarka);
      ApplicabilitiesCheckedTrue(data.selectedModel);
      ApplicabilitiesCheckedTrue(data.selectedGenerations);
    })
  }
  return { ApplicabilitiesCheckedTrueAll };
}
