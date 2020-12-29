export type TypeCategoriesApi = {
  id: number;
  parentId: number;
  name: string;
  code: string;
  depthLevel: number;
  childs:TypeCategoriesApi[]
};
export type TypeCategoriesVuex = {
  id: number;
  parentId: number;
  name: string;
  level: number;
  children: TypeCategoriesApi[] | [];
  visible: boolean,
};
export type TypeCategoriesFilterVuex = {
  id: number;
  parentId: number;
  name: string;
  level: number;
  children: TypeCategoriesApi[] | [];
  visible: boolean;
  checkedType: boolean;
  indeterminate: boolean;
};
export type StateAll = {
  categories: TypeCategoriesVuex[];
  categoriesFilter: TypeCategoriesFilterVuex[],
  checkCategories: boolean;
  checkCategoriesFilter: boolean;
};
