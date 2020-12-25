import { StateAll,typeProductVuex, typeProductApi } from "@/store/products/products-type";
import { MutationTree } from "vuex";

export const state = (): StateAll => ({
  productPopular: [],
  products: [],
  productId: [],
  countProduct: 0,
  limitFilter: 10,
  limitPopular:30,
  checkProductPopular: false,
});

export const mutations = {
  SetProductPopular(state: StateAll, data: typeProductVuex[]) {
    state.productPopular = data;
  },
  SetCheckProductPopular(state: StateAll){
    state.checkProductPopular = true;
  }
};

export const actions: MutationTree<any> = {
  async RequestProductPopular({ commit, state, dispatch }) {
    if (!state.checkProductPopular) {
      const data: typeProductApi[] = await dispatch(
        "products/products-axios/ProductsAxios",
        {
          page_size: state.limitPopular,
        },
        { root: true }
      );
      commit("SetProductPopular", data);
    }
  },
};

export const getters = {
  GetProductPopular: (s: { productPopular: typeProductVuex[] }) => s.productPopular,
};
