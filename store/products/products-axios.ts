import { typeProductVuex, typeProductApi} from "~/store/products/products-type";
import { ActionTree } from "vuex";
const ProductMap = (data: typeProductApi[]):typeProductVuex[] => {
  const dataset:any[] = [];
      if (data.length !== 0) {
      data.forEach(elem => {
        dataset.push({
          ProductCard: {
            // Карточка Товара
            id: elem.id, // id Товара
            name: elem.name, // Название товара
            params: {
              // Параметры товара
              measure: elem.params.measure,
            },
            sku: {
              // Артикуль товара
              original: elem.sku.origin, // Оригинал
              normalized: elem.sku.custom, // Ссылка
            },
            ProductCardImage: {
              url: elem.images.main, // Изображение
            },
            album: [],
            ProductCardOem: elem.oems, // OEM
            brand: {
              // brand
              id: elem.brand.id,
              name: elem.brand.name,
              deliveryDelay: elem.brand.deliveryDelay,
            },
            categories: [],
            applicabilities: [],
          },
          productOffer: [],
        });
        if (elem.categories.length !== 0) {
          // Категории
          elem.categories.forEach(data => {
            dataset[dataset.length - 1].ProductCard.categories.push({
              id: data.id,
              name: data.name,
            });
          });
        }
        if (elem.applicabilities.length !== 0) {
          // Применяемости
          elem.applicabilities.forEach(data => {
            dataset[dataset.length - 1].ProductCard.applicabilities.push({
              id: data.id,
              name: data.name,
            });
          });
        }
        if (elem.images.extra.length !== 0) {
          // Альбом товара
          elem.images.extra.forEach(data => {
            dataset[dataset.length - 1].images.extra.push({ url: data });
          });
        }
        elem.offers.forEach(data => {
          // Предложение Товара
          dataset[dataset.length - 1].productOffer.push({
            id: data.id,
            prices: data.price,
            quantity: data.quantity,
            supplier: {
              name: data.supplier.name,
              deliveryDelay: data.supplier.deliveryDelay,
              deliveryDelayView: data.supplier.deliveryDelayView,
            },
            multiplicity: data.supplier.orderMultiplicity,
          });
        });
      });
      return dataset;
    }
};
export const actions: ActionTree<any, any> = {
  async BrandAxios() {
    const requestProducts = await this.$axios.get(
      `${process.env.api}/products_filter`
    );
    const data: typeProductApi[] = requestProducts.data;
    return ProductMap(data);
  },
};
