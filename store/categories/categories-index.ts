import {
  StateAll,
  TypeCategoriesVuex,
  TypeCategoriesFilterVuex,
} from "@/store/categories/categories-type";
import { MutationTree } from "vuex";
import Vue from  "vue"

export const state = (): StateAll => ({
  categories: [],
  checkCategories: false,
  categoriesFilter: [],
  checkCategoriesFilter: false,
});

export const mutations = {
  SetCategories(state: StateAll, data: TypeCategoriesVuex[]) {
    state.categories = data;
  },
  SetCategoriesFilter(state: StateAll, data: TypeCategoriesFilterVuex[]) {
    state.categoriesFilter = data;
  },
  TrueCheckCategories(state: StateAll) {
    state.checkCategories = true;
  },
  TrueCheckCategoriesFilter(state: StateAll) {
    state.checkCategoriesFilter = true;
  },
  SetChecked(state: StateAll, data:{data:TypeCategoriesFilterVuex, checkedType: boolean, indeterminate: boolean  }){
    Vue.set(data.data, "indeterminate", data.indeterminate );
    Vue.set(data.data, "checkedType", data.checkedType);
  }
};

export const actions: MutationTree<any> = {
  async RequestCategories({ commit, state, dispatch }) {
    if (!state.checkCategories) {
      const data: TypeCategoriesVuex[] = await dispatch(
        "categories/categories-axios/CategoriesAxios",
        "views",
        { root: true }
      );
      commit("SetCategories", data);
      commit("TrueCheckCategories");
    }
  },
  async RequestCategoriesFilter({ commit, state, dispatch }) {
    if (!state.checkCategoriesFilter) {
      // Были ли уже загруженны бренды
      const data: TypeCategoriesFilterVuex[] = await dispatch(
        "categories/categories-axios/CategoriesAxios",
        "filter",
        { root: true }
      );
      commit("SetCategoriesFilter", data);
      commit("TrueCheckCategoriesFilter");
    }
  },
};

export const getters = {
  GetCategories: (s: { categories: TypeCategoriesVuex[] }) => s.categories,
  GetCategoriesFilter: (s: { categoriesFilter: TypeCategoriesFilterVuex[] }) =>
    s.categoriesFilter,
};
