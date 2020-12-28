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
    if (value.min !== undefined && value.max !== undefined){
      if(value.min <= value.max){
        store.formFilterProduct.minValue  = value.min;
        store.formFilterProduct.maxValue  = value.max;
      }else {
        store.formFilterProduct.minValue  = value.max;
        store.formFilterProduct.maxValue  = value.min;
      }
    }else {
      value.max || typeof value.max === 'number' ? store.formFilterProduct.maxValue = value.max : null;
      value.min ? store.formFilterProduct.minValue = value.min : null;
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
  GetFormFilterProduct: (s: { formFilterProduct:TypeFilterProduct[] }) => s.formFilterProduct,
  GetMaxValue: (s: { maxValue: number }) => s.maxValue,
  GetMinValue: (s: { minValue: number }) => s.minValue,
  GetSortName: (s: { sortName: string }) => s.sortName,
  GetSortType: (s: { sortType: string }) => s.sortType,
  GetSearch: (s: { search: string }) => s.search,
  GetApplicabilitiesChecked: (s: { applicabilitiesChecked: number[] }) => s.applicabilitiesChecked,
  GetBrandChecked: (s: { brandChecked: number[] }) => s.brandChecked,
  GetCategoriesChecked: (s: { categoriesChecked: number[] }) => s.categoriesChecked,
};
