import {
  StateAll,
  TypeProductVuex,
  TypeProductApi,
} from "@/store/products/products-type";
import { MutationTree } from "vuex";

export const state = (): StateAll => ({
  productPopular: [],
  products: [],
  productId: [],
  countProduct: 0,
  limitFilter: 10,
  limitPopular: 30,
  checkProductPopular: false,
});

export const mutations = {
  SetProductPopular(state: StateAll, data: TypeProductVuex[]) {
    state.productPopular = data;
  },
  SetCheckProductPopular(state: StateAll) {
    state.checkProductPopular = true;
  },
};

export const actions: MutationTree<any> = {
  async RequestProductPopular({ commit, state, dispatch }) {
    if (!state.checkProductPopular) {
      const data: TypeProductApi[] = await dispatch(
        "products/products-axios/ProductsAxios",
        {
          /* @typescript-eslint/camelcase */
          page_size: state.limitPopular,
        },
        { root: true }
      );
      commit("SetProductPopular", data);
    }
  },
};

export const getters = {
  GetProductPopular: (s: { productPopular: TypeProductVuex[] }) =>
    s.productPopular,
};
