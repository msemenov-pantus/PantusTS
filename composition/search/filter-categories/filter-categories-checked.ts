import { useContext, computed, ref } from "@nuxtjs/composition-api";
import {TypeCategoriesFilterVuex} from "~/store/categories/categories-type";
import {CategoriesCheckedChildren} from "~/composition/search/filter-categories/filter-categories-children-value";

export function FilterCategoriesChecked() {
  const { store } = useContext();
  const CategoriesChecked = computed(
    () => store.getters["categories/categories-index/GetCategoriesFilter"]
  );
  const CategoriesCheckedClick = (data:TypeCategoriesFilterVuex , value: boolean) =>{
    if(data.level === 1){
      console.log("level 1");
      store.commit("categories/categories-index/SetChecked",
        { data: data, checkedType: value, indeterminate: false });
      CategoriesCheckedChildren(store).CategoriesCheckedChildrenValue(data, value);
    }else {
      console.log("full foreach")
    }

  }

  return { CategoriesCheckedClick};
}
