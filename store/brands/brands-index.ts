import { StateAll, TypeBrandVuex } from "~/store/brands/brands-type";
import { MutationTree } from "vuex";
import { BrandAxios } from "~/store/brands/brands-axios";

export const state = (): StateAll => ({
  brands: [],
  checkBrands: false,
  limit: 100,
});

export const mutations = {
  SetBrands(state: StateAll, data: TypeBrandVuex[]) {
    state.brands = data;
  },
  TrueCheckBrands(state: StateAll) {
    state.checkBrands = true;
  },
};

export const actions: MutationTree<any> = {
  async RequestBrands({ commit, state }) {
    if (!state.checkBrands) {
      // Были ли уже загруженны бренды
      const data: TypeBrandVuex[] = await BrandAxios();
      commit("SetBrands", data);
      commit("TrueCheckBrands");
    }
  },
};

export const getters = {
  GetBrands: (s: { brands: TypeBrandVuex[] }) => s.brands,
  GetPageBrands: (s: { brands: TypeBrandVuex[]; limit: number }) => (
    id: number
  ) => s.brands.slice((id - 1) * s.limit, s.limit * id),
  GetPageBrandsLength: (s: { brands: TypeBrandVuex[]; limit: number }) => {
    return Math.ceil(s.brands.length / s.limit);
  },
};
