import { StateAll } from "@/store/filter/applicabilities/filter-applicabilities-type.ts";
import { TypeFilterApplicabilities } from "@/store/filter/applicabilities/filter-applicabilities-type";
import Vue from "vue";

export const state = (): StateAll => ({
  panel: [],
});
export const mutations = {
  SetNewPanel(state: StateAll) {
    state.panel.push({
      selectedMarka: [],
      selectedModel: [],
      selectedGenerations: [],
      dataModel: [],
      dataGenerations: [],
    });
  },
  SetLinkPanel(
    store: StateAll,
    data: { index: number; value: TypeFilterApplicabilities }
  ) {
    Vue.set(store.panel, data.index, data.value);
  },
  DeleteIndexPanel(state: StateAll, index: number) {
    state.panel.splice(index, 1);
  },

  DeletePanel(state: StateAll) {
    state.panel = [
      {
        selectedMarka: [],
        selectedModel: [],
        selectedGenerations: [],
        dataModel: [],
        dataGenerations: [],
      },
    ];
  },
};
export const getters = {
  GetPanel: (s: { panel: TypeFilterApplicabilities[] }) => s.panel,
};
