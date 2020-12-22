import { StateAll, TypeApplicabilitiesVuex } from "~/store/applicabilities/applicabilities-type";
import { MutationTree } from "vuex";
// import { ApplicabilitiesAxios } from "~/store/applicabilities/applicabilities-axios";

export const state = (): StateAll => ({
  applicabilities: [],
  checkApplicabilities: false,
});

export const mutations = {
  SetApplicabilities(state: StateAll, data: TypeApplicabilitiesVuex[]) {
    state.applicabilities = data;
  },
  TrueCheckApplicabilities(state: StateAll) {
    state.checkApplicabilities = true;
  },
};

export const actions: MutationTree<any> = {
  async RequestApplicabilities({ commit, state, dispatch }) {
    if (!state.checkApplicabilities) {
      // Были ли уже загруженны бренды
      const data: TypeApplicabilitiesVuex[] = await dispatch(
        "applicabilities/applicabilities-axios/ApplicabilitiesAxios",
        {},
        { root: true }
      );
      commit("SetApplicabilities", data);
      commit("TrueCheckApplicabilities");
    }
  },
};

export const getters = {
  GetApplicabilities: (s: { applicabilities: TypeApplicabilitiesVuex[] }) => s.applicabilities,
};
