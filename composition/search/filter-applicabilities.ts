import { useContext, computed , onMounted } from "@nuxtjs/composition-api";

export function FilterApplicabiliries() {
  const { store } = useContext();
  const Panel = computed(
    () => store.getters["filter/applicabilities/filter-applicabilities-index/GetPanel"]
  );
  const AddPanel = () =>{
    if(Panel.value.length === 0){
      store.commit("filter/applicabilities/filter-applicabilities-index/SetNewPanel");
    }
  }
  onMounted(AddPanel);
  return { Panel, };
}
