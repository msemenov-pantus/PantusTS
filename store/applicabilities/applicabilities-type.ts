export type TypeApplicabilitiesApi = {
  id: number;
  name: string;
  code: string;
  childs: TypeApplicabilitiesApi[];
  depthLevel: number;
  parentId: number;
};
export type TypeApplicabilitiesVuex = {
  id: number;
  name: string;
  code: string;
  visible: boolean;
};
export type TypeApplicabilitiesFilterVuex = {
  id: number;
  name: string;
  code: string;
  children: TypeApplicabilitiesApi[];
  level: number;
  parentId: number;
  visible: boolean;
  selectCheck: boolean;
};

export type StateAll = {
  applicabilities: TypeApplicabilitiesVuex[];
  applicabilitiesFilter: TypeApplicabilitiesVuex[];
  checkApplicabilities: boolean;
  checkApplicabilitesFilter: boolean;
};
