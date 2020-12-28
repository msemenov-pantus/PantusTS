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
    store.commit("filter/product/filter-product-index/SetValue", {
      max: value
    })
  }
  const SetMinValue = (value:number) => {
    console.log(value);
    store.commit("filter/product/filter-product-index/SetValue", {
      min: value
    })
  }
  console.log(MaxValue);
  return { MinValue, MaxValue,SetMaxValue, SetMinValue }
}
