import {
  TypeCategoriesApi,
  TypeCategoriesVuex,
} from "~/store/categories/categories-type";
import { ActionTree } from "vuex";

const CategoriesMap = (data: TypeCategoriesApi[], dataset: any = []) => {
  data.forEach(async (array, index) => {
    dataset.push({
      id: array.id,
      parentId: array.parentId,
      name: array.name,
      level: array.depthLevel,
      children: [],
      visible: true,
    });
    if (array.childs.length > 0) {
      CategoriesMap(array.childs, dataset[index].children);
    }
  });
  return dataset;
};

const CategoriesFilterMap = (
  data: TypeCategoriesApi[],
  dataset: any = [],
  topParent: number | undefined = undefined) => {
    data.forEach(async (array, index) => {
      if (array.parentId !== null && topParent === undefined) {
        topParent = array.parentId;
      }
      dataset.push({
        id: array.id,
        parentId: array.parentId,
        name: array.name,
        level: array.depthLevel,
        children: [],
        visible: true,
        topParent: topParent,
        checkedType: false,
        indeterminate: false,
      });
      if (array.childs.length > 0) {
        await CategoriesFilterMap(array.childs, dataset[index].children, topParent);
      }
    });
  return dataset;
};

export const actions: ActionTree<any, any> = {
  async CategoriesAxios({}, check: "filter" | "views") {
    const requestCategories = await this.$axios.get(
      `${process.env.api}/product_categories?view=tree`
    );
    const data: TypeCategoriesApi[] = requestCategories.data;
    if (check === "views") {
      return CategoriesMap(data);
    } else if (check === "filter") {
      return CategoriesFilterMap(data);
    }
  },
};
