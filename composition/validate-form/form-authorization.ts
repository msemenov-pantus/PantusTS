import { FormData } from "@/composition/_validate/validate-type.ts";
import { ref } from "@nuxtjs/composition-api";

const requestAuthorization = () => {};
const Form: FormData = {
  login: {
    value: "",
    regulations: ["Undefined"],
    error: {
      Undefined: { text: "Вы не указали логин", active: false },
    },
  },
  password: {
    value: "",
    regulations: ["Undefined"],
    regulationsServer: [requestAuthorization],
    error: {
      Undefined: { text: "Вы не указали пароль", active: false },
    },
  },
};
export const FormAuthorization = ref(Form);
