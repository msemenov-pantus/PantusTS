import axios from "axios";
import { TypeBrandApi, TypeBrandVuex } from "@/store/brands/type";

const BrandsMap = (data: TypeBrandApi[]) => {
  const dataset: TypeBrandVuex[] = [];
  for (const key in data) {
    dataset.push({
      id: data[key].id,
      code: data[key].code,
      name: data[key].name,
    });
  }
  return dataset;
};

export async function BrandAxios() {
  const requestBrands = await axios.get(`${process.env.api}/product_brands`);
  const data: TypeBrandApi[] = requestBrands.data;
  return BrandsMap(data);
}
