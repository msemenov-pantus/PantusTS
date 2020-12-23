import {TypeApplicabilitiesFilterVuex} from "~/store/applicabilities/applicabilities-type.ts";
export  type TypeFilterApplicabilities = {
  selectedMarka: string,
  selectedModel: number[],
  selectedGenerations: number[],
  dataModel: TypeApplicabilitiesFilterVuex[];
  dataGenerations: TypeApplicabilitiesFilterVuex[];
}

export type StateAll = {
  panel: TypeFilterApplicabilities[],
}
