import { FormData } from "@/composition/_validate/validate-type.ts";
import { ref, useContext } from "@nuxtjs/composition-api";

export function formAuthorization() {
  const { store } = useContext();
  async function requestAuthorization(Form: any) {
    const login = Form.login.value;
    const password = Form.password.value;
    return await store.dispatch("users/users-index/RequestAuthProfile", {
      login,
      password,
    });
  }
  const Form: FormData = {
    login: {
      value: "",
      regulations: ["Undefined"],
      regulationsServer: { requestAuthorization: requestAuthorization },
      error: {
        Undefined: { text: "Вы не указали логин", active: false },
        requestAuthorization: {
          text: "Вы указали не верный логин или пароль",
          active: false,
          type: "server",
        },
      },
    },
    password: {
      value: "",
      regulations: ["Undefined"],
      error: {
        Undefined: { text: "Вы не указали пароль", active: false },
      },
    },
  };
  const FormAuthorization = ref(Form);
  return { FormAuthorization };
}
