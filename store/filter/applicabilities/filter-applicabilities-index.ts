import { StateAll } from "@/store/filter/applicabilities/filter-applicabilities-type.ts";
import { TypeFilterApplicabilities } from "@/store/filter/applicabilities/filter-applicabilities-type";

export const state = (): StateAll => ({
  panel: [],
});
export const mutations = {
  SetNewPanel(state: StateAll) {
    state.panel.push({
      selectedMarka: [3138],
      selectedModel: [],
      selectedGenerations: [],
      dataModel: [],
      dataGenerations: [],
    });
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
