export type TypeCategoriesApi = {
  id: number;
  parentId: number;
  name: string;
  code: string;
  depthLevel: number;
  childs: TypeCategoriesApi[];
};
export type TypeCategoriesVuex = {
  id: number;
  parentId: number;
  name: string;
  level: number;
  children: TypeCategoriesVuex[];
  visible: boolean;
};
export type TypeCategoriesFilterVuex = {
  id: number;
  parentId: number;
  name: string;
  level: number;
  children: TypeCategoriesFilterVuex[] ;
  visible: boolean;
  checkedType: boolean;
  indeterminate: boolean;
  topParent: number;
};
export type StateAll = {
  categories: TypeCategoriesVuex[];
  categoriesFilter: TypeCategoriesFilterVuex[];
  checkCategories: boolean;
  checkCategoriesFilter: boolean;
};
