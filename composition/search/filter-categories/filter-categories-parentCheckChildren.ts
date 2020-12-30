import {TypeCategoriesFilterVuex} from "~/store/categories/categories-type";
export function CategoriesParentCheckChildren(store: any) {
  const CategoriesCheckedChildrenValue = (data:TypeCategoriesFilterVuex) => {
    let checked:boolean = true;
    let indeterminate: boolean = false;
    data.children.forEach( element => {
      if(element.checkedType || element.indeterminate){
        indeterminate = true;
      }
      if(!element.checkedType){
        checked = false;
      }
    })
    if(checked){
      indeterminate = false;
    }
    store.commit("categories/categories-index/SetChecked", {
      data: data,
      checkedType: checked,
      indeterminate: indeterminate,
    });
  }
  return { CategoriesCheckedChildrenValue };
}

