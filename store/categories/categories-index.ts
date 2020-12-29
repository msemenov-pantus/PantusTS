import { StateAll, TypeCategoriesVuex, TypeCategoriesFilterVuex } from "@/store/categories/categories-type";
import { MutationTree } from "vuex";

export const state = (): StateAll => ({
  categories: [],
  checkCategories: false,
  categoriesFilter: [],
  checkCategoriesFilter: false
});

export const mutations = {
  SetCategories(state: StateAll, data: TypeCategoriesVuex[]) {
    state.categories = data;
  },
  TrueCheckCategories(state: StateAll) {
    state.checkCategories = true;
  },
};

export const actions: MutationTree<any> = {
  async RequestCategories({ commit, state, dispatch }) {
    if (!state.checkBrands) {
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
    if (!state.checkApplicabilities) {
      // Были ли уже загруженны бренды
      const data: TypeCategoriesFilterVuex[] = await dispatch(
        "categories/categories-axios/CategoriesAxios",
        "filter",
        { root: true }
      );
      commit("SetApplicabilitiesFilter", data);
      commit("TrueCheckApplicabilitiesFilter");
    }
  },
};

export const getters = {
  GetCategories: (s: { categories: TypeCategoriesVuex[] }) => s.categories,
};
