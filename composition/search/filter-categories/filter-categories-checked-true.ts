import {TypeCategoriesFilterVuex} from "~/store/categories/categories-type";
export function CategoriesCheckedTrue(store:any) {
  const CategoriesCheckedTrue = (dataset:TypeCategoriesFilterVuex) =>{
    if(dataset.checkedType || dataset.indeterminate){
      if(dataset.checkedType){
        store.commit("filter/product/filter-product-index/PushCategoriesChecked", dataset.id);
      }
      dataset.children.forEach( element => {
        CategoriesCheckedTrue(element);
      })
    }
  }
  const CategoriesCheckedTrueAll = (dataset:TypeCategoriesFilterVuex[]) =>{
    store.commit("filter/product/filter-product-index/OnlyResetCategories");
    dataset.forEach(data => {
      CategoriesCheckedTrue(data);
    })
  }
  return { CategoriesCheckedTrueAll };
}
