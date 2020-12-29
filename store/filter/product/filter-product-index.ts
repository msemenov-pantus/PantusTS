import { StateAll, TypeFilterProduct, sortName , sortType } from "@/store/filter/product/filter-product-type.ts";

export const state = (): StateAll => ({
  formFilterProduct: {
    applicabilitiesChecked:[],
    brandChecked:[],
    categoriesChecked:[],
    maxValue: 60000,
    minValue: 0,
    search: "",
    sortName: undefined,
    sortType: undefined,
  },
});

export const mutations = {

  SetValue(store: StateAll, value:{min?:number, max?:number}){
    value.min = Number(value.min);
    value.max = Number(value.max);
    if (value.min !== undefined && value.max !== undefined){
      if(value.min <= value.max){
        store.formFilterProduct.minValue  = value.min;
        store.formFilterProduct.maxValue  = value.max;
      }else {
        store.formFilterProduct.minValue  = value.max;
        store.formFilterProduct.maxValue  = value.min;
      }
    }
  },

  SetMinValue(store: StateAll, value:{min:number}){
    value.min = Number(value.min);
      if(value.min >= store.formFilterProduct.maxValue){
        store.formFilterProduct.minValue = store.formFilterProduct.maxValue;
        store.formFilterProduct.maxValue = value.min;
      }else {
        store.formFilterProduct.minValue = value.min;
      }
  },

  SetMaxValue(store: StateAll, value:{max:number}){
    value.max = Number(value.max);
    if(value.max <= store.formFilterProduct.minValue){
      store.formFilterProduct.minValue = value.max;
      store.formFilterProduct.maxValue = store.formFilterProduct.minValue;
    }else {
      store.formFilterProduct.maxValue = value.max;
    }
  },

  SetSearch(store:StateAll, value: string){
    store.formFilterProduct.search = value;
  },

  SetSort(store:StateAll, data:{sortType: sortType, sortName: sortName}) {
    store.formFilterProduct.sortType = data.sortType;
    store.formFilterProduct.sortName = data.sortName;
  },

  SetCategoriesChecked(store:StateAll, data:number[]){
    store.formFilterProduct.categoriesChecked = data;
  },

  SetApplicabilitiesChecked(store:StateAll, data:number[]){
    store.formFilterProduct.applicabilitiesChecked = data;
  },

  SetBrandChecked(store:StateAll, data: number[]){
    store.formFilterProduct.brandChecked = data;
  },

  PushBrandChecked(store:StateAll, data: number){
    store.formFilterProduct.brandChecked.push(data);
  },

  DeleteBrandChecked(store:StateAll, index:number){
    store.formFilterProduct.brandChecked.slice(index, 1);
  },

  ResetAll(store: StateAll){
    store.formFilterProduct = {
      applicabilitiesChecked:[],
        brandChecked:[],
        categoriesChecked:[],
        maxValue: 60000,
        minValue: 0,
        search: "",
        sortName: undefined,
        sortType: undefined,
    };
  },

  ResetProduct(store: StateAll){
    store.formFilterProduct = {
      applicabilitiesChecked: store.formFilterProduct.applicabilitiesChecked,
      brandChecked:[],
      categoriesChecked:[],
      maxValue: 60000,
      minValue: 0,
      search: store.formFilterProduct.search,
      sortName: undefined,
      sortType: undefined,
    };
  },

  ResetApplicabilities(store: StateAll){
    store.formFilterProduct = {
      applicabilitiesChecked: [],
      brandChecked: store.formFilterProduct.brandChecked,
      categoriesChecked: store.formFilterProduct.categoriesChecked,
      maxValue: 60000,
      minValue: 0,
      search: store.formFilterProduct.search,
      sortName: undefined,
      sortType: undefined,
    };
  }
}



export const getters = {
  GetFormFilterProduct: (s: { formFilterProduct:TypeFilterProduct }) => s.formFilterProduct,
  GetMaxValue: (s: { formFilterProduct:TypeFilterProduct }) => s.formFilterProduct.maxValue,
  GetMinValue: (s: { formFilterProduct:TypeFilterProduct }) => s.formFilterProduct.minValue,
  GetSortName: (s: { formFilterProduct: TypeFilterProduct }) => s.formFilterProduct.sortName,
  GetSortType: (s: { formFilterProduct: TypeFilterProduct }) => s.formFilterProduct.sortType,
  GetSearch: (s: { formFilterProduct: TypeFilterProduct }) => s.formFilterProduct.search,
  GetApplicabilitiesChecked: (s: { formFilterProduct: TypeFilterProduct }) => s.formFilterProduct.applicabilitiesChecked,
  GetBrandChecked: (s: { formFilterProduct: TypeFilterProduct }) => s.formFilterProduct.brandChecked,
  GetCategoriesChecked: (s: { formFilterProduct: TypeFilterProduct }) => s.formFilterProduct.categoriesChecked,
};
