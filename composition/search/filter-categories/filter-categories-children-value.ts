import {TypeCategoriesFilterVuex} from "~/store/categories/categories-type";
export function CategoriesCheckedChildren(store: any) {
  const CategoriesCheckedChildrenValue = (data:TypeCategoriesFilterVuex , value: boolean) =>{
    data.children.forEach( element => {
      store.commit("categories/categories-index/SetChecked",
        { data: element, checkedType: value, indeterminate: false });
      if (element.children.length !== 0) {
        CategoriesCheckedChildrenValue(element , value);
      }
    })
  }
  return { CategoriesCheckedChildrenValue};
}
