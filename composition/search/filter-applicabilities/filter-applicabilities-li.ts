import { ref } from "@nuxtjs/composition-api";

export function FilterApplicabiliriesLi(element: any, selected: any) {
  const selectedLi = ref(false);
  if (selected.length !== 0) {
    selected.forEach((dataset: any) => {
      if (element.id === dataset) {
        selectedLi.value = true;
      }
    });
  }
  const toggleLi = () => {
    selectedLi.value = false;
  };

  return { selectedLi };
}
