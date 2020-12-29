import { useContext, computed, ref } from "@nuxtjs/composition-api";
export function FilterBrandChecked(id: number) {
  const { store } = useContext();
  const Checked = ref(false);
  const BrandChecked = computed(
    () => store.getters["filter/product/filter-product-index/GetBrandChecked"]
  );
  const FilterBrandChecked = BrandChecked.value.indexOf(id);
  if (FilterBrandChecked !== -1) {
    Checked.value = true;
  }
  const ClickBrandChecked = () => {
    Checked.value = !Checked.value;
    if (Checked.value) {
      store.commit("filter/product/filter-product-index/PushBrandChecked", id);
    } else {
     const index: number = BrandChecked.value.indexOf(id);
      store.commit("filter/product/filter-product-index/DeleteBrandChecked", index);
    }
};
  return { Checked, ClickBrandChecked };
}
