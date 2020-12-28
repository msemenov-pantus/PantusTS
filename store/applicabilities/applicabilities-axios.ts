import {
  TypeApplicabilitiesApi,
  TypeApplicabilitiesVuex,
  TypeApplicabilitiesFilterVuex,
} from "~/store/applicabilities/applicabilities-type";
import { ActionTree } from "vuex";
const ApplicabilitiesMap = (data: TypeApplicabilitiesApi[]) => {
  const dataset: TypeApplicabilitiesVuex[] = [];
  if (data.length !== 0) {
    for (const key in data) {
      dataset.push({
        id: data[key].id,
        code: data[key].code,
        name: data[key].name,
        visible: false,
      });
    }
  }
  return dataset;
};
const ApplicabilitiesFilterMap = (
  data: TypeApplicabilitiesApi[],
  res?: TypeApplicabilitiesFilterVuex[],
  topParent?: number
) => {
  data.forEach(async (array, index) => {
    if (array.parentId !== null && topParent === undefined) {
      topParent = array.parentId;
    }
    res?.push({
      id: array.id,
      code: array.code,
      name: array.name,
      level: array.depthLevel,
      children: [],
      parentId: array.parentId,
      visible: false,
      selectCheck: false,
    });
    if (array.childs.length > 0) {
      await ApplicabilitiesFilterMap(
        array.childs,
        res?.[index].children,
        topParent
      );
    }
  });
};

export const actions: ActionTree<undefined, any> = {
  async ApplicabilitiesAxios(undefined, check: "filter" | "views") {
    const requestApplicabilities = await this.$axios.get(
      `${process.env.api}/product_applicabilities?view=tree`
    );
    const data: TypeApplicabilitiesApi[] = requestApplicabilities.data;
    if (check === "views") {
      return ApplicabilitiesMap(data);
    } else if (check === "filter") {
      const dataset: TypeApplicabilitiesFilterVuex[] = [];
      ApplicabilitiesFilterMap(data, dataset);
      return dataset;
    }
  },
};
