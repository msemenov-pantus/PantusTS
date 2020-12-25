/***
 *  @type catalogProduct - Каталог для продукта
 */
export type typeCatalogProduct = {
  id: number;
  name: string;
}
/***
 *  @type paramsProduct - параметры для продукта
 */
export type typeParamsProduct ={
  measure: string;
}
/***
 *  @type brandProduct - Бренд для продукта
 */
export type typeBrandProduct = {
  id: number;
  name: string;
  deliveryDelay: string;
}
/***
 *  @type skuProduct - артикуль для продукта
 */
export type typeSkuProduct = {
  normalized: string;
  original: string;
}
/***
 *  @type typeSupplier - поставщик продуктов
 */
export type typeSupplier ={
  deliveryDelay: number;
  deliveryDelayView: string;
  name: string;
}
/***
 *  @type cartProduct - карточка для продукта
 */

export type typeCartProduct  ={
  id: number;
  name: string;
  sku: typeSkuProduct;
  productCardImage: {
    url: string;
  };
  params: typeParamsProduct;
  productCardOem: string[];
  album: string[];
  applicability: typeCatalogProduct[];
  categories: typeCatalogProduct[];
  brand: typeBrandProduct;
}
/***
 *  @type offerProduct - предложения для продукта
 */
export type typeOfferProduct = {
  id: number;
  multiplicity: number;
  prices: number;
  quantity: number;
  supplier: typeSupplier;
}
/***
 *  @type product - единица продукта
 */
export type typeProductVuex ={
  productCard: typeCartProduct;
  productOffer: typeOfferProduct[];
}

export type typeProductApi = {
    id: number,
    name: string,
    images:{
      main: string,
      extra: string[],
    },
    sku:{
      origin: string,
      custom: string,
    },
    brand:{
      id: number,
      name: string,
      code: string,
      deliveryDelay: string,
    },
    categories:typeCatalogProduct[],
    applicabilities: typeCatalogProduct[],
    params:{
      measure: string,
      weight: string,
    }
    oems: number[],
    offers:[
      // [item]{}
      ]
}
