import { TypeApplicabilitiesApi, TypeApplicabilitiesVuex } from "~/store/applicabilities/applicabilities-type";
import {MutationTree} from "vuex";
const ApplicabilitiesMap = (data: TypeApplicabilitiesApi[]) => {
  const dataset: TypeApplicabilitiesVuex[] = [];
  if (data.length !== 0) {
    for (const key in data) {
      dataset.push({
        id: data[key].id,
        code: data[key].code,
        name: data[key].name,
      });
    }
  }
  return dataset;
};
export const actions: MutationTree<any>  = {
  async ApplicabilitiesAxios() {
    const requestApplicabilities = await this.$axios.get(
      `${process.env.api}/product_applicabilities?view=tree`
    );
    const data: TypeApplicabilitiesApi[] = requestApplicabilities.data;
    return ApplicabilitiesMap(data);
  },
};
