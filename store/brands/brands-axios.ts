import { TypeBrandApi, TypeBrandVuex } from "~/store/brands/brands-type";
import { ActionTree } from "vuex";
const BrandsMap = (data: TypeBrandApi[]) => {
  const dataset: TypeBrandVuex[] = [];
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
export const actions: ActionTree<any, any> = {
  async BrandAxios() {
    const requestBrands = await this.$axios.get(
      `${process.env.api}/product_brands`
    );
    const data: TypeBrandApi[] = requestBrands.data;
    return BrandsMap(data);
  },
};
