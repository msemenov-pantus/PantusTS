import { useContext, computed, ref } from "@nuxtjs/composition-api";
import {TypeCategoriesFilterVuex} from "~/store/categories/categories-type";
import {CategoriesCheckedChildren} from "~/composition/search/filter-categories/filter-categories-children-value";
import {CategoriesParentCheckChildren} from "~/composition/search/filter-categories/filter-categories-parentCheckChildren";
import  {CategoriesParent} from "~/composition/search/filter-categories/filter-categories-parentAll";
export function FilterCategoriesChecked() {
  const { store } = useContext();
  const CategoriesFilterVuex = computed(() => {
    return store.getters["categories/categories-index/GetCategoriesFilter"];
  });
  const CategoriesCheckedClick = (data:TypeCategoriesFilterVuex , value: boolean) =>{
    store.commit("categories/categories-index/SetChecked",
      { data: data, checkedType: value, indeterminate: false });
    CategoriesCheckedChildren(store).CategoriesCheckedChildrenValue(data, value);
    if(data.level !== 1){
      const DataParentTop =  CategoriesFilterVuex.value.filter(
        (elem: { id: number; } ) => elem.id === data.topParent )[0];
      if(data.level === 2){
        CategoriesParentCheckChildren(store).CategoriesCheckedChildrenValue(DataParentTop);
      }
      else {
        CategoriesParent(store).CategoriesParentAll(DataParentTop);
      }
    }
  }
  return { CategoriesCheckedClick };
}
