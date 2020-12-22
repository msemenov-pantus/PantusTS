export type TypeApplicabilitiesApi = {
  id: number;
  name: string;
  code: string;
};
export type TypeApplicabilitiesVuex = {
  id: number;
  name: string;
  code: string;
};
export type StateAll = {
  applicabilities: TypeApplicabilitiesVuex[];
  checkApplicabilities: boolean;
};
