import  {StateAll , TypeBrandVuex} from "~/store/brands/type"

export const state = ():StateAll => ({
  brands: [],
  checkBrands: false,
});
export  const  mutation = {
  SetBrand(state:StateAll, data:TypeBrandVuex[]){
    state.brands = data;
  }
}

