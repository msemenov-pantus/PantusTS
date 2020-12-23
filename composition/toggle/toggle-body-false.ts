import { ref, onUnmounted, onMounted } from "@nuxtjs/composition-api";

export function ToggleBodyFalse(Toggle = false) {
  const ToggleBody = ref(Toggle);
  const  checkFalse = ref(false);
  const ToggleBodyFunctionFalse = async () => {
    if(!checkFalse.value){
      ToggleBody.value = false;
    }
    checkFalse.value = false;
  };
  const ToggleBodyFunctionClick = () => {
    checkFalse.value = true;
    ToggleBody.value = !ToggleBody.value;
  };
  const SetBody = () => {
    document.addEventListener("click", ToggleBodyFunctionFalse);
  };
  const DeleteBody = () => {
    document.removeEventListener("click", ToggleBodyFunctionFalse);
  };
  onUnmounted(DeleteBody);
  onMounted(SetBody);
  return { ToggleBody, ToggleBodyFunctionClick };
}
