import {TypeCategoriesFilterVuex} from "~/store/categories/categories-type";
import {CategoriesParentCheckChildren} from "~/composition/search/filter-categories/filter-categories-parentCheckChildren";

export function CategoriesParent(store: any) {

  const CategoriesParentAll = (data: TypeCategoriesFilterVuex) => {
    data.children.forEach(elem =>{ // Проверка если ли у потомков потомки!
        if(elem.children.length !== 0){
          CategoriesParentAll(elem);
        }
      })
    // Потомки закончились
    CategoriesParentCheckChildren(store).CategoriesCheckedChildrenValue(data);
  }
  return { CategoriesParentAll };
}

