/***
 *  @type catalogProduct - Каталог для продукта
 */
export type TypeCatalogProduct = {
  id: number;
  name: string;
};
/***
 *  @type paramsProduct - параметры для продукта
 */
export type TypeParamsProduct = {
  measure: string;
};
/***
 *  @type brandProduct - Бренд для продукта
 */
export type TypeBrandProduct = {
  id: number;
  name: string;
  deliveryDelay: number;
};
/***
 *  @type skuProduct - артикуль для продукта
 */
export type TypeSkuProduct = {
  normalized: string;
  original: string;
};
/***
 *  @type TypeSupplier - поставщик продуктов
 */
export type TypeSupplier = {
  deliveryDelay: number;
  name: string;
};
/***
 *  @type cartProduct - карточка для продукта
 */

export type TypeCartProduct = {
  id: number;
  name: string;
  sku: TypeSkuProduct;
  productCardImage: {
    url: string;
  };
  params: TypeParamsProduct;
  oem: string[];
  album: string[];
  applicability: TypeCatalogProduct[];
  categories: TypeCatalogProduct[];
  brand: TypeBrandProduct;
};
/***
 *  @type offerProduct - предложения для продукта
 */
export type TypeOfferProduct = {
  id: number;
  multiplicity: number;
  prices: number;
  quantity: number;
  supplier: TypeSupplier;
};
/***
 *  @type product - единица продукта
 */
export type TypeProductVuex = {
  productCard: TypeCartProduct;
  productOffer: TypeOfferProduct[];
};

export type TypeProductApi = {
  id: number;
  name: string;
  images: {
    main: string;
    extra: string[];
  };
  sku: {
    origin: string;
    custom: string;
  };
  brand: {
    id: number;
    name: string;
    code: string;
    deliveryDelay: string;
  };
  categories: TypeCatalogProduct[];
  applicabilities: TypeCatalogProduct[];
  params: {
    measure: string;
    weight: string;
  };
  oems: number[];
  offers: offerApi[];
};
export type offerApi = {
  id: number;
  name: string;
  quantity: number;
  supplier: {
    code: number;
    name: string;
    storehouse: string;
    deliveryDelay: string;
    orderMultiplicity: number;
  };
  price: number;
};

export type StateAll = {
  products: TypeProductVuex[];
  productId: TypeProductVuex[];
  productPopular: TypeProductVuex[];
  countProduct: number;
  limitFilter: number;
  limitPopular: number;
  checkProductPopular: boolean;
};
