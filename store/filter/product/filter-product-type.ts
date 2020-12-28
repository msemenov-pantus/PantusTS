export type sortType = "ASC" | "DESC" | undefined;
export  type sortName =
  | "brand"
  | "sku"
  | "name"
  | "supplier"
  | "quantity"
  | "deliverydelay"
  | "prices"
  | undefined;

export type TypeFilterProduct = {
  minValue: number;
  maxValue: number;
  brandChecked: number[];
  sortType: sortType;
  sortName:sortName;
  search: string;
  categoriesChecked: number[];
  applicabilitiesChecked: number[];
};
export type StateAll = {
  formFilterProduct: TypeFilterProduct;
};

