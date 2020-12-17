import axios from 'axios';
import  {TypeBrandApi, TypeBrandVuex} from "@/vuex/modules/brands/type"
export  async function BrandAxios() {
  const data:TypeBrandApi[] = await axios.get(`${process.env.api}/product_brands`);
  return BrandsMap(data);
}

const BrandsMap = (data:TypeBrandApi[]) => {
  const dataset: TypeBrandVuex[] = [];
  for (const key in data) {
    dataset.push({
      id: data[key].id,
      code: data[key].code,
      name: data[key].name
    })
  }
  return dataset;
}
