import { useContext, computed } from "@nuxtjs/composition-api";
export function filterProductRange() {
  const { store } = useContext();
  const MinValue = computed(
    () =>
      store.getters["filter/product/filter-product-index/GetMinValue"]
  );
  const MaxValue = computed(
    () =>
      store.getters["filter/product/filter-product-index/GetMaxValue"],
  );
  const SetMaxValue = (value:number) => {
    store.commit("filter/product/filter-product-index/SetMaxValue", {
      max: value
    })
  }
  const SetMinValue = (value:number) => {
    store.commit("filter/product/filter-product-index/SetMinValue", {
      min: value
    })
  }
  return { MinValue, MaxValue,SetMaxValue, SetMinValue }
}
