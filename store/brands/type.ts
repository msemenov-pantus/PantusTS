export type TypeBrandApi = {
  id: number;
  name: string;
  code: string;
};
export type TypeBrandVuex = {
  id: number;
  name: string;
  code: string;
};
export type StateAll = {
  brands: TypeBrandVuex[];
  checkBrands: boolean;
  limit: number;
};
