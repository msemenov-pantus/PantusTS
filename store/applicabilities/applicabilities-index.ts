import {
  StateAll,
  TypeApplicabilitiesFilterVuex,
  TypeApplicabilitiesVuex,
} from "~/store/applicabilities/applicabilities-type";
import { MutationTree } from "vuex";

export const state = (): StateAll => ({
  applicabilities: [],
  applicabilitiesFilter: [],
  checkApplicabilities: false,
  checkApplicabilitesFilter: false,
});

export const mutations = {
  SetApplicabilities(state: StateAll, data: TypeApplicabilitiesVuex[]) {
    state.applicabilities = data;
  },
  TrueCheckApplicabilities(state: StateAll) {
    state.checkApplicabilities = true;
  },
  SetApplicabilitiesFilter(
    state: StateAll,
    data: TypeApplicabilitiesFilterVuex[]
  ) {
    state.applicabilitiesFilter = data;
  },
  SetApplicabilitiesFilterTopSelect(state: StateAll, index: number) {
    state.applicabilitiesFilter[index].selectCheck = !state
      .applicabilitiesFilter[index].selectCheck;
  },
  TrueCheckApplicabilitiesFilter(state: StateAll) {
    state.checkApplicabilitesFilter = true;
  },
};

export const actions: MutationTree<any> = {
  async RequestApplicabilities({ commit, state, dispatch }) {
    if (!state.checkApplicabilities) {
      // Были ли уже загруженны бренды
      const data: TypeApplicabilitiesVuex[] = await dispatch(
        "applicabilities/applicabilities-axios/ApplicabilitiesAxios",
        "views",
        { root: true }
      );
      commit("SetApplicabilities", data);
      commit("TrueCheckApplicabilities");
    }
  },
  async RequestApplicabilitiesFilter({ commit, state, dispatch }) {
    if (!state.checkApplicabilities) {
      // Были ли уже загруженны бренды
      const data: TypeApplicabilitiesVuex[] = await dispatch(
        "applicabilities/applicabilities-axios/ApplicabilitiesAxios",
        "filter",
        { root: true }
      );
      commit("SetApplicabilitiesFilter", data);
      commit("TrueCheckApplicabilitiesFilter");
    }
  },
};

export const getters = {
  GetApplicabilities: (s: { applicabilities: TypeApplicabilitiesVuex[] }) =>
    s.applicabilities,

  GetApplicabilitiesFilter: (s: {
    applicabilitiesFilter: TypeApplicabilitiesFilterVuex[];
  }) => s.applicabilitiesFilter,
};
